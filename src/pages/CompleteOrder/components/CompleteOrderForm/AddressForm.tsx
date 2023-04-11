import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        className="cep"
        type="number"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input placeholder="Rua" className="rua" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Completemento" className="complemento" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddressFormContainer>
  );
}
