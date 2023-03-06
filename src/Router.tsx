import { Routes, Route } from "react-router";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CartHistory } from "./pages/CartHistory";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<CartHistory />}/>
            </Route>
        </Routes>
    )
}