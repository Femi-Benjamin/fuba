import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import PaymentHistory from "./pages/PaymentHistory";
import Signup from "./pages/user-domain/Signup";
import TutorSignup from "./pages/user-domain/TutorSignup";
import LearnerSignup from "./pages/user-domain/LearnerSignup";
import TutorDashboard from "./pages/tutor-dashboard/TutorDashboard";
import UploadCourse from "./pages/tutor-dashboard/UploadCourse";
import Login from "./pages/user-domain/Login";
import Videos from './pages/tutor-dashboard/Videos';
import Settings from './pages/tutor-dashboard/Settings';
import Drafts from './pages/tutor-dashboard/Drafts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course_details" element={<CourseDetails />} />
        <Route path="/payment_history" element={<PaymentHistory />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tutor-signup" element={<TutorSignup />} />
        <Route path="/learner-signup" element={<LearnerSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<TutorDashboard />} />
        <Route path="/upload-course" element={<UploadCourse />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/drafts" element={<Drafts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
