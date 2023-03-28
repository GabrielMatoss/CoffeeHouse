import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder(){
    return(
       <CompleteOrderContainer className="container">
            <CompleteOrderForm />
       </CompleteOrderContainer>
    )
}