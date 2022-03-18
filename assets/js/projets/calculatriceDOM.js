document.getElementById("calculatriceDOM").innerHTML = 
"const buttons = document.querySelectorAll(\".number\");\n"+
"const operators = document.querySelectorAll(\".operator\");\n\n"+
"let result = document.getElementById(\"result\");\n"+
"let calcul = document.getElementById(\"calcul\");\n"+
"let total;\n\n"+
"const clear = () => {\n"+
"  result.value =  \"\";\n"+
"  calcul.value = \"\";\n"+
"  total = null;\n"+
"};\n\n"+
"const operation = () => {\n"+
"  calcul.value = result.value;\n"+
"  result.value = eval(result.value);\n"+
"  total = result.value;\n"+
"};\n\n"+
"buttons.forEach((button) => {\n"+
"  button.addEventListener(\"click\", (e) => {\n"+
"    result.value == undefined\n"+
"      ? (result.value = e.target.id)\n"+
"      : (result.value += e.target.id);\n"+
"    });\n"+
"});\n\n"+
"operators.forEach((operator) => {\n"+
"  operator.addEventListener(\"click\", (e) => {\n"+
"    switch (operator.id) {\n"+
"      case \"clear\":\n"+
"        clear();\n"+
"        break;\n\n"+
"      case \"=\":\n"+
"        operation();\n"+
"        break;\n\n"+
"      default:\n"+
"        result.value += \" \" + e.target.id + \" \";\n"+
"        break;\n"+
"    }\n"+
"  });\n"+
"});";