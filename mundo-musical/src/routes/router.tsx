
import PrivateRoute from "@/components/PrivateRoute";
import { Home } from "@/pages/Home";
import Login from "@/pages/Login";
import { Topic } from "@/pages/Topic";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./AuthProvider";

export const Router = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/topics/:id" element={<Topic />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster position="top-right" />
        </AuthProvider>
    )
}

