import { useRouter } from "next/router";
import React from "react";

export default function InnerExample() {
  const { back } = useRouter();

  const goBack = () => {
    back();
  };

  return (
    <main style={{ height: "100vh" }}>
      <h3>This is an inner example</h3>
      <div onClick={goBack}>
        <span>Go Back</span>
      </div>
    </main>
  );
}
