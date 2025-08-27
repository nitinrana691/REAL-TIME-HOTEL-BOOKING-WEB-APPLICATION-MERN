import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import Featured from "./components/featured/Featured";
import HotelList from "./components/HotelList/HotelList"; // A component to show all hotel data for the selected city
import Chatbot from './components/chatbot/chatbot';
import Payment from './components/Payment/Payment';
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Featured />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/construction" element={<UnderConstruction />} />
      </Routes>
      <Chatbot />
      <Payment />
      <PaymentSuccess />
    </BrowserRouter>
  );
}

export default App;