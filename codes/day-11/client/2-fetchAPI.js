//2-with fetch API(provided by browser)
const getEmployees = () => {
    const dataPromise = fetch('http://localhost:4000/employees')
    dataPromise
        .then(function (resp) {
            const p = resp.json()
            p.then(function (empData) {
                console.log(empData)
                showData(empData)
            })
                .catch(e => console.log(e))
        })
        .catch(function (err) {
            console.log(err)
        })
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