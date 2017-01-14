var my_max = function (array){
  var max = array[0];
  for(var i = 0; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
    }
  }
  return max;
}

var vowel_count = function(array){
    var count = 0,
    vowel = /[aeiou]/i;
    for(var i = 0; i < array.length; i++){
      if (vowel.test(array)){
        count++;
      }
    }
    return count;
}

var reverse = function(array){
  var reverse = "";
  for(var i = array.length-1; i >= 0; i--){
      reverse+= array[i];
  }
  return reverse;
}
