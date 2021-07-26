const  one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const clear = document.getElementById('clear')
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const minus = document.getElementById('minus')
const equal = document.getElementById('equal')
const dot = document.getElementById('dot')
const add = document.getElementById('add')

const display = document.getElementById('display')



function onee(){
    display.value += one.value
    

}

function twoo(){
    display.value += two.value

}

function threee(){
    display.value += three.value

}

function fourr(){
    display.value += four.value

}

function fivee(){
    display.value += five.value

}

function sixx(){
    display.value += six.value

}

function sevenn(){
    display.value += seven.value

}

function eightt(){
    display.value += eight.value

}

function ninee(){
    display.value += nine.value

}

function zeroo(){
    display.value += zero.value

}

function addd(){
    display.value += add.value

}

function minuss(){
    display.value += minus.value

}

function multiplyy(){
    display.value += multiply.value

}

function dividee(){
    display.value += divide.value

}

function clearr(){
    display.value = ''

}

function dott(){
    display.value += dot.value

}

function equall(){
    display.value = eval(display.value)

}