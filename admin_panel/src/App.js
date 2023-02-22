import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      <ToastContainer
        position={"top-center"}
        autoClose={2000}
        theme={"colored"}
      />
    </>
  );
}

export default App;
