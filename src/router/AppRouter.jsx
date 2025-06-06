import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login & Registro */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* JournalApp */}
        <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};