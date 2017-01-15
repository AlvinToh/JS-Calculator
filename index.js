var num1 = [],
    num2 = [],
    $screen = $("#screen"),
    operand = null;
    solved = false;

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
  //if solved need to reset num2 array and also solved and operand variable
  if(solved){
    num2 = [];
    operand = null;
    solved = false;
  }
  operand = operandfnc(input);
});

function operandfnc(symbol){
  operand = symbol.replace("x", "*").replace("%", "/");
  $screen.html(num1.join('') + operand);
  return operand;
};

$("#equals").click(function(){
  //num1.join('') will convert array of elements into 1 string
  //Uses unary operator + to convert string into number
  var result = null,
      n1 = +num1.join(''),
      n2 = +num2.join('');
  switch (operand){
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '/':
      result = n1 / n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    }
    $screen.html(result);
    num1 = [result];
    num2 = [n2];
    solved = true;
});

$("#clear").click(function(){
    num1 = [];
    mum2 = [];
    operand = null;
    solved = false;
    $screen.html(0);
});
