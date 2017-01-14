var num1 = [],
    num2 = [],
    $screen = $("#screen"),
    operand = null;
    solved = false;


var add = function(num1, num2){
  return num1 + num2;
}

var multiply = function(num1, num2){
  return num1 * num2;
}

var minus = function(num1, num2){
  return num1 - num2;
}

var divide = function(num1, num2){
  return num1 / num2;
}

$(".numpad").click(function(){
    var input = $(this).html();

    if(operand === null){
      num1.push(input);
      $screen.html(num1.join(''));
    } else {
      num2.push(input);
      $screen.html(num2.join(''));
    }
});

$(".operand").click(function(){
  var input = $(this).html();
  operand = operandfnc(input);
});

function operandfnc(symbol){
  operand = symbol.replace("x", "*").replace("%", "/");
  $screen.html(num1.join('') + operand);
  return operand;
};

$("#equals").click(function(){
  var result = null,
  //Uses unary operator + to convert first string in array to a number
      n1 = +num1,
      n2 = +num2;
  switch (operand){
    case '+':
      result = n1 + n2;
      break;
    }
    $screen.html(result);
});
