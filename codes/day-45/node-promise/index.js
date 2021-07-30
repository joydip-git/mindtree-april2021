function showMessage() {
    alert('hello')
}

//register a callback for an event
const secondButtonObject = document.getElementById('button2')

//a.use addEventListener method (pass the event name and the callback function name)
//secondButtonObject.addEventListener('click', showMessage)

//b. use onlclick property (pass the name of the callback function)
secondButtonObject.onclick = showMessage
