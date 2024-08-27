const api_url = "https://api.quotable.io/random"

const quote = document.querySelector(".quote")
const author = document.querySelector(".quote-author")
const container = document.querySelector(".container")
const wrapper = document.querySelector(".wrapper")

async function getQuote(url) {
    const quoteResponse = await fetch(url)
    let quotes = await quoteResponse.json()
    return quotes
}

async function loadJsonData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function changeBackground() {
    const data = await loadJsonData('/data.json')
    const {images} = data
    const randomIndex = Math.floor(Math.random() * images.length)
    const selectedImage = images[randomIndex]
    container.style.backgroundImage =  `url(${selectedImage.url})`
    wrapper.style.backgroundImage =  `url(${selectedImage.url})`
}

async function generateQuote() {
    const quotes = await getQuote(api_url)
    quote.innerHTML = '" ' + quotes.content + ' "'
    author.innerHTML = quotes.author
}

function tweetQuote () {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " --by " + author.innerHTML, "Tweet WIndow")
}

setInterval(changeBackground, 60000)

document.addEventListener('DOMContentLoaded', () => {
    generateQuote()
    changeBackground()
});