import { Hero } from "./components/Hero";
import { HomePageContainer } from "./styles";

export function Home(){
    return(
       <HomePageContainer>
        <Hero />
       </HomePageContainer>
    );
}