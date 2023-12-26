import { useState } from "react";
import InNavbar from "../../components/InNavbar";
import ArticleComparison from "./Components/ArticleComparison";
import CompareHeader from "./Components/Compare-header";
import WarningFooter from "./Components/WarningFooter";




export default function Comparison() {
  const [article, setArticle]= useState();
  const [newsource1, changeNewsSource1]= useState(null);
  const [newsource2, changeNewsSource2]= useState(null);
  
  {/* 
  - The event id should be fetched first.
  - side 1 selected
  - side 2 selected
  */}
  return (
    <main className="absolute w-full border min-h-screen border-black flex flex-col">
      <InNavbar />

      <h2>Compare Articles</h2>

      {/* The selection bar where you select news sources in a dropdown*/}
      <div className="flex-1">
        <CompareHeader
          newsource1={newsource1}
          newsource2={newsource2}
          changeNewsSource1={changeNewsSource1}
          changeNewsSource2={changeNewsSource2}
        />
      </div>

      {/* The actual comparison content */}
      <ArticleComparison
        className="
        h-full
      "
      />

      <WarningFooter />
    </main>
  );
}