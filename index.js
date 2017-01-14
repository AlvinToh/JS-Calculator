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
};

$("#equals").click(function(){
  var result = null;
  switch (operand){
    case '+':
      result = num1[0] + num2[0];
      break;
    }
    $screen.html(result);
});
