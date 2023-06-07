import Navbar from "../component/navbar";
import React, { useState, useEffect } from "react";
import {
  TextAnalysisClient,
  AzureKeyCredential,
} from "@azure/ai-text-analytics";

function TestInstan() {
  const [result, setResult] = useState([]);
  const [story, setStory] = useState([]);
  const [loading, setLoading] = useState(false);
  async function CustomSingleLabelClassification(story) {
    setLoading(true);
    if (story.length == 0) {
      console.log("KOSONGG");
      return;
    }
    const documents = [story];
    const endpoint = process.env.REACT_APP_PUBLIC_LANGSERVENDPOINT;
    const apiKey = process.env.REACT_APP_PUBLIC_LANGSERVAPIKEY1;
    const deploymentName = process.env.REACT_APP_PUBLIC_LANGSERV_DEPLOYMENTNAME;
    const projectName = process.env.REACT_APP_PUBLIC_LANGSERV_PROJECTNAME;
    const client = new TextAnalysisClient(
      endpoint,
      new AzureKeyCredential(apiKey)
    );
    const actions = [
      {
        kind: "CustomSingleLabelClassification",
        deploymentName: deploymentName,
        projectName: projectName,
      },
    ];
    const poller = await client.beginAnalyzeBatch(actions, documents, "en");
    const results = await poller.pollUntilDone();

    for await (const actionResult of results) {
      if (actionResult.kind !== "CustomSingleLabelClassification") {
        throw new Error(
          `Expected a CustomSingleLabelClassification results but got: ${actionResult.kind}`
        );
      }
      if (actionResult.error) {
        const { code, message } = actionResult.error;
        throw new Error(`Unexpected error (${code}): ${message}`);
      }
      for await (const result of actionResult.results) {
        console.log(`- Document ${result.id}`);
        if (result.error) {
          const { code, message } = result.error;
          throw new Error(`Unexpected error (${code}): ${message}`);
        }
        const learningStyle = result.classifications[0].category;
        console.log(`\tClassification: ${learningStyle}`);
        setResult(learningStyle);  
      }
    }
    setLoading(false);
  }

  const getLearningStyle = () => {
    CustomSingleLabelClassification(story);
  };
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div className="flex pt-[80px] space-x-3"></div>
        <div className="flex justify-center ml-[100px] font-semibold text-center text-3xl mt-[40px]">
          Test Instan
        </div>
        <div className="flex-col space-y-1 my-[50px] ml-[400px] font-regular text-xl bg-yellow h-[150px] w-[800px] px-5 py-10 mt-[40px] rounded-lg">
          <div>
            <textarea
              className="text-xl text-center rounded-md bg-lightyellow w-full h-[90px] px-5 py-1"
              rows="10"
              placeholder="Tulis kebiasaan belajarmu di sini dalam bahasa inggris"
              onChange={(event) => setStory(event.target.value)}
            ></textarea>
          </div>
        </div>
        <div>
          <button
            onClick={() => getLearningStyle()}
            className="flex-col bg-yellow hover:bg-[#D99D04] ml-[700px] rounded-lg w-[200px] h-[40px] text-2xl text-white px-20 py-1"
          >
            Test
          </button>
        </div>
        <div className="flex-col space-y-3 mt-10 my-[50px] ml-[400px] font-regular text-xl text-center bg-blue h-[150px] w-[800px] px-5 py-2 rounded-lg">
          <div>
            <p className="text-2xl text-center text-white  h-[30px] py-1">
              Hasil
            </p>
          </div>
          <div className="flex space-x-10 px-5">
            <div className="flex bg-lightblue rounded-md w-[3000px] h-[80px]">
              <p className="text-xl text-center  h-[16px] px-5 py-1">
                {result}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default TestInstan;
