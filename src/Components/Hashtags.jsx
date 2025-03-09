import React, { useEffect, useState } from "react";
import Card from "./Card";

let Hashtags = () => {
  // States
  let [finalData, setFinalData] = useState([
    "Enter keywords or post description",
    "Click on the Generate button",
    "Copy relevant hashtags",
    "Paste into your post or comment",
    "Publish your post and engage with your audience",
  ]);
  let [disc, setDisc] = useState("");
  let [loader, setLoader] = useState(false);

  // Handling Generate
  let handleGenerate = async () => {
    try {
      setFinalData([]);
      setDisc("");
      const prompt = `Prompt:Generate ten sets and high-engagement Instagram hashtags based on the given post description:
      Post Description: {${disc}}
      
      Instructions:
      If description is provided empty, politely and interactively ask the user to 'describe the post' ended by double (,,).
      
      The hashtags must be relevant, popular, and engagement-boosting.
      
      Do not include captions, generate only hashtags.

      Use a mix of broad and niche-specific hashtags.
      
      Do not include spaces; hashtags must be in camelCase or lowercase (e.g., #InstaVibes, #travelgoals).
      
      Each set must end with ,, for easy splitting.
      
      Format:
      #hashtag1, #hashtag2, #hashtag3, ...,,
      #hashtag1, #hashtag2, #hashtag3, ...,,
      #hashtag1, #hashtag2, #hashtag3, ...,,
      
      Example Output:
      #GoodVibesOnly #SunsetLover #ChasingDreams #MotivationDaily #WeekendVibes #FitnessJourney #FoodieLife #TechInnovator #DigitalCreator #NatureEscape,,  
      #AdventureAwaits #NatureLover #StayInspired #MorningHustle #CityLights #CreativeFlow #DreamBig, #SocialGrowth #ArtisticVibes #SelfCareSunday,,  
      #SuccessMindset #DailyMotivation #GoGetter #NeverGiveUp, #HustleMode #WorkHardPlayHard #LevelUp #InspirationEveryday  #PushYourLimits #NoExcuses,,`;

      console.log("Generating the #tags...");
      let data = await puter.ai.chat(prompt);
      // console.log(data);
      let fData = data.message.content
        .split(",,")
        .splice(0, data.message.content.split(",,").length - 1);
      for (let i of fData) {
        console.log(i);
      }
      setFinalData(fData);
    } catch (e) {
      console.warn(e);
    }
  };
  // Handling Loader
  useEffect(() => {
    // console.log('This is the final data: ',typeof finalData);
    if (finalData.length === 0) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [finalData]);

  return (
    <>
      <div>
        {/* Inputs */}
        <div className="flex gap-3 my-10 mx-10 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-40 2xl:mx-50 ">
          <input
            type="text"
            name=""
            id="postDis"
            placeholder="Describe Your Post"
            className="border-2 border-purple-900 outline-none px-4 py-2 pFont rounded-md w-full"
            value={disc}
            onChange={(e) => {
              setDisc(() => e.target.value);
            }}
          />
          <button
            className="border-2 border-bg-purple-900 bg-purple-900 text-white px-3 py-2 pFont rounded-md active:bg-black active:motion-preset-pop motion-duration-100"
            onClick={() => handleGenerate()}
          >
            Generate
          </button>
        </div>
        {/* Output */}
        <div className="bg-zinc-100 rounded p-4 my-10 mx-10 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-40 2xl:mx-50">
          {/* Card */}
          <div className={loader ? "hidden" : "block"}>
            {finalData.map((v, i, a) => {
              return <Card data={v} key={i} />;
            })}
          </div>
          {/* Loader */}
          <div
            role="status"
            className={`flex justify-center ${loader ? `block` : "hidden"}`}
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-800"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hashtags;
