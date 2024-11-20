import React, { useState } from "react";
import Gnb from "./components/Gnb";
import Checklist from "./components/Checklist";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Gnb />
      <Checklist/>
    </main>
  );
}