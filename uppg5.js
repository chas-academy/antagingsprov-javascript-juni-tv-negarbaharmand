function uppg5() {
  // skriv en if-sats som jämför två tal
  // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
  // annars skriv ut "Det andra talet är större än det första"

  function comparison(tal1, tal2) {
    if (tal1 > tal2) {
      console.log("Det första talet är större än det andra");
    } else {
      console.log("Det andra talet är större än det första");
    }
  }
  comparison(10, 5);
}

module.exports = { uppg5 };
