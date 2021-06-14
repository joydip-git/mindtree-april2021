//1-with JS AJAX through XMLHttpRequest object(provided by JS)
const getEmployees = () => {
    const request = new XMLHttpRequest();
    console.log(`ready state value: ${request.readyState}`)
    //readystatechange -> event
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            console.log(`ready state value: ${request.readyState}`)
            const response = request.responseText;
            //console.log(response)
            showData(JSON.parse(response))
        } else {
            console.log(`ready state value: ${request.readyState}`)
        }
    }
    request.open('GET', 'http://localhost:4000/employees', true)
    request.send();
}
function showData(records) {
    const selectElement = document.createElement('select')
    const defaultOption = document.createElement('option')
    defaultOption.value = '-1'
    defaultOption.textContent = '--select---'
    defaultOption.selected = true
    defaultOption.disabled = true

    selectElement.appendChild(defaultOption)

    if (records.length > 0) {
        for (let index = 0; index < records.length; index++) {
            const employee = records[index];
            const option = document.createElement('option')
            option.value = index.toString()
            option.textContent = employee.name
            selectElement.appendChild(option)
        }
    }

    document.body.appendChild(selectElement)
}
getEmployees()