let calcButtons = document.querySelectorAll('.calc__button');
let display = document.getElementById('textarea');
let clear = document.querySelector('.clear');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let enter = document.querySelector('.enter');
let enterArr = [];
let i = 0;
let sum = 0;
let symbol = 0;

for (let calcButton of calcButtons) {
  calcButton.onclick = function() {
    display.append(calcButton.value);
  }

}

plus.onclick = function() {
  enterArr[i] = display.textContent;
  display.textContent = "";
  i++;
  console.log(enterArr);
  symbol = 1;
  console.log(symbol);
}

minus.onclick = function() {
  enterArr[i] = display.textContent;
  display.textContent = "";
  i++;
  console.log(enterArr);
  symbol = 0;
}

enter.onclick = function() {

  var numb = Number(display.textContent);
  if (symbol == 1) {
    for (var a = 0; a < enterArr.length; a++) {
      sum = sum + parseInt(enterArr[a]);
    }
    sum = sum + numb;
  } else {
    for (var a = 0; a < enterArr.length; a++) {
      sum = parseInt(enterArr[a]) - sum;
    }
    sum = sum - numb;
  }


toString(sum);
display.textContent = sum;
}

clear.onclick = function() {
  i = 0;
  display.textContent = "";
  enterArr = [];
  sum = 0;
}
