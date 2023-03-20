import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { CompleteOrder } from "./pages/CompleteOrder";
import { Home } from "./pages/Home";

export function Router(){
return(
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/completeOrder" element={<CompleteOrder />} />
   </Routes>
)
}