var numberToWords = function (num) {
  const BILLION = 1000000000;
  const MILLION = 1000000;
  const THOUSAND = 1000;
  const HUNDRED = 100;
  const TWENTY = 20;
  const TEN = 10;

  const translation = new Map();
  // ones
  translation.set(1, "One");
  translation.set(2, "Two");
  translation.set(3, "Three");
  translation.set(4, "Four");
  translation.set(5, "Five");
  translation.set(6, "Six");
  translation.set(7, "Seven");
  translation.set(8, "Eight");
  translation.set(9, "Nine");
  translation.set(10, "Ten");
  // teens
  translation.set(11, "Eleven");
  translation.set(12, "Twelve");
  translation.set(13, "Thirteen");
  translation.set(14, "Fourteen");
  translation.set(15, "Fifteen");
  translation.set(16, "Sixteen");
  translation.set(17, "Seventeen");
  translation.set(18, "Eighteen");
  translation.set(19, "Nineteen");
  // Tens
  translation.set(20, "Twenty");
  translation.set(30, "Thirty");
  translation.set(40, "Forty");
  translation.set(50, "Fifty");
  translation.set(60, "Sixty");
  translation.set(70, "Seventy");
  translation.set(80, "Eighty");
  translation.set(90, "Ninety");

  const translationNum = (num) => {
    let rest = 0;
    let firstThreeNum = 0;
    if (num >= BILLION) {
      firstThreeNum = Math.floor(num / BILLION);
      rest = num % BILLION;
      return (
        translationNum(firstThreeNum) +
        " Billion" +
        (rest > 0 ? " " + translationNum(rest) : "")
      );
    } else if (num >= MILLION) {
      firstThreeNum = Math.floor(num / MILLION);
      rest = num % MILLION;
      return (
        translationNum(firstThreeNum) +
        " Million" +
        (rest > 0 ? " " + translationNum(rest) : "")
      );
    } else if (num >= THOUSAND) {
      firstThreeNum = Math.floor(num / THOUSAND);
      rest = num % THOUSAND;
      return (
        translationNum(firstThreeNum) +
        " Thousand" +
        (rest > 0 ? " " + translationNum(rest) : "")
      );
    } else if (num >= HUNDRED) {
      firstThreeNum = Math.floor(num / HUNDRED);
      rest = num % HUNDRED;
      return (
        translationNum(firstThreeNum) +
        " Hundred" +
        (rest > 0 ? " " + translationNum(rest) : "")
      );
    } else if (num >= TWENTY) {
      firstThreeNum = Math.floor(num / TEN) * 10;
      rest = num % TEN;
      return (
        translation.get(firstThreeNum) +
        (rest > 0 ? " " + translation.get(rest) : "")
      );
    } else {
      return translation.get(num);
    }
  };
  return num == 0 ? "Zero" : translationNum(num);
};

console.log(numberToWords(123));
