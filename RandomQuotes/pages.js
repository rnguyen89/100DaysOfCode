console.log("Hello World")

const btnTag = document.getElementById("btn")
const quoteTag = document.querySelector(".quote")
const authorTag = document.querySelector(".author")
const bodyTag = document.querySelector("body")

let state = 0

quotes = [
  {
    quote: "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
    author: "Will Ferrell",
    background: "#edc7a9"
  },
  {
    quote: "Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get if you’re able to ‘fall asleep right now.’",
    author: "Anonymous",
    background: "#e34a47"
  },
  {
    quote: "I\’m not superstitious, but I am a little stitious.",
    author: "Michael Scott",
    background: "#f7fe00"
  },
  {
    quote: "Trying is the first step toward failure.",
    author: "Homer Simpson",
    background: "#b472e6"
  }
]

const random = () => {
  state = Math.floor(Math.random() * quotes.length)
  updateSection()
}

const updateSection = () => {
  quoteTag.innerHTML = quotes[state].quote
  authorTag.innerHTML = quotes[state].author
  bodyTag.style.backgroundColor = quotes[state].background

}

btnTag.addEventListener('click', () => {
  console.log("random button is clicked")
  random()
})

