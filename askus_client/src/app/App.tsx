import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import type React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="wrap">
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
};

export default App;
