const container = document.querySelector(".container");
const titleColor = document.querySelector(".title");
const colorCode = document.querySelector(".color_code");
const alertDOM = document.querySelector("#alert");

const handleChange = () => {
  let inputColor = document.querySelector("#color").value;
  localStorage.setItem("background", inputColor);

  if (document.querySelector(".container").style) {
    document
      .querySelector(".container")
      .setAttribute("style", "background-image: ");
  }
  document.querySelector(".container").style.backgroundColor =
    localStorage.getItem("background");

  colorCode.innerHTML = localStorage.getItem("background");
};

if (localStorage.getItem("background")) {
  container.style.backgroundColor = localStorage.getItem("background");
} else {
  localStorage.setItem("background", "#b94b4b");
  container.style.backgroundColor = localStorage.getItem("background");
}

document.querySelector("#color").value = localStorage.getItem("background");
colorCode.innerHTML = localStorage.getItem("background");

function copyCode() {
  navigator.clipboard.writeText(colorCode.innerHTML);

  alertDOM.style.visibility = "visible";

  const myTimeout = setTimeout(() => {
    alertDOM.style.visibility = "hidden";
  }, 1000);
}

/************************************* */
let imageInputDOM = document.getElementById("imageInput");
let imageName = document.getElementById("imageName");

imageInputDOM.onchange = () => {
  const file = imageInputDOM.files[0];

  if (container.style.backgroundColor) {
    container.style.backgroundColor = "";
  }

  document
    .querySelector(".container")
    .setAttribute(
      "style",
      "background-image: url(" +
        URL.createObjectURL(file) +
        ");background-repeat: no-repeat;width:100%; height:100vh;background-size:cover;"
    );
};
