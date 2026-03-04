// FUNKSIYA

// Function declaration
// function kvadrat(son) {
//     return son * son;
// }
// console.log(kvadrat(10));

// Function expression
// let kvadrat = function(son) {
//     return son * son;
// }
// console.log(kvadrat(7)); // 49


// Arrow function
// let hello = () => {
//     console.log("Hello");
// }
// hello();


// let ism = prompt("Ismingizni kiriting: ");
// let salom = (name) => {
//     alert(`Salom ${name}`);
// }
// salom(ism);

// let yigindi = (a, b) => {
//     console.log(a + b);
// }
// yigindi(7, 3);

// let sum = (a, b) => {
//     return a + b
// }
// console.log(sum(3, 7));

// let calc = (a, b) => a + b;
// console.log(calc(7, 7));


// STRING METHODLAR

// length
// let userName = "Asqarovich";
// console.log(userName.length);

// let mevalar = ["Olma", "Banan", "Nok", "Mandarin"];
// console.log(mevalar.length);

// let mevalar = ["Banan", "Olma", "Anor", "Nok"];

// for(let i = 1; i <= mevalar.length; i++) {
//     console.log(`${i} ${mevalar[i - 1]}`);
// }

// let user = prompt("Biror so'z kiriting: ");
// alert(`${user} matnning uzunligi: ${user.length}`);


// Foydalanuvchidan 2 ta suz kiritishini surab qaysi biri uzunligini aytish
// let user = prompt("Birinchi so'zni kiriting: ");
// let user2 = prompt("Ikkinchi so'zni kiriting: ");

// if(user.length > user2.length) {
//     alert(`${user} so'zi ikkinchi so'zdan uzunroq`)
// } else if(user.length < user2.length) {
//     alert(`${user2} so'zi birinchi so'zdan uzunroq`)
// } else {
//     alert("Har ikkisi bir xil uzunlikda.")
// }


// toUpperCase()
// let userName = "Asqarovich";
// console.log(userName.toLowerCase());


// CharAt()
// let userName = "Asqarovich";
// console.log(userName.charAt(7));


// let ism = "Shokhjahon"
// let teskari = ""

// for (let i = ism.length; i >= 0; i--) {
//   teskari += ism.charAt(i)
// }
// console.log(teskari);


// slice()
// let userName = "Asqarovich";
// console.log(userName.slice(5, 10));

// let text = "JavaScript";
// console.log(text.slice(4));

// let ism = prompt("Ismingizni kiriting: ");

// if (ism.length > 4) {
//   alert(ism.slice(0, 4) + "...");
// } else {
//   alert(ism)
// }


// let soz = prompt("Ixtiyoriy so'z kiriting: ");
// let natija = 
//   soz.charAt(0).toUpperCase() + 
//   soz.slice(1).toLowerCase();
// alert(natija)   

// let soz = prompt("So'z kiriting:");
// let son = +prompt("Nechanchi harfni katta qilamiz? (index)");

// let natija =
//   soz.slice(0, son).toLowerCase() +
//   soz.charAt(son).toUpperCase() +
//   soz.slice(son + 1).toLowerCase();

// alert(natija);


// trim()
// let userName = " Asqarovich ";
// console.log(userName.trim().length);

// let user = prompt("Ixtiyoriy so'z kiriting: ");
// alert(user.trim());


// indexOf
// let userName = "Asqarovich";
// console.log(userName.indexOf("v"));