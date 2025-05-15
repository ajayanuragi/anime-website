import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
