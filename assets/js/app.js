
const switcher = document.querySelector("#switcher");

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.className = currentTheme;

  if (currentTheme === "dark") {
    switcher.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.className = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.className = "light";
    localStorage.setItem("theme", "light");
  }
}

switcher.addEventListener("change", switchTheme, false);