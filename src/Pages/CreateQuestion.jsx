import { useContext, useState } from "react";
import { questionContext } from "../App";

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const {addQuestion} = useContext(questionContext)
 
  
  

  const submitQuestion = () => {
    if (!question.trim() || !option1 || !option2 || !option3 || !option4 || !answer) {
      alert("All fields are required.");
      return;
    }

    const newQuestion = {
      id: Math.floor(Math.random()*10000),
      question: question.trim(),
      options: [option1, option2, option3, option4],
      answer: answer,
    };

    addQuestion(newQuestion)
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");
    alert("Question Added Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">Create a New Question</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <label className="block text-lg font-semibold text-gray-700 mb-2">Question</label>
        <textarea
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question here..."
          rows="4"
        ></textarea>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Option 1</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              placeholder="Enter option 1"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Option 2</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              placeholder="Enter option 2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Option 3</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              placeholder="Enter option 3"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Option 4</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              placeholder="Enter option 4"
            />
          </div>
        </div>

        <label className="block text-gray-700 font-medium mt-4 mb-2">Correct Answer</label>
        <select
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        >
          <option value="">Select the correct answer</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>

        <button
          onClick={submitQuestion}
          className="mt-5 w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Question
        </button>
      </div>

   
    </div>
  );
};

export default CreateQuestion;
