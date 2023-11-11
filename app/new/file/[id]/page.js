"use client";
import Menu from "@/components/Menu";
import axios from "axios";
import { useEffect, useState } from "react";
import hljs from "highlight.js";

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

  useEffect(() => {
    hljs.highlightAll();
  }, [value]);

  return (
    <>
      <div class="wrapper">
        <div class="line-numbers">
          {value.split("\n").map((_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>
        <pre>
          <code id="code-display">{value}</code>
        </pre>
      </div>
      <Menu />
    </>
  );
}
