var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }
document.write('<h3>'+greeting+'</h3>');
var age =2
while (age < 10) {
  console.log("yes")
  age++;
  age = age +2;
}
for(var count=1; count < 10; count=count+3
   ){
     //mycode
   }
   var number = 0;
   while (number <= 10) {
      number++;
      if ((number % 2) != 0) {
          continue;
      }
      alert(number);     // => 2, 4, 6, 8, 10 
   }
