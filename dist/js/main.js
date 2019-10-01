const foot = document.querySelector("#foot01");
foot.innerHTML =
  "<p style='color:#ACB3CC'>&copy; " +
  new Date().getFullYear() +
  " <a href='' style='text-decoration:none'>Sursa Technology</a>. All right reserved.</p>";
/*Hide navbar on scroll*/
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("#nav-header").style.top = "0";
  } else {
    document.querySelector("#nav-header").style.top = "-15px";
  }
  prevScrollPos = currentScrollPos;
};

//Show mobile menu
function openNav() {
  document.getElementById("myNav").style.visibility = "visible";
}

//close mobile menu
function closeNav() {
  document.getElementById("myNav").style.visibility = "hidden";
}

//Handle click event to submit response
const openChat = $event => {
  $event.preventDefault();
  reply = document.querySelector(".res-in");
  const username = reply.value;
  const userResponse = document.createElement("p");
  const botResponse = document.createElement("p");
  userResponse.textContent = username;
  botResponse.textContent =
    "Welcome, " + username + ". Nice to meet you! Your email please";
  document.querySelector(".history").appendChild(userResponse);
  document.querySelector(".history").appendChild(botResponse);
  userResponse.classList.add("incoming");
  botResponse.classList.add("message-box");
  document.querySelector("#comment-form").reset();
  if (username.indexOf("@") !== -1) {
    botResponse.textContent = "Great! Please enter your GitHub URL?";
  }
};
document.querySelector("#btn").addEventListener("click", openChat);

//Handle click event to submit response
const hireChat = $event => {
  $event.preventDefault();
  reply = document.querySelector(".res-in");
  let username = reply.value;
  const userResponse = document.createElement("p");
  const botResponse = document.createElement("p");
  userResponse.textContent = username;
  botResponse.textContent =
    "Welcome, " + username + ". Nice to meet you! Your email please";
  document.querySelector(".chat-history").appendChild(userResponse);
  document.querySelector(".chat-history").appendChild(botResponse);
  userResponse.classList.add("incoming");
  botResponse.classList.add("message-box");
  document.querySelector("#comment-form").reset();
  if (username.indexOf("@") !== -1) {
    companyName = "Great! What's your company name?";
    botResponse.textContent = companyName;
  }
};
document.querySelector("#btn").addEventListener("click", hireChat);
