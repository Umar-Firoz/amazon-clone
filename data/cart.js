export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function addTocart(productId) {
  let matchingItem;
  cart.forEach((cartitem) => {
    if (productId === cartitem.productId)
      matchingItem = cartitem;
  })
  if (matchingItem) {
    matchingItem.quantity += 1;
  }
  else {
    cart.push({
      productId: productId,
      quantity: 1
    })
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}
 
if(cart==[]){
  document.querySelector('.order-summary').innerHTML='<h1>Your Cart is Empty<h1>'
}
export function removecart(productId){
  const newcart = [];
  cart.forEach((cartitem) => {
    if (cartitem.productId !== productId) {
      newcart.push(cartitem);
    }
  });
  cart = newcart;
}




