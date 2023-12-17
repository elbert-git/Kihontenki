import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/home";
import QuizPage from "./pages/quizPage/quiz";
import ResetPage from "./pages/resetDataPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/quiz" element={<QuizPage/>}/>
        <Route path="/resetData" element={<ResetPage/>}/>
        <Route path="*" element={"oh we fucked up lmao"}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

