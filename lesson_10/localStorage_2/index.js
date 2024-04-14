function init() {
  loadUserFromLS();
  const setUserNameButton = document.getElementById("setUserNameButton");
  setUserNameButton.addEventListener("click", () => {
    const inputUserName = document.getElementById("userName").value;
    if (inputUserName) {
      localStorage.setItem("currentUserName", inputUserName);
      draw(inputUserName);
    }
  });
}
function loadUserFromLS() {
  const currentUserName = localStorage.getItem("currentUserName");
  if (currentUserName) {
    draw(currentUserName);
  }
}

function draw(userName) {
  const helloUserHeader = document.getElementById("hiUserNameHeader");
  helloUserHeader.innerText = `Hello ${userName}`;
}
init();
