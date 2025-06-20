function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument

  const people = [
    { name: "Negar", age: 28 },
    { name: "Sara", age: 32 },
    { name: "Jonas", age: 35 },
    { name: "Julia", age: 29 },
    { name: "Erik", age: 40 },
  ];

  function printOver30(peopleArray) {
    peopleArray.forEach((person) => {
      if (person.age > 30) {
        console.log(person.name);
      }
    });
  }

  printOver30(people);
}

module.exports = { uppg8 };
