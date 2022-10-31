
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxj-zGBligkehc9Srm-LcZovBDiUpVZ17LxK8ZMnal5YPewnczKC3ipDVihRPyusDwljg/exec";

const congrat = "<h3>¡Gracias por darnos tu opinión!</h3>" + "<p><a href='https://www.lg.com/es/support/web-survey-questionnaire' target='_self'>Puedes darnos más detalles haciendo click aquí</a></p>"
const URL_API = "https://api.ipify.org/?format=json";

let destiny = window.location.href;

const url = destiny.indexOf("https://");
const urlText = destiny.substring(url, destiny.length);
//const replace=text.replace('-',' ')
console.log(urlText)//const congrat = "<h3>¡Gracias por darnos tu opinión!</h3>";
let date = new Date();

const formatDate = (date) => {
  let formatted_date =
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  return formatted_date;
};

const date2 =
  '<input type="text" name="date" value="' + formatDate(date) + '">';
const urlWeb = '<input type="url" name="url" value="' + urlText + '">';







////llamar cookies//////
getCookie();



//////almacenamiento cookie usuario///////////


function getCookie() {
  let cookieWeb = document.cookie
  console.log(cookieWeb);
  const indexWeb = cookieWeb.indexOf('urlWeb');
  console.log(indexWeb);

  for (let i = 0; i < cookieWeb.length; i++) {
    if (indexWeb == -1) {
      console.log(cookieWeb.indexOf('urlWeb'));
      starRating();
    } else if (indexWeb !== -1) {
      console.log(indexWeb);
      nonRevote();
      return cookieWeb[i];

    }

  }
  if (typeof input === 'undefined') {
    starRating();
  } else {
    console.log(result);
    console.log("step1")

  }
}



/////////////////////////////////
function starRating() {

  fetch(URL_API)
    .then(respuestaRaw => respuestaRaw.json())
    .then(respuesta => {
      const ip = respuesta.ip;
      //console.log(ip);
      const ipWeb = '<input type="ip" name="ip" value="' + ip + '">';
      document.getElementById("ip1").innerHTML = ipWeb;
      return ip;
    });
  ///////////////////fin variables/////////////////////////

  const formRating = document.createElement("form");
  formRating.setAttribute("name", "submit-form");
  formRating.setAttribute("id", "sheetdb-form");

  let ratingContent = document.getElementById("rating");
  ratingContent.insertAdjacentElement("afterbegin", formRating);

  const form = document.forms["submit-form"];

  for (let z = 1; z < 6; z++) {
    const x = document.createElement("label");
    x.setAttribute("for", z);
    x.setAttribute("class", "form-label");
    x.setAttribute("id", "labelform");
    const y = document.createElement("b");
    const contentLabel = document.createTextNode("☆");
    x.appendChild(y);
    y.appendChild(contentLabel);

    const i = document.createElement("input");
    i.setAttribute("type", "radio");
    i.setAttribute("name", "rating");
    i.setAttribute("value", z);
    i.setAttribute("class", "form-label");
    let addressContainer = document.getElementById("sheetdb-form");
    addressContainer.insertAdjacentElement("afterbegin", i);
    addressContainer.insertAdjacentElement("afterbegin", x);
  }
  const arrayA = ["urlWeb1", "date1", "ip1"];
  const arrayLength = arrayA.length;
  for (let b = 0; b < arrayLength; b++) {
    const a = document.createElement("div");
    a.setAttribute("style", "display:none;");
    a.setAttribute("id", arrayA[b]);
    let addressContainer1 = document.getElementById("sheetdb-form");
    addressContainer1.insertAdjacentElement("beforeend", a);
  }

  const loader = document.createElement("div");
  loader.setAttribute("class", "loader");
  loader.setAttribute("id", "loaderId");
  loader.setAttribute("style", "display: none;");
  let loaderContainer = document.getElementById("rating");
  loaderContainer.insertAdjacentElement("beforebegin", loader);
  for (let j = 0; j < 3; j++) {
    const loaderBall = document.createElement("span");
    loaderBall.setAttribute("class", "loader__element");
    let balls = document.getElementById("loaderId");
    balls.insertAdjacentElement("afterbegin", loaderBall);
  }



  if (document.querySelector('input[name="rating"]')) {
    document.querySelectorAll('input[name="rating"]').forEach((elem) => {
      elem.addEventListener("change", (e) => {
        let addressContainer = document.getElementById("sheetdb-form");
        let loaderContainer = document.getElementById("rating");
        activeStarRating(e, form, addressContainer, loaderContainer, urlText);
      });
    });
  }




}
function nonRevote() {
  let loaderContainer = document.getElementById("rating");
  loaderContainer.setAttribute("class", "rating message");
  loaderContainer.innerHTML = congrat;
}




