let cardNumb = "4000001234561245";
let newstr = cardNumb.replace(/\d(?=\d{4})/g, "*");
console.log(newstr);
