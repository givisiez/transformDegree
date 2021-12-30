function transformDegree(degree) { 
  const patternText = /[C,F]/g;
  const patternNumber = /\d+/g;
  const degreeExists = degree.toUpperCase().match(patternText);

  if(!degreeExists) {
    throw new Error('Grau ºC ou ºF nao identificado');
  }

  // F -> C || C -> F
  let updatedDegree = Number(degree.match(patternNumber));
  if(degreeExists[0] === "F") {
    var formula = fahrenheit => (fahrenheit - 32) * 5/9;
    var degreeSign = 'C';
  } else if(degreeExists[0] === "C") {   
    var formula = celcius => celcius * 9/5 + 32;
    var degreeSign = 'F';
  }  

  return formula(updatedDegree) + degreeSign;
}

// RESULT
try{
  console.log(transformDegree('10c')); // C -> F
  console.log(transformDegree('50f')); // F -> C
} catch(e) {
  console.log(e.message);
}
