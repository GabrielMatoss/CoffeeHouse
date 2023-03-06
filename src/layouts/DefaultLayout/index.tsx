import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { ContentDefaultLayout } from "./styles";

export function DefaultLayout() {
    return(
        <ContentDefaultLayout>
        <Header />
        <Outlet />
        </ContentDefaultLayout>
    )
}