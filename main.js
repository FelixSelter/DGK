Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const students = [
  "MAXIM",
  "JOHAN",
  "HÜSEYIN",
  "EREN",
  "KEREM",
  "BEN",
  "JUSTUS",
  "JANA",
  "KSENIA",
  "LISA",
  "JOEL",
  "LIAS",
  "TIMO",
  "KILIAN",
  "JAKOB",
  "LENA",
  "HELENE",
  "AMIRA",
  "IRMAQ",
  "FELIX",
];

const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function pickStudent() {
  const selected = students.random();
  const characters = document.createElement("div");
  characters.classList.add("characters");

  [...selected].forEach((character, index) => {
    const characterElement = document.createElement("div");
    characterElement.classList.add("character");
    characterElement.id = `character-${index}`;
    characterElement.setAttribute("data-character", character);
    characters.appendChild(characterElement);
  });

  const container = document.querySelector("#student");
  container.innerHTML = "";
  container.appendChild(characters);

  document.querySelectorAll(".character").forEach((character) => {
    setTimeout(() => {
      character.classList.add("show");

      setTimeout(() => {
        character.classList.add("animate");
        const maxTicker = Math.floor(Math.random() * 15);
        let ticker = 0;

        const letterAnimation = setInterval(() => {
          //
          character.innerHTML = randomChars.random();
          if (ticker === maxTicker) {
            character.classList.remove("animate");
            character.classList.add("done");
            character.innerHTML = character.getAttribute("data-character");
            clearInterval(letterAnimation);
          }
          ticker++;
        }, 50);
        //
      }, Math.floor(Math.random() * 150));
    }, Math.floor(Math.random() * 150));
  });
}

pickStudent();
