import React, {lazy} from "react";
import { Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
    );
}

export default App;;
