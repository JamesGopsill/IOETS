function generateEquation(input, output) {
  document.getElementById(output).innerHTML = 'Preview: $'+document.getElementById(input).value+'$';
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,output]);
}

function betweenValues(status, equation, div, greaterThan, lessThan) {
  if (equation >= greaterThan && equation <= lessThan) {
    document.getElementById(div).className = 'solution';
    return 'true';
  } else {
    if (status == 'true') {
      return 'true';
    } else {
      return 'false';
    }
  }
}

function isInSolution(trigger, id) {
  if (trigger == 'true') {
    document.getElementById(id).className = 'text-success';
    document.getElementById(id).innerHTML = 'In Solution';
  } else {
    document.getElementById(id).className = 'text-muted';
    document.getElementById(id).innerHTML = 'Not in Solution';
  }
}

function isInSolution2(trigger, id) {
  if (trigger == 'true') {
    document.getElementById(id).className = 'label label-success';
    document.getElementById(id).innerHTML = 'In Solution';
  } else {
    document.getElementById(id).className = 'label label-warning';
    document.getElementById(id).innerHTML = 'Not in Solution';
  }
}

function checkAgainstOne(status, equation, div, optionOne) {
  if (equation.indexOf(optionOne) >= 0) {
    document.getElementById(div).className = 'solution';
    return 'true';
  } else {
    if (status == 'true') {
      return 'true';
    } else {
      return 'false';
    }
  }
}

function checkAgainstTwo(status, equation, div, optionOne, optionTwo) {
  if (equation.indexOf(optionOne) >= 0 && equation.indexOf(optionTwo) >= 0 ) {
    document.getElementById(div).className = 'solution';
    return 'true';
  } else {
    if (status == 'true') {
      return 'true';
    } else {
      return 'false';
    }
  }
}

function checkAgainstThree(status, equation, div, optionOne, optionTwo, optionThree) {
  if (equation.indexOf(optionOne) >= 0 && equation.indexOf(optionTwo) >= 0 && equation.indexOf(optionThree) >= 0 ) {
    document.getElementById(div).className = 'solution';
    return 'true';
  } else {
    if (status == 'true') {
      return 'true';
    } else {
      return 'false';
    }
  }
}

function checkAgainstFour(status, equation, div, optionOne, optionTwo, optionThree, optionFour) {
  if (equation.indexOf(optionOne) >= 0 && equation.indexOf(optionTwo) >= 0 && equation.indexOf(optionThree) >= 0 && equation.indexOf(optionFour) >= 0) {
    document.getElementById(div).className = 'solution';
    return 'true';
  } else {
    if (status == 'true') {
      return 'true';
    } else {
      return 'false';
    }
  }
}

function checkAgainstFive(status, equation, div, optionOne, optionTwo, optionThree, optionFour, optionFive) {
  if (equation.indexOf(optionOne) >= 0 && equation.indexOf(optionTwo) >= 0 && equation.indexOf(optionThree) >= 0 && equation.indexOf(optionFour) >= 0 && equation.indexOf(optionFive) >= 0) {
    document.getElementById(div).className = 'solution';
    return 'true';
  } else {
    if (status == 'true') {
      return 'true';
    } else {
      return 'false';
    }
  }
}

function checkAgainstSix(status, equation, div, optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix) {
  if (equation.indexOf(optionOne) >= 0 && equation.indexOf(optionTwo) >= 0 && equation.indexOf(optionThree) >= 0 && equation.indexOf(optionFour) >= 0 && equation.indexOf(optionFive) >= 0 && equation.indexOf(optionSix) >= 0) {
    document.getElementById(div).className = 'solution';
    return 'true';
  } else {
    if (status == 'true') {
      return 'true';
    } else {
      return 'false';
    }
  }
}

function checkAgainstSeven(status, equation, div, optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix, optionSeven) {
  if (equation.indexOf(optionOne) >= 0 && equation.indexOf(optionTwo) >= 0 && equation.indexOf(optionThree) >= 0 && equation.indexOf(optionFour) >= 0 && equation.indexOf(optionFive) >= 0 && equation.indexOf(optionSix) >= 0 && equation.indexOf(optionSeven) >= 0) {
    document.getElementById(div).className = 'solution';
    return 'true';
  } else {
    if (status == 'true') {
      return 'true';
    } else {
      return 'false';
    }
  }
}

function checkAgainstEight(status, equation, div, optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix, optionSeven, optionEight) {
  if (equation.indexOf(optionOne) >= 0 && equation.indexOf(optionTwo) >= 0 && equation.indexOf(optionThree) >= 0 && equation.indexOf(optionFour) >= 0 && equation.indexOf(optionFive) >= 0 && equation.indexOf(optionSix) >= 0 && equation.indexOf(optionSeven) >= 0 && equation.indexOf(optionEight) >= 0) {
    document.getElementById(div).className = 'solution';
    return 'true';
  } else {
    if (status == 'true') {
      return 'true';
    } else {
      return 'false';
    }
  }
}

function checkAgainstNine(status, equation, div, optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix, optionSeven, optionEight, optionNine) {
  if (equation.indexOf(optionOne) >= 0 && equation.indexOf(optionTwo) >= 0 && equation.indexOf(optionThree) >= 0 && equation.indexOf(optionFour) >= 0 && equation.indexOf(optionFive) >= 0 && equation.indexOf(optionSix) >= 0 && equation.indexOf(optionSeven) >= 0 && equation.indexOf(optionEight) >= 0 && equation.indexOf(optionNine) >= 0) {
    document.getElementById(div).className = 'solution';
    return 'true';
  } else {
    if (status == 'true') {
      return 'true';
    } else {
      return 'false';
    }
  }
}
