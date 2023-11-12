"use client";
import Menu from "@/components/Menu";
import axios from "axios";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function page({ params }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/api/document/${params.id}`);
      if (response.status !== 200) {
        alert("Error in fetching Data");
        return;
      }
      setValue(response.data.value);
    }
    getData();
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="line-numbers">
          {value.split("\n").map((_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>
        <pre>
          <code id="code-display">
            <SyntaxHighlighter style={dracula}>{value}</SyntaxHighlighter>
          </code>
        </pre>
      </div>
      <Menu />
    </>
  );
}
