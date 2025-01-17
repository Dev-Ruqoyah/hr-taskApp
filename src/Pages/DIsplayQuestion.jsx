import { useContext, useState } from "react";
import { questionContext } from "../App";

const DisplayQusetion = () => {
  const { questionnaire } = useContext(questionContext);
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState(0);
  const [displayAnswer,setDisplayAnswer] = useState(false)
  const selectAnser = (val, id,ans) => {
    setDisplayAnswer(false)
    let correct = ans == val ? 1 : 0;
  
    setScore(prev =>{
      console.log(prev);
      
      if(correct == 1 && !answer[id]) return prev + 1;
      else if(answer[id] && !correct) return prev - 1;
      else return prev;
    })
    setAnswer((prev) => {
      return { ...prev, [id]: correct };
    });
  };
  const submitTest = () => {
    setDisplayAnswer(true)
    // let score = 0;
    // for (let ans in answer) {
    //   for (let index = 0; index < questionnaire.length; index++) {
    //     const element = questionnaire[index];
    //     // console.log(element);
    //     // console.log(answer[ans]);

    //     if (element.id == ans && element.answer == answer[ans]) {
    //       // console.log("true");
    //       ++score;
    //       // console.log(score);
    //     }
    //   }
    // }
    // setScore(score);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Questionnaire
          </h2>
         {displayAnswer && <p>Your score is {score}</p>}
          {questionnaire.length === 0 ? (
            <p className="text-gray-600">No questions added yet.</p>
          ) : (
            questionnaire.map((question, index) => (
              <div
                key={question.id}
                className="bg-gray-100 p-4 rounded-md shadow-md mb-4"
              >
                <h4 className="text-lg font-semibold text-gray-800">{`Q${
                  index + 1
                }: ${question.question}`}</h4>

                <ul className="list-disc list-inside mt-2 space-y-2">
                  {question.options.map((option, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span>{option.key}</span>
                      <input
                        type="radio"
                        name={`option-${question.question}`}
                        value={option.key}
                        id={`option-${i}`}
                        className="cursor-pointer"
                        onChange={(e) =>
                          selectAnser(e.target.value, question.id,question.answer)
                        }
                      />
                      <label htmlFor={`option-${i}`} className="cursor-pointer">
                        {option.val}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}

          <button onClick={submitTest} className="mt-5 w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit Test</button>
        </div>
      </div>
    </>
  );
};

export default DisplayQusetion;
