const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const toyName = btn.parentElement.querySelector("h3").textContent;
    alert(`${toyName} cart mein add ho gaya!`);
  });
});