import { BenefitsContainer, HeroContainer, HeroContent } from "./styles";
import heroCoffeeDelivery from "../../../../assets/heroCoffeeDelivery.png";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
export function Hero() {
  const { colors } = useTheme();
  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors["yellow-dark"]}
              text="Compra simples e segura"
              icon={<ShoppingCart size={18} weight="fill" />}
            />
            <InfoWithIcon
              iconBg={colors["base-text"]}
              text="Embalagem mantém o café intacto"
              icon={<Package size={18} weight="fill" />}
            />
            <InfoWithIcon
              iconBg={colors["yellow"]}
              text="Entrega rápida e rastreada"
              icon={<Timer size={18} weight="fill" />}
            />
            <InfoWithIcon
              iconBg={colors["purple"]}
              text="O café chega fresquinho até você"
              icon={<Coffee size={18} weight="fill" />}
            />
          </BenefitsContainer>
        </div>

      <div className="containerImgHero">
        <img src={heroCoffeeDelivery} />
      </div>
        
      </HeroContent>
    </HeroContainer>
  );
}
