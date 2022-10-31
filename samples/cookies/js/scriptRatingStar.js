
console.log("ya ha cargado")
function activeStarRating(e, form, addressContainer, loaderContainer, urlText) {
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  setCookie("urlWeb", urlText, 1);
 
  document.getElementById("date1").innerHTML = date2;
  document.getElementById("urlWeb1").innerHTML = urlWeb;
  addressContainer.style.display = "none";
  loaderId.style.display = "flex";
  console.log("work it");
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message))
    .then((html) => {
      //
      loaderContainer.setAttribute("class", "rating message");
      loaderContainer.innerHTML = congrat;
      loaderId.style.display = "none";
    });
   


}