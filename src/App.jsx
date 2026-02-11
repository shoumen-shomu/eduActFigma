import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
