console.log("hello")
const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");
const quantity = document.querySelectorAll(".quantity-value");
const price = document.querySelectorAll(".price");
const totalPrice = document.querySelectorAll(".total-price");


// INCREASE
increase.forEach((button, index) => {
  button.addEventListener("click", () => {
    let number = Number(quantity[index].innerText);

    number++;

    quantity[index].innerText = number;

    let productPrice = Number(
      price[index].innerText.replace("$", "").replace(",", "")
    );

    let total = productPrice * number;

    totalPrice[index].innerText = "$" + total.toFixed(2);

    calculateTotal();
  });
});


// DECREASE
decrease.forEach((button, index) => {
  button.addEventListener("click", () => {
    let number = Number(quantity[index].innerText);

    if (number > 1) {
      number--;

      quantity[index].innerText = number;

      let productPrice = Number(
        price[index].innerText.replace("$", "").replace(",", "")
      );

      let total = productPrice * number;

      totalPrice[index].innerText = "$" + total.toFixed(2);

      calculateTotal();
    }
  });
});


// ORDER SUMMARY
function calculateTotal() {
  let subtotal = 0;

  totalPrice.forEach((item) => {
    let amount = Number(
      item.innerText.replace("$", "").replace(",", "")
    );

    subtotal = subtotal + amount;
  });

  let shipping = 50;

  let tax = subtotal * 0.05;

  let finalTotal = subtotal + shipping + tax;

  document.querySelectorAll(".summary-item")[0].children[1].innerText =
    "$" + subtotal.toFixed(2);

  document.querySelectorAll(".summary-item")[1].children[1].innerText =
    "$" + shipping.toFixed(2);

  document.querySelectorAll(".summary-item")[2].children[1].innerText =
    "$" + tax.toFixed(2);

  document.querySelectorAll(".summary-item")[3].children[1].innerText =
    "$" + finalTotal.toFixed(2);
}