
const body = document.body
const theme = document.getElementById('theme')
const bulbImg = document.getElementById('theme-button')

let flag = true
theme.addEventListener( 'click', ()=>{
    console.log('toggle theme worked');
    body.classList.toggle('dark');
    
    if (flag) {
        bulbImg.src = './light.png';
      } else {
        bulbImg.src = "./bulb1.jpg";
      }
      flag=!flag;
})



const inputOne = document.getElementById('input-1')
const inputTwo = document.getElementById('input-2')
const operator = document.getElementById('operator')
const equals = document.getElementById('equals')
const computation = document.getElementById('computation')
const history = document.getElementById('history')

// console.log(inputOne, inputTwo, operator)

//eventlisteners

equals.addEventListener('click', ()=> {
    console.log('Equals is clicked') 
    const value1=parseInt(inputOne.value)
    const value2=  parseInt(inputTwo.value)
    
    let result = 0
    switch(operator.value){
        case '+' : 
            result = value1 + value2;
            break;

        case '-' :
            result = value1 - value2;
            break;

        case '*' :
            result = value1 * value2;
            break;

        case '/' :
            result = value1 / value2;
            break;
    }

console.log('Result is :' + result)
computation.innerText = 'Ans : ' + result;

const historyString = value1 + ' ' +operator.value + ' ' + value1 + '=' + ' ' + ' ' + result
console.log(historyString)

//Adding to the history section
const historyList = document.createElement('li')
historyList.innerText = historyString;
historyList.style.listStyle = 'none'
history.appendChild(historyList)

inputOne.value= null
inputTwo.value= null

})