import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { listCoffee, listCoffeeProps} from "../../utils/CoffeeData";
import { CoffeeCards } from "./styles";


export function CoffeeCard(){
  const [state, setState] = useState<listCoffeeProps[]>(listCoffee);
  function handleDecrease(){
    console.log("subtration")
  }
  
  return(
  <>
    {state.map((values) => (
       <CoffeeCards key={values.id}>
       <img src={values.src} alt="" />
       <div className="SectionCoffeeTag">
         {values.tags.map((tag, index) => {
           return (<span key={index}>{tag}</span>);
         })}
       </div>
 
       <section className="SectionDescrition">
         <h3>{values.name}</h3>
         <p>{values.description}</p>
       </section>
 
       <section className="SectionPrice">
         <p>{values.value}</p>
         <div className="ContainerButtons">
          {/* Podemos criar um componente de buttons */}
           <div className="QtdButtons">
             <button onClick={handleDecrease}>
               <Minus size={16} weight="fill" />
             </button>
             <p>{values.stock}</p>
             <button /*onClick={}*/>
               <Plus size={20} weight="fill" />
             </button>
           </div>
 
           <NavLink to={"/cart"} title="Histórico do carrinho de compras" >
            <div className="cart">
            <ShoppingCart weight="fill" size={20} />
            </div>
           </NavLink>
         </div>
       </section>
     </CoffeeCards>
    ))}
  </>
  )
}
