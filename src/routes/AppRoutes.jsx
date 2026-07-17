import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Membership from "../pages/Membership";
import Trainers from "../pages/Trainers";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/Dashboard";
import TrainerDashboard from "../pages/trainer/Dashboard";
import MemberDashboard from "../pages/member/Dashboard";
import ProgramsAdmin from "../pages/admin/Programs";
import TrainersAdmin from "../pages/admin/Trainers";
import Members from "../pages/admin/Members";
import MembershipPlans from "../pages/admin/MembershipPlans";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
      <Route path="/member/dashboard" element={<MemberDashboard />} />
      <Route path="/admin/programs" element={<ProgramsAdmin />} />
      <Route path="/admin/trainers" element={<TrainersAdmin />} />
      <Route path="/admin/members" element={<Members />} />
      <Route path="/admin/membership-plans" element={<MembershipPlans />} />
    </Routes>
  );
};

export default AppRoutes;