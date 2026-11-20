const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const signinForm = document.querySelector("#signin-form");

if (signinForm) {
  signinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#form-message").textContent =
      "This is a preview — sign-in is not connected, and no details were sent.";
  });
}