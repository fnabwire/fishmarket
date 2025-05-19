import { toast } from "react-toastify";
import FishermanDashboard from "../components/FisherManDashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { userAuth } from "../contexts/AuthContext";

export default function FisherManDashboardPage() {
   const {loggedInUser} = userAuth()
   
  return (
    <div>
      <Navbar/>
      <h1 className="text-3xl font-bold my-6">{loggedInUser?.name}'s Dashboard</h1>
      <FishermanDashboard />
      <Footer/>
    </div>
  );
}