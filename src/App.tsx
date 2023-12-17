import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/home";
import QuizPage from "./pages/quizPage/quiz";
import ResetPage from "./pages/resetDataPage";

function App() {
  return (
    <BrowserRouter basename="/Kihontenki/">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/quiz" element={<QuizPage/>}/>
        <Route path="/resetData" element={<ResetPage/>}/>
        <Route path="*" element={"oooohh something went wrong"}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

