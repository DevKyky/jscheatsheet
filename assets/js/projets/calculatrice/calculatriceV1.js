let total = 0;

const addition = (a, b) => {
  total === 0 ? (total = a + b) : (total += a);
  return total;
};

const efface = () => (total = 0);

for (let i = 1; i < 9; i++) {
  if (total >= 6) {
    console.log("RESET total = " + efface());
  } else {
    total <= 1
      ? console.log(`ADDITION ${i} + ${i} = ` + addition(i, i))
      : console.log(`ADDITION ${total} + ${i} = ` + addition(i, i));
  }
}

document.getElementById("calculatriceV1").innerHTML =
  "let total = 0;\n\nconst addition = (a, b) => {\n  total === 0 ? (total = a + b) : (total += a);\n  return total;\n}\n\nconst efface = () => (total = 0);\n\nfor (let i = 1; i < 9; i++) {\n  if (total >= 6) {\n    console.log(\"RESET total = \" + efface());  \n  }";

