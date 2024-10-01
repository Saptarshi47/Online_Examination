import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./home/Homepage";
import Dashboard from "./components/Dashboard";
import StudentRegistration from "./components/StudentRegistration";
import Nav from "./Nav";
import QuestionSection from "./components/QuestionSection";
import QuestionDetails from "./components/QuestionDetails";
import AddQuestion from "./components/AddQuestion";
// import ClassDashboard from "./components/ClassDashboard";
import SubjectsDashboard from "./components/SubjectsDashboard";
import ExamDetails from "./components/ExamDetails";
import UpdateQuestion from "./components/UpdateQuestion";
import AddExamDetails from "./components/AddExamDetails";
import ShowExamDetails from "./components/ShowExamDetails";
import UpdateExamDetails from "./components/UpdateExamDetails";

// import Nav from "./Nav";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addStudent" element={<StudentRegistration />} />
        <Route path="/questionSection" element={<QuestionSection />} />
        <Route path="/questionDetails" element={<QuestionDetails />} />
        <Route path="/addQuestion" element={<AddQuestion />} />
        <Route path="/updateQuestion" element={<UpdateQuestion />} />
        <Route path="/subjectSection" element={<SubjectsDashboard />} />
        <Route path="/examDetails" element={<ExamDetails />} />
        <Route path="/addExamDetails" element={<AddExamDetails />} />
        <Route path="/showExamDetails" element={<ShowExamDetails />} />
        <Route path="/updateExamDetails" element={<UpdateExamDetails />} />
      </Routes>
    </>
  );
}

export default App;
