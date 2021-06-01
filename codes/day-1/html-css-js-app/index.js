//global code
// console.log('hello...')
// //variant
// var x = 'JOYDIP'
// console.log(typeof x)
// x = 10
// console.log(typeof x)
// var name = x.toLocaleLowerCase();
// console.log(name)
function add() {
    var x = 10
    var y = 20
    var result = x + y
    console.log(result)
}
function authenticate() {
    //Document OObject Model Application Programmin Interface
    //DOM APIs
    //userNameTextBox <-- HTMLInputElement
    var userNameTextBox = document.getElementById('txtUserName')
    console.log(userNameTextBox)
    var passwordTextBox = document.getElementById('txtPassword')
    // console.log(passwordTextBox)
    // console.log(userNameTextBox.value)
    // console.log(passwordTextBox.value)
    if (userNameTextBox.value === 'joydip' && passwordTextBox.value === 'Joydip@123') {
        window.alert('valid user')
    } else {
        window.alert('invalid user')
    }

    var userElements = document.getElementsByName('user')
    console.log(userElements)

    var radioElements = document.getElementsByName('messageRadios')
    console.log(radioElements)
    for (var i = 0; i < radioElements.length; i++) {
        var radioElement = radioElements[i]
        if (radioElement.checked) {
            console.log(radioElement.value)
        }
    }

    var tableObjects = document.getElementsByTagName('table')
    console.log(tableObjects[0])
}
