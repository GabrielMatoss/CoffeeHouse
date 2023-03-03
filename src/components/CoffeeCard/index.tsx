import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { listCoffee} from "../../utils/CoffeeData";
import { CoffeeCards } from "./styles";

export function CoffeeCard(){
  return(
  <>
    {listCoffee.map((values) => (
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
           <div className="QtdButtons">
             <button /*onClick={}*/>
               <Minus size={16} weight="fill" />
             </button>
             <p>1</p>
             <button /*onClick={}*/>
               <Plus size={20} weight="fill" />
             </button>
           </div>
 
           <div className="cart">
             <ShoppingCart weight="fill" size={20} />
           </div>
         </div>
       </section>
     </CoffeeCards>
    ))}
  </>
  )
}
