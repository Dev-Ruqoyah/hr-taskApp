import { useContext } from "react";
import { questionContext } from "../App";

const DisplayQusetion = () => {
  const { questionnaire } = useContext(questionContext);

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Questionnaire
          </h2>
          {questionnaire.length === 0 ? (
            <p className="text-gray-600">No questions added yet.</p>
          ) : (
            questionnaire.map((question, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-md mb-4"
              >
                <h4 className="text-lg font-semibold text-gray-800">{`Q${
                  index + 1
                }: ${question.question}`}</h4>
                <p>{question.id}</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  {question.options.map((option, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`option-${question.question}`}
                        value={option}
                        id={`option-${i}`}
                        className="cursor-pointer"
                      />
                      <label htmlFor={`option-${i}`} className="cursor-pointer">
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayQusetion;
