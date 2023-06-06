import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Details from "./components/details";
import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:id" element={<Details />} />
    </Routes>
  );
};
export default App;
