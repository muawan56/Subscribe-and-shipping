function subscribe() {
  const subscribeButton = document.querySelector(".js-subscribe-functionality");
  console.log(subscribeButton.innerText);
  if (subscribeButton.innerText === "Subscribe") {
    subscribeButton.innerText = "Subscribed";
    subscribeButton.classList.add("is-subscribed");
  } else {
    subscribeButton.innerText = "Subscribe";
    subscribeButton.classList.remove("is-subscribed");
  }
}

function calTotal() {
  const shippingCal = document.querySelector(".js-shipping-calculator").value;
  let shippingValue = Number(shippingCal);
  if (shippingValue < 40) {
    shippingValue += 10;
    console.log(shippingValue);
  }
  document.querySelector(".js-display-total").innerText = `$${shippingValue}`;
  document.querySelector(".js-shipping-calculator").value = "";
}

function handleCostByKeydown(event) {
  if (event.key === "Enter") calTotal();
}
