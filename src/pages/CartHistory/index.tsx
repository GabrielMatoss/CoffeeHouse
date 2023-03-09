import { MapPinLine } from "phosphor-react";
import { ContainerCartHistory } from "./styles";

export function CartHistory () {
    return(
    <ContainerCartHistory>
        <div className="contentInfos">
            <h3>Complete seu pedido</h3>
            <form action="">
                <div className="headerForm">
                <MapPinLine size={24}/>
                <div>
                    <p>Endereço de entrega</p>
                    <p>Informe onde deseja receber seu pedido</p>
                </div>
                </div>

                <input type="text" name="" id="" />
                <input type="text" name="" id="" />

                <div>
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                </div>

                <div>
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                </div>
            </form>

            <div className="methodPayment">
            <p>Metodos de pagamento</p>
            </div>
        </div>

        <div className="contentValues">
            <h3>Cafés relacionados</h3>
            <div className="valuesTotal">
                <p>é um teste</p>
            </div>
        </div>
    </ContainerCartHistory>
    )
}