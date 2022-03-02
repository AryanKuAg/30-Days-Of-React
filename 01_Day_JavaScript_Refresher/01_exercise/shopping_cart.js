const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.shift("Meat");
shoppingCart.push("Sugar");
const removeDataIndex = shoppingCart.indexOf("Honey");
shoppingCart.splice(removeDataIndex, 1);
const teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";
console.log(shoppingCart);
