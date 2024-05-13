let plus = document.querySelectorAll(".plus");
let cross = document.querySelectorAll(".cross");
let description = document.querySelectorAll(".description");

let cross1 = document.querySelector("#cross1");
let cross2 = document.querySelector("#cross2");
let cross3 = document.querySelector("#cross3");
let cross4 = document.querySelector("#cross4");
let cross5 = document.querySelector("#cross5");
let cross6 = document.querySelector("#cross6");

let plus1 = document.querySelector("#plus1");
let plus2 = document.querySelector("#plus2");
let plus3 = document.querySelector("#plus3");
let plus4 = document.querySelector("#plus4");
let plus5 = document.querySelector("#plus5");
let plus6 = document.querySelector("#plus6");

let description1 = document.querySelector("#description1");
let description2 = document.querySelector("#description2");
let description3 = document.querySelector("#description3");
let description4 = document.querySelector("#description4");
let description5 = document.querySelector("#description5");
let description6 = document.querySelector("#description6");

plus.forEach(function (plus) {
  plus.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target.id);
    if (e.target.id === "plus1") {
      plus1.style.display = "none";
      cross1.style.display = "block";
      description1.style.display = "block";
    }

    if (e.target.id === "plus2") {
      plus2.style.display = "none";
      cross2.style.display = "block";
      description2.style.display = "block";
    }

    if (e.target.id === "plus3") {
      plus3.style.display = "none";
      cross3.style.display = "block";
      description3.style.display = "block";
    }

    if (e.target.id === "plus4") {
      plus4.style.display = "none";
      cross4.style.display = "block";
      description4.style.display = "block";
    }

    if (e.target.id === "plus5") {
      plus5.style.display = "none";
      cross5.style.display = "block";
      description5.style.display = "block";
    }

    if (e.target.id === "plus6") {
      plus6.style.display = "none";
      cross6.style.display = "block";
      description6.style.display = "block";
    }
  });
});

cross.forEach(function (cross) {
  cross.addEventListener("click", function (e) {
    if (e.target.id === "cross1") {
      plus1.style.display = "block";
      cross1.style.display = "none";
      description1.style.display = "none";
    }

    if (e.target.id === "cross2") {
      plus2.style.display = "block";
      cross2.style.display = "none";
      description2.style.display = "none";
    }

    if (e.target.id === "cross3") {
      plus3.style.display = "block";
      cross3.style.display = "none";
      description3.style.display = "none";
    }

    if (e.target.id === "cross4") {
      plus4.style.display = "block";
      cross4.style.display = "none";
      description4.style.display = "none";
    }

    if (e.target.id === "cross5") {
      plus5.style.display = "block";
      cross5.style.display = "none";
      description5.style.display = "none";
    }

    if (e.target.id === "cross6") {
      plus6.style.display = "block";
      cross6.style.display = "none";
      description6.style.display = "none";
    }
  });
});
