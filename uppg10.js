function uppg10() {
  const numbers = [5, 12, 7, 10, 20, 9, 11];

  // skapa tre arrayer - bigEven, smallOdd, other
  // loopa igenom numbers och placera talen i respektive array
  // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
  // smallOdd ska innehålla tal mindre än 10 och udda
  // other ska innehålla alla andra tal
  // returnera ett objekt med de tre arrayerna

  const bigEven = [];
  const smallOdd = [];
  const other = [];
  numbers.forEach((numbers) => {
    if (numbers > 10 && numbers % 2 === 0) {
      bigEven.push(numbers);
    } else if (numbers < 10 && numbers % 2 !== 0) {
      smallOdd.push(numbers);
    } else {
      other.push(numbers);
    }
  });
  return { bigEven, smallOdd, other };
}

module.exports = { uppg10 };
