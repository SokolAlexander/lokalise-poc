import { useRouter } from "next/router";
import React from "react";

export default function Example() {
  const { push, back } = useRouter();

  const goToInner = () => {
    push("inner/inner_example");
  };

  const goBack = () => {
    back();
  };

  return (
    <main style={{ height: "100vh" }}>
      <h3>This is an example</h3>
      <div onClick={goToInner}>
        <span>Go to Inner page</span>
      </div>
      <div onClick={goBack}>
        <span>Go Back</span>
      </div>
    </main>
  );
}
