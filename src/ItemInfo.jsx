import { useContext } from 'react';
import ItemContext from './app-context/ItemContext';

export function ItemInfo(){
    
    let item = useContext(ItemContext)
    return (
        <div>
        <h4>{item.name}</h4>
        <h5>${item.price}</h5>
        <h6>{item.description}</h6>
        <img src={item.image}/>
        </div>
    )
}

{/* // const items = [
//     new Item("cool shirt", 28.00, "a real cool shirt", "https://placekitten.com/200/200"),
//     new Item("weird shoes", 30.00, "very weird shoes", "https://placekitten.com/200/200"), 
//     new Item("ugly earrings", 2.00, "terribly ugly earrings", "https://placekitten.com/200/200")]
 */}
