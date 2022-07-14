function timeConversion(s) {
  // Write your code here
  const ap = s.charAt(8);
  process.stdout.write(ap);
  if (ap == 'A') {
    if(s.substring(0, 2) == '12') return '00' + s.substring(2, 8);
    else {
      process.stdout.write(s.substring(0, 8));
      return s.substring(0, 8);  
    }
  } else if (ap == 'P') {
    let hour = parseInt(s.substring(0, 2));
    if (hour < 12) {
      hour += 12;
      process.stdout.write(s.substring(2, 8));
      
      return hour + s.substring(2, 8);
    } else return s.substring(0, 8);
  }
}