/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excusa").innerHTML = GenerateExcuse();
  console.log("Hello Rigo from the console!");
};
let GenerateExcuse = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoN = Math.floor(Math.random() * who.length);
  let actionN = Math.floor(Math.random() * action.length);
  let whatN = Math.floor(Math.random() * what.length);
  let whenN = Math.floor(Math.random() * when.length);

  return who[whoN] + " " + action[actionN] + what[whatN] + when[whenN];
};
