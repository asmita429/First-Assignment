// Function to convert a number to its word representation
function numberToWords(number) {
  // Define arrays for one through nineteen and tens
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  // Function to convert a number less than 1000 to words
  function convertLessThanThousand(number) {
    if (number === 0) {
      return "";
    } else if (number < 10) {
      return ones[number];
    } else if (number < 20) {
      return teens[number - 10];
    } else if (number < 100) {
      return (
        tens[Math.floor(number / 10)] +
        " " +
        convertLessThanThousand(number % 10)
      );
    } else {
      return (
        ones[Math.floor(number / 100)] +
        " hundred " +
        convertLessThanThousand(number % 100)
      );
    }
  }

  // Function to convert a number to words
  function convert(number) {
    if (number === 0) {
      return "zero";
    } else {
      return convertLessThanThousand(number);
    }
  }

  // Call the convert function
  return convert(number);
}

// Example usage
// const number = 10;
// console.log(numberToWords(number)); // Output: "one hundred twenty three"

export default numberToWords;
