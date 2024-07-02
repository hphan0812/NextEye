import React, {lazy} from "react";
import { Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/welcome" element={<WelcomePage></WelcomePage>}></Route>
            <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Routes>
    );
}

export default App;