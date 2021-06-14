//3. with custom element
const employeeTemplate = document.createElement('template')
employeeTemplate.innerHTML = `
    <select>
        <option value='-1'>--select--</option>
    </select>
`
class EmployeeElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(employeeTemplate.content.cloneNode(true))
    }
    connectedCallback() {
        console.log('connected')
        this.getEmployees()
    }
    getEmployees() {
        const request = new XMLHttpRequest();
        console.log(`ready state value: ${request.readyState}`)
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                console.log(`ready state value: ${request.readyState}`)
                const response = request.responseText;
                this.showData(JSON.parse(response))
            } else {
                console.log(`ready state value: ${request.readyState}`)
            }
        }
        request.open('GET', 'http://localhost:4000/employees', true)
        request.send();
    }
    showData(records) {
        const selectElement = this.shadowRoot.querySelector('select')
        if (records.length > 0) {
            for (let index = 0; index < records.length; index++) {
                const employee = records[index];
                const option = document.createElement('option')
                option.value = index.toString()
                option.textContent = employee.name
                selectElement.appendChild(option)
            }
        }
    }
}
window.customElements.define('emp-records', EmployeeElement)