const cart = () => {
   const cartBtn = document.getElementById('cart');
   const cart = document.querySelector('.cart');
   const closeBtn = cart.querySelector('.cart-close');

   const openPopup = () => {
      cart.style.display = "flex";
   };

   const closePopup = () => {
      cart.style.display = "";
   };

   cartBtn.addEventListener('click', openPopup);
   closeBtn.addEventListener('click', closePopup);
};

export default cart;