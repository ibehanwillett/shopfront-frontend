import React from 'react'

const ShopFront = () => {

  class Item {
    constructor(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image
    }
  }
  
//   const shirt = {
//     name: "Fun shirt",
//     price: 28,
//     description: "Sure is a fun shirt",
//     image: 
//     "https://placekitten.com/200/200" 
// }

const things = [new Item("cool shirt", 28, "a real cool shirt", "https://placekitten.com/200/200"), new Item("weird shoes", 30, "very weird shoes", "https://placekitten.com/200/200")]
console.log(things[`{index}`])
  return (
    <>
    <h3>ITEMS</h3>
    <div>
      {
      things.map((index) => {
        <>
        
      <h4>`{things[{index}].name}</h4>
      <h5>$`{things[{index}].price}</h5>
      <h6>`{things[{index}].description}</h6>
      <img src={things[{index}].image}/>
        </> 
        })
      }
    </div>
    </>
  )
}

export default ShopFront