import React, {lazy} from "react";
import { Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const OverviewPage = lazy(() => import("./pages/OverviewPage"));

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/overview" element={<OverviewPage></OverviewPage>}></Route>
        </Routes>
    );
}

export default App;