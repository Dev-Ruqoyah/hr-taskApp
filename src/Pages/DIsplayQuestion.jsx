import { useContext, useState } from "react";
import { questionContext } from "../App";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DisplayQuestion = () => {
  const { questionnaire } = useContext(questionContext);
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState(0);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const selectAnswer = (val, id, ans) => {
    setDisplayAnswer(false);
    let correct = ans == val ? 1 : 0;

    setScore((prev) => {
      if (correct === 1 && !answer[id]) return prev + 1;
      else if (answer[id] && !correct) return prev - 1;
      else return prev;
    });

    setAnswer((prev) => ({ ...prev, [id]: correct }));
  };

  const submitTest = () => {
    setDisplayAnswer(true);
  };

  const exportPdf = () => {
    const input = document.getElementById("questions-container");
    if (!input) {
      console.error("Element with ID 'questions-container' not found!");
      return;
    }

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 120;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("questions.pdf");
    });
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div id="questions-container" className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Questionnaire</h2>
          {displayAnswer && <p>Your score is {score}</p>}
          {questionnaire.length === 0 ? (
            <p className="text-gray-600">No questions added yet.</p>
          ) : (
            questionnaire.map((question, index) => (
              <div key={question.id} className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
                <h4 className="text-lg font-semibold text-gray-800">{`Q${index + 1}: ${question.question}`}</h4>

                <ul className="list-disc list-inside mt-2 space-y-2">
                  {question.options.map((option, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span>{option.key}</span>
                      <input
                        type="radio"
                        name={`option-${question.id}`} // Unique name per question
                        value={option.key}
                        id={`option-${question.id}-${i}`}
                        className="cursor-pointer"
                        onChange={(e) => selectAnswer(e.target.value, question.id, question.answer)}
                      />
                      <label htmlFor={`option-${question.id}-${i}`} className="cursor-pointer">
                        {option.val}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>

        {/* Buttons moved outside the map function */}
        {questionnaire.length > 0 && (
          <>
            <button
              onClick={submitTest}
              className="mt-5 w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Test
            </button>
            <button
              onClick={exportPdf}
              className="mt-5 w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Export Test
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default DisplayQuestion;
