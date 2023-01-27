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