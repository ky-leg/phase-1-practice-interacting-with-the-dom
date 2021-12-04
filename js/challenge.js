let counter = parseInt(document.getElementById('counter').innerText)

const pauseButton = document.getElementById('pause')

const counterCounter = { } 

setInterval( () => timeCounter(), 1000)



document.addEventListener('click', function(event){
    event.preventDefault()
    if (event.target.id === 'minus') {
        decrementCounter(event)
    }
    if (event.target.id === 'plus') {
        incrementCounter(event)
    }
    if (event.target.id === 'heart') {
        logCounter(event)
    }
    if (event.target.id === 'pause') {
        pauseCounter(event)
    }
    // if (event.target.id === 'submit') {
    //     comment(event)
    // }
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('supbb')
    })
})



function timeCounter() {
    if (pauseButton.innerText === 'pause'){
        counter += 1;
    appendCounterToDOM()
    }
}

function decrementCounter(event) {
    counter -= 1;
    appendCounterToDOM()
}

function incrementCounter(event) {
    counter += 1;
    appendCounterToDOM()
}

function logCounter(event) {
    const ul = document.getElementsByClassName('likes')[0];
    const li = document.createElement('li');
    if (counter in counterCounter) {
        counterCounter[counter] += 1
        const liToEdit = document.getElementsByClassName(`${counter}`)[0]
        liToEdit.innerText = `The ${counter} has been liked ${counterCounter[counter]} times.`
    }
    else {
        counterCounter[counter] = 1 
        li.setAttribute('class', counter);
        li.append(`The ${counter} has been liked ${counterCounter[counter]} times.`)
        ul.appendChild(li)
    }
}

function pauseCounter(event) {
   
    if (pauseButton.innerText === 'pause') {
        pauseButton.innerText = ' resume ';
        disableButtons();
    }
    else if (pauseButton.innerText === 'resume') {
        pauseButton.innerText = ' pause ';
        enableButtons()
    }
}

function comment(event) { 
    const div = document.getElementById('list')
    const p = document.createElement('p')
    const formText = event.target.list
    console.log(formText)
    p.append(formText)
    div.appendChild(p)
}

function appendCounterToDOM() {
    document.getElementById('counter').innerText = `${counter}`
}

function disableButtons() {
    document.getElementById('minus').disabled = true;
    document.getElementById('plus').disabled = true;
    document.getElementById('heart').disabled = true;    
}

function enableButtons() {
    document.getElementById('minus').disabled = false;
    document.getElementById('plus').disabled = false;
    document.getElementById('heart').disabled = false;    
}


