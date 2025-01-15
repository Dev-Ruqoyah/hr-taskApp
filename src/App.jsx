import { Routes, Route } from "react-router-dom";
import CreateQuestion from "./Pages/CreateQuestion";
import NavBar from "./Component/NavBar";
import { createContext, useState } from "react";
import DisplayQusetion from "./Pages/DIsplayQuestion";

export const questionContext = createContext();
function App() {
  const [questionnaire, setQuestionnaire] = useState([]);
  const addQuestion = (question) =>{
    setQuestionnaire((prev)=>[...prev,question])
  }
  return (
    <>
      <NavBar />
      <questionContext.Provider value={{questionnaire: questionnaire, addQuestion:addQuestion}} >
      <Routes>
        <Route path="/create-questions" element={<CreateQuestion />} />
        <Route path="/display-questions" element={<DisplayQusetion/>}/>
      </Routes>
      </questionContext.Provider>
    
    </>
  );
}

export default App;
