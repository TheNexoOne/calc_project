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
  symbol = 1;
  console.log(enterArr);
}

minus.onclick = function() {
  enterArr[i] = display.textContent;
  display.textContent = "";
  i++;
  symbol = 0;
  console.log(enterArr);
}

enter.onclick = function() {

  var numb = Number(display.textContent);
  if (symbol == 1) {
    for (var a = 0; a < enterArr.length; a++) {
      sum = sum + parseInt(enterArr[a]);
    }
    sum = sum + numb;
    //  enterArr.length=0;
      toString(sum);
  } else {
    for (var a = 0; a < enterArr.length; a++) {
    sum = parseInt(enterArr[a]) - sum;
    }
    sum = sum - numb;
    //  enterArr.length=0;
      toString(sum);
  }
  toString(sum);
  display.textContent = sum;
  console.log(enterArr);
  sum = 0;
  enterArr.length=0;
  i=0;

}

clear.onclick = function() {
  i = 0;
  display.textContent = "";
  enterArr = [];
  sum = 0;
  symbol = 0;
}
