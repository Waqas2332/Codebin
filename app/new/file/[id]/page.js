"use client";
import Menu from "@/components/Menu";
import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      <pre>
        <code>{value}</code>
      </pre>
      <Menu />
    </div>
  );
}
