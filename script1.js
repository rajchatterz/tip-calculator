const billInput = document.getElementById('totalBill')
const tipInput = document.getElementById('totalTip')
const numberOfPeopleDisplay = document.getElementById('numberOfPeople')
const displayUnit = document.getElementById('displayUnit')

let numberOfPeople = Number(numberOfPeopleDisplay.innerText)
console.log(numberOfPeople)

const calculateBill=()=>{
    let bill = Number(billInput.value)
    let tip = Number(tipInput.value)/100
    let total = bill+(bill*tip)
    let res = total / numberOfPeople

    displayUnit.innerText=`$${res.toFixed(2)}`
}
const Increment=()=>{
    numberOfPeople += 1
    numberOfPeopleDisplay.innerText=numberOfPeople
    calculateBill()
}
const Decrement = () =>{
    if(numberOfPeople<=1){
        return
    }
    numberOfPeople-=1
    numberOfPeopleDisplay.innerText=numberOfPeople
}