import { MapPinLine } from "phosphor-react";
import { ContainerHistory } from "./styles";

export function CartHistory () {
    return(
        <ContainerHistory>
            <section>
                <h3>Complete seu pedido</h3>
                <div className="containerInput">
                    <div>
                        <MapPinLine />
                        <p>Endereço de Entrega</p>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                    <form action="">
                        <input type="text" name="cep" id="cep" placeholder="CEP"/>
                        <input type="text" name="rua" id="rua" placeholder="Rua"/>
                        <div className="numeroComplemento">
                            <input type="text" name="num" id="num" placeholder="Número"/>
                            <input type="text" name="complemento" id="comp" placeholder="Complemento"/>
                        </div>

                        <div className="bairroCidadeUf">
                            <input type="text" name="bairro" id="bairro" placeholder="Bairro"/>
                            <input type="text" name="cidade" id="cidade" placeholder="Cidade"/>
                            <input type="text" name="uf" id="uf" placeholder="UF"/>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <h3>Cafés relacionados</h3>
                <div>
                    <p>Teste</p>

                    <div className="numeroComplemento">
                            <input type="text" name="num" id="num" placeholder="Número"/>
                            <input type="text" name="complemento" id="comp" placeholder="Complemento"/>
                    </div>
                </div>
            </section>
        </ContainerHistory>
    )
}