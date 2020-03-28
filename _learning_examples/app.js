function randomRange(myMin, myMax) {
  let num = Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  return num;
}

console.log(randomRange(3, 12));

const div1 = document.querySelector("#div1");
let elcontainer = document.createElement("div");
let elheader = document.createElement("h1");
elcontainer.appendChild(elheader);

elheader.innerText = randomRange(3, 12);
elheader.classList.add("purple");
elcontainer.classList.add("container");

document.body.insertBefore(elcontainer, div1);

// --------------------
let animateDiv = document.createElement("div");
let animateBox = document.createElement("div");
animateDiv.appendChild(animateBox);

animateBox.classList.add("animate-box");
animateBox.style.cssText = "position: absolute;";
animateDiv.classList.add("container");
animateDiv.style.cssText =
  "position: relative; height: 200px; background-color: red";

let aBox = document.createElement("div");
animateDiv.appendChild(aBox);
aBox.classList.add("animate-box");
aBox.style.cssText = "position: absolute; top: 100px; background-color: pink";
document.body.insertBefore(animateDiv, elcontainer);

// utilize setAttribute method
aBox.setAttribute("onclick", "animation(this)");
function animation(obj) {
  // use animate method
  obj.animate(
    {
      opacity: [0.8, 1],
      transform: ["scale(0.1)", "scale(1)"]
    },
    {
      direction: "alternate",
      duration: 500,
      iterations: 5
    }
  );
}

// an old way of doing this, more resource consuming than `Ele.animate()`
animateBox.addEventListener("click", moveAcross);

function moveAcross() {
  let pos = 0;
  let id = setInterval(frame, 1);
  function frame() {
    if (pos > 500) {
      clearInterval(id);
    } else {
      pos++;
      animateBox.style.top = pos + "px";
      animateBox.style.left = pos + "px";
    }
  }
}

// --------------------
const pMonitor = document.createElement("h2");
pMonitor.style.cssText = "text-align: center";
document.body.insertBefore(pMonitor, animateDiv);

window.addEventListener("resize", updateSizeText);
updateSizeText();

function updateSizeText() {
  pMonitor.textContent =
    "window's Height: " +
    window.innerHeight +
    ";\n window's Width: " +
    window.innerWidth;
}

// --------------------
const openVABtn = document.querySelector("#openVABtn");
openVABtn.addEventListener("click", openVA);
let newWindowObj;
function openVA() {
  newWindowObj = window.open(
    "https://va-boutique.com",
    "newWindow",
    "menubar=false,location=true,resizable=true,scrollbars=true,width=800,height=500,top=-1000,left=00"
  );
}
// "newWindow" is referred to the window itself, used for link target, for example
const linkD = document.createElement("a");
linkD.setAttribute("target", "newWindow");
linkD.setAttribute("href", "https://DonLee.online");
linkD.textContent = "Visit Don Lee";
linkD.classList.add("center-40");
document.body.insertBefore(linkD, openVABtn);

const brTag = document.createElement("br");
document.body.insertBefore(brTag, openVABtn);

const closeVABtn = document.querySelector("#closeVABtn");
closeVABtn.onclick = closeWindow;
function closeWindow() {
  newWindowObj.close();
}

// --------------------
const headerBuilder = () => {
  h2 = document.createElement("h2");
  elcontainer.appendChild(h2);
  return h2;
};

let header2_1 = headerBuilder();
let header2_2 = headerBuilder();
let header2_3 = headerBuilder();
header2_1.innerText = "something";
header2_2.innerText = parseInt("1111", 10);

const arr1 = [1, 2];
const arr2 = [3, 4];
arr1.concat(arr2);

header2_3.innerText = arr1;

// --------------------
const person = {
  name: "D L",
  age: 22
};
const string = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(string); /* "Hello, my name is D L!
I am 22 years old." */

const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson("DL", 22, "male"));

// --------------------
const bike = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bike.setGear(3);
console.log(bike.gear);

// --------------------
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    // getter
    get temperature() {
      return this._temp;
    }
    // setter
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
// use getter to get the temperature
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 30;
temp = thermos.temperature;
console.log(temp); // 30

// --------------------
function changeColor(obj) {
  obj.style.background = "Peru";
}

// --------------------
function changeBodyColorToPeru() {
  let body = document.querySelector("body");
  if (body.style.background === "peru") {
    body.style.background = "MediumOrchid";
  } else {
    body.style.background = "Peru";
  }
}
document.getElementById("myBtn").onclick = changeBodyColorToPeru;

// --------------------
function mOver(obj) {
  obj.innerHTML = "GET OFF ME!";
}

function mOut(obj) {
  obj.innerHTML = "Thank You! 😺";
}

var some = 1;
function abc() {
  var some = 3;
  return some;
}
console.log(some); //1
console.log(abc()); //3
console.log(some); //1
