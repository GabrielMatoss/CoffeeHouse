import { CoffeeSlogan } from "./CoffeeSlogan";
import { ContentHome } from "./ContentStyles";
import { Header } from "./Header";

export function Content(){
    return (
        <ContentHome>
        <Header />
        <CoffeeSlogan />
        </ContentHome>
    )
}