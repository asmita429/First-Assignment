// This is only for reference
// Format a monetary value in numbers to be separated by commas,

const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number)
);
// Expected output: "123.456,79 €"

// The Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number)
);
// Expected output: "￥123,457"

console.log(
  new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number)
);
//Expected output: 123,000
// Limit to three significant digits

console.log(
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number)
);
// Expected output: "1,23,000"
