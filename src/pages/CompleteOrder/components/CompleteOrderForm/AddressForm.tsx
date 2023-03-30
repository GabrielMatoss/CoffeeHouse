import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm(){
    return(
        <AddressFormContainer>
           <Input placeholder="CEP" className="cep" type="number"/>
           <Input placeholder="Rua" className="rua" />
           <Input placeholder="Número" type="number" />
           <Input placeholder="Completemento" className="complemento" />
           <Input placeholder="Bairro" />
           <Input placeholder="Cidade" />
           <Input placeholder="UF" />
        </AddressFormContainer>
    );
}