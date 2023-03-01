import Naav from "./Components/Nav/Naav";
import Footer from "./Components/Footer/Footer";
import AppRoutes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.scss";


function App() {
  return (
    <div className="App">
      <Naav />
      <AppRoutes />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
