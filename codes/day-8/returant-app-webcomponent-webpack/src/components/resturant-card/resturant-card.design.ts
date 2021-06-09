export const getMainTemplate = (): HTMLTemplateElement => {
    const cardTemplate = document.createElement('template')
    cardTemplate.innerHTML = `
    <div>
        <h3></h3>
        <div>
            <p id='location'></p>
            <p id='rating'></p>
        </div>
    </div>
`
    return cardTemplate;
}
export const getAlternateTemplate = (): HTMLTemplateElement => {
    const alternateCardTemplate = document.createElement('template')
    alternateCardTemplate.innerHTML = `
    <div>
      No records...
    </div>
`
    return alternateCardTemplate;
}