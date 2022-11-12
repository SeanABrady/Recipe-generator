let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let ingredientEl = document.getElementById("ingredient")
let measureEl = document.getElementById("measure")

console.log(ingredientEl)
console.log(measureEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countText = "\n" + count + " " + measureEl.value + " of " + ingredientEl.value + " "
    saveEl.textContent  += countText
    measureEl.value = null
    ingredientEl.value = null
    count = -1
    increment()
}