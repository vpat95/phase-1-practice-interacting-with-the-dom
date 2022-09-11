
//increment textcontent of h1#counter by 1 every second
const timer = document.querySelector("#counter")
let interval = setInterval(() => timer.textContent++, 1000)

//add event listener to (-) button to decrement
const minus = document.querySelector("#minus")
minus.addEventListener('click', () => timer.textContent--)

//add event listener to (+) button to increment
const plus = document.querySelector("#plus")
plus.addEventListener('click', () => timer.textContent++)

//likes
const like = document.querySelector("#heart")

// counter resets to zero outside of loop on creation of new <li> element
let count = 0
like.addEventListener('click', () => {
    const like = timer.textContent
    if (document.getElementById(`${like}`)) {
        const message = document.getElementById(`${like}`)
        message.innerText = `${message.id} has been liked ${count++} times`
    
    }
    else {
        const eachNumber = document.createElement("li")
        eachNumber.setAttribute('id', `${timer.innerText}`)
        count = 1
        eachNumber.innerText = `${like} has been liked ${count} time`
        document.querySelector('.likes').appendChild(eachNumber)
    }
})

// pause
const pause = document.querySelector('#pause')

pause.addEventListener('click', () => {
    if (pause.innerText === 'pause'){
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
        pause.innerText = "resume"
        clearInterval(interval)
    }
    else {
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
        pause.innerText = "pause"
        interval = setInterval(() => timer.textContent++, 1000)
    }
})

//comments

const submit = document.querySelector('#submit')
submit.addEventListener('click', (e) =>{
    e.preventDefault()
    const value = document.querySelector('#comment-input').value
    const comment = document.createElement("p")
    comment.innerText = `${value}`
    document.querySelector('#list').appendChild(comment)
})
