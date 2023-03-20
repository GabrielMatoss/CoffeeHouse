import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrder } from "./pages/CompleteOrder";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
      </Route>
    </Routes>
  );
}
