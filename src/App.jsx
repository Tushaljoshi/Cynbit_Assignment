import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import HomePage from "./pages/HomePage";
import DiscoveryPage from "./pages/DiscoveryPage";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discovery" element={<DiscoveryPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
