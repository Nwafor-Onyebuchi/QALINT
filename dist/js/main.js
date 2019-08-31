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

function openNav() {
  document.getElementById("myNav").style.visibility = "visible";
}

function closeNav() {
  document.getElementById("myNav").style.visibility = "hidden";
}

