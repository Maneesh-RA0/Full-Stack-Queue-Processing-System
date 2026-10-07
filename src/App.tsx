import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BotConfigPage from "./pages/BotConfigPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/config" element={<BotConfigPage />} />
        </Routes>
    );
}