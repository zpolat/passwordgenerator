const characters = [
   "A",
   "B",
   "C",
   "D",
   "E",
   "F",
   "G",
   "H",
   "I",
   "J",
   "K",
   "L",
   "M",
   "N",
   "O",
   "P",
   "Q",
   "R",
   "S",
   "T",
   "U",
   "V",
   "W",
   "X",
   "Y",
   "Z",
   "a",
   "b",
   "c",
   "d",
   "e",
   "f",
   "g",
   "h",
   "i",
   "j",
   "k",
   "l",
   "m",
   "n",
   "o",
   "p",
   "q",
   "r",
   "s",
   "t",
   "u",
   "v",
   "w",
   "x",
   "y",
   "z",
   "0",
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "7",
   "8",
   "9",
   "~",
   "`",
   "!",
   "@",
   "#",
   "$",
   "%",
   "^",
   "&",
   "*",
   "(",
   ")",
   "_",
   "-",
   "+",
   "=",
   "{",
   "[",
   "}",
   "]",
   ",",
   "|",
   ":",
   ";",
   "<",
   ">",
   ".",
   "?",
   "/",
]

let generatedPasswordOne = ""
let generatedPasswordTwo = ""
let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")

let generateButton = document.getElementById("generate")

generateButton.addEventListener("click", function () {
   for (let i = 0; i < 20; i++) {
      //   let randomPasswordOne = characters[Math.floor(Math.random() * characters.length)]
      //   let randomPasswordTwo = characters[Math.floor(Math.random() * characters.length)]
      generatedPasswordOne += randompasswd()
      generatedPasswordTwo += randompasswd()
      //   console.log(randomPasswordOne)
   }
   passwordOneEl.textContent = generatedPasswordOne
   passwordTwoEl.textContent = generatedPasswordTwo
   generatedPasswordOne = ""
   generatedPasswordTwo = ""
})

function randompasswd() {
   let randompasswd = characters[Math.floor(Math.random() * characters.length)]
   return randompasswd
}
