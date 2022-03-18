let total = 0;

const efface = () => (total = 0);

const addition = (a, b) => {
  total === 0 ? (total = a + b) : (total += a);
  return total;
};

const soustraction = (a, b) => {
  total === 0 ? (total = a - b) : (total -= a);
  return total;
};

const multiplication = (a, b) => {
  total === 0 ? (total = a * b) : (total *= a);
  return total;
};

const division = (a, b) => {
  if (a === 0 || b === 0) {
    console.log("Division par zéro");
  } else {
    total === 0 ? (total = a / b) : (total /= a);
  }
  return total;
};

document.getElementById("calculatriceV2").innerHTML =
  "let total = 0;\n\nconst efface = () => (total = 0);\n\nconst addition = (a, b) => {\n  total === 0 ? (total = a + b) : (total += a);\n  return total;\n};\n\n" +
  "const soustraction = (a, b) => {\n  total === 0 ? (total = a - b) : (total -= a);\n  return total;\n};\n\n" +
  "const multiplication = (a, b) => {\n  total === 0 ? (total = a * b) : (total *= a);\n  return total;\n}\n\n" +
  'const division = (a, b) => {\n  if (a === 0 || b === 0) {\n    console.log("Division par zéro");\n  } else {\n    total === 0 ? (total = a / b) : (total /= a);\n  }\n  return total;\n}\n\n' +
  'console.log("ADDITION: 10 + 5 = " + addition(10, 5));\n' +
  'console.log("MULTIPLICATION: total * 4 = " + multiplication(4, 2));\n' +
  'console.log("RESET total = " + efface());\n' +
  'console.log("SOUSTRACTION: 6 - 6 = " + soustraction(6, 6));\n' +
  'console.log("DIVISION: 5 / 0 = " + division(5, 0));';
