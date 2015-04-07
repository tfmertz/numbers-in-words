function getWords(number) {
  var ones = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"};
  var teens = {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"};
  var tens = {2: "twenty", 3: "thirty", 4: "fourty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"};

  var words = "";
  while (number > 0) {
    if (words.length > 0) {
      words += " ";
    }

    if (number < 10) {
      words += ones[number];
      number = 0;
    } else if (number < 20) {
      words += teens[number];
      number = 0;
    } else if (number < 100) {
      words += tens[parseInt(number / 10)];
      number %= 10;
    } else if (number < 1000) {
      words += ones[parseInt(number / 100)] + " hundred";
      number %= 100;
    } else if (number < 10000) {
      words += ones[parseInt(number / 1000)] + " thousand";
      number %= 1000;
    }
  }

  return words;
}


jQuery(document).ready(function() {
  $("#word").focus();
  $("#anagram").submit(function(event) {

    event.preventDefault();
  });
});
