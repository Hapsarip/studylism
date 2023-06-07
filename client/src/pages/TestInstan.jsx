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
        <div className="flex pt-60 space-x-3"></div>

        <div className="flex-col space-y-10 my-[100px] ml-[300px] font-medium text-xl bg-yellow h-[250px] w-[1800px] px-5 py-5 rounded-lg">
          <div>
            <textarea
              className="text-2xl text-center bg-lightyellow w-full h-[40px] px-5 py-1"
              rows="10"
              placeholder="Write your feelings here..."
              onChange={(event) => setStory(event.target.value)}
            ></textarea>
          </div>
        </div>
        <div>
          <button
            onClick={() => getLearningStyle()}
            className="flex-col bg-black ml-[950px] rounded-lg w-[200px] h-[40px] text-2xl text-white  h-[16px] px-60 py-1"
          >
            Test
          </button>
        </div>
        <div className="flex-col space-y-10 mt-20 my-[100px] ml-[300px] font-medium text-xl bg-blue h-[200px] w-[1800px] px-5 py-5 rounded-lg">
          <div>
            <p className="text-4xl text-center text-white  h-[16px] py-1">
              Result
            </p>
          </div>
          <div className="flex space-x-10 px-5">
            <div className="flex bg-lightblue rounded-lg w-[3000px] h-[100px]">
              <p className="text-2xl text-center  h-[16px] px-5 py-1">
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
