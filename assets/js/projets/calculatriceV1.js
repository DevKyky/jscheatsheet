document.getElementById("calculatriceV1").innerHTML =
  "let total = 0;\n\nconst addition = (a, b) => {\n  total === 0 ? (total = a + b) : (total += a);\n  return total;\n}\n\n" +
  'const efface = () => (total = 0);\n\nfor (let i = 1; i < 9; i++) {\n  if (total >= 6) {\n    console.log("RESET total = " + efface());  \n  }' +
  " else {\n    total <= 1\n    ?console.log(`ADDITION ${i} + ${i} = ` + addition(i, i))\n    : console.log(`ADDITION ${total} + ${i} = ` + addition(i, i));\n  }\n}";
