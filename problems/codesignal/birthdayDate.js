/*
Whenever you decide to celebrate your birthday you always do this your favorite café, which is quite popular and as such usually very crowded.
This year you got lucky: when you and your friend enter the café you’re surprised to see that it’s almost empty.
The waiter lets slip that there are always very few people on this day of the week. You enjoyed having the café all to yourself, and are now curious about the next time you’ll be this lucky.
Given the current birthdayDate, determine the number of years until it will fall on the same day of the week.
For your convenience, here is the list of months lengths (from January to December, respectively): Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Please, note that in leap years February has 29 days. If your birthday is on the 29th of February, you celebrate it once in four years. Otherwise you birthday is celebrated each year.
Note (leap years): Year is leap if its number is divisible by 4 and isn’t divisible by 100 or if its number is divisible by 400.
For birthdayDate = "02-01-2016", the output should be dayOfWeek(birthdayDate) = 5.
February 1 in 2016 is a Monday. The next year in which this same date will be Monday too is 2021. 2021 - 2016 = 5, which is the answer.
*/

function dayOfWeek(birthdayDate) {
  let date = new Date();
  date.setTime(Date.parse(birthdayDate));
  let dayOfWeek = date.getDay();
  let count = 1;
  let birthdayPre = birthdayDate.slice(0,6);
  let birthdayDateYear = (parseInt(birthdayDate.slice(6))+1).toString()
  birthdayDate = birthdayPre + birthdayDateYear;
  date.setTime(Date.parse(birthdayDate));

  while (parseInt(birthdayDate.split('-')[0]) !== date.getMonth() + 1 || date.getDay() !== dayOfWeek) {
    birthdayPre = birthdayDate.slice(0,6);
    birthdayDateYear = (parseInt(birthdayDate.slice(6))+1).toString();
    birthdayDate = birthdayPre + birthdayDateYear;
    date.setTime(Date.parse(birthdayDate));
    count++;
  }
  return count;
}

let output = dayOfWeek("02-01-2016");
let expectedOutput = 5;

if (output === expectedOutput) {
  console.log('Success!');
} else {
  console.log('Unsuccessful');
}