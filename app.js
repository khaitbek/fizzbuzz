const fizzBuzzForm = document.querySelector("#fizzBuzzForm")
const userVal = document.querySelector("#fizzBuzzInput")
const alertDiv = document.querySelector("#alert")

const valuesList = document.querySelector("#valuesList")
const fizzWrapper = document.querySelector("#fizzValues")
const buzzWrapper = document.querySelector("#buzzValues")
const fizzBuzzWrapper = document.querySelector("#fizzBuzzValues")


const fizzBuzzVals = []
const fizzVals = []
const buzzVals = []

fizzBuzzForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    const userInputVal = Number(userVal.value)
    if (!fizzBuzz(userInputVal)) {
        displayAlert()
        return
    }
    removeAlert()
    if (fizzBuzz(userInputVal) === "FizzBuzz") {
        fizzBuzzVals.push(userInputVal)
        fizzVals.push(userInputVal)
        buzzVals.push(userInputVal)
    } else if (fizzBuzz(userInputVal) === "Fizz") {
        fizzVals.push(userInputVal)
    } else {
        buzzVals.push(userInputVal)
    }

    fizzBuzzForm.reset()
    updateValues()

})

function removeAlert() {
    alertDiv.classList.remove("d-block")
    alertDiv.classList.add("d-none")
}

function displayAlert() {
    alertDiv.classList.remove("d-none")
    alertDiv.classList.add("d-block")
}

function fizzBuzz(number) {
    return number % 15 == 0 ? "FizzBuzz" : number % 5 == 0 ? "Buzz" : number % 3 == 0 ? "Fizz" : false
}

function updateValues() {
    fizzWrapper.textContent = `Fizz values: ${fizzVals.join(", ")}`
    fizzBuzzWrapper.textContent = `FizzBuzz values:  ${fizzBuzzVals.join(", ")}`
    buzzWrapper.textContent = `Buzz values:  ${buzzVals.join(", ")}`
}