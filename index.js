import { default as chu } from "./pokemon/index.js";

//importでdefaultを識別氏で使えない
//予約語(if,class..などの役割が決められている物)は識別氏では使えない
document.body.textContent = chu;
