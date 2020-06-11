//business logic
const isBinaryString = function(str){
  const regex = /^[01]+$/;
  return regex.test(str);
}

const toDecimal = function(str){
  let number = 0;
  for(let i = str.length-1; i >= 0; i--) {
    console.log(parseInt(str.charAt(i)));
    number += Math.pow(2, parseInt(str.charAt(i)));
    console.log(number);
  }
  return number;
}

const toBinary = function(num){
  let result = [];
  while(num > 0) {
    result.unshift((num%2).toString());
    num = Math.floor(num/2);
  }
  return result.join('');
}

//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#answer").empty();
    if($("input:radio[name=conversion]:checked").val() === "decimal"){
      const binaryString = $("input#input").val();
      console.log(binaryString);
      if(!binaryString) {
        alert("Input your binary string");
        $("input#input").val("");
        return;
      }
      if(!isBinaryString(binaryString)) {
        alert("Binary string contains only 0 and 1");
        $("input#input").val("");
        return;
      } else {
        $("#answer").append("<p>"+"Binary string <span>" + binaryString + "</span> converting to decimal number is: <span>" + toDecimal(binaryString) + "</span></p>");
        $("input#input").val("");
      }
    } else {
      const decimalNumber = parseInt($("input#input").val());
      if(!decimalNumber) {
        alert("Empty or incorrect input");
        $("input#input").val("");
        return;
      }
      $("#answer").append("<p>"+"Decimal number <span>" + decimalNumber + "</span> converting to binary string is: <span>" + toBinary(decimalNumber) + "</span></p>");
      $("input#input").val("");
    }
  });
});