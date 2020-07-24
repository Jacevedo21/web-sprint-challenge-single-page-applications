describe('adding text to the box', () => {
    it('will get the local host', () => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('will be able to add text to the box', () => {
        cy.get('input[name="name"]')
        .type('Ooga Booga')
        .should('have.value', 'Ooga Booga')
    })
})
describe('being able to select multiple toppings', () => {
    it('selects multiple toppings', () => {
        cy.get('input[type="checkbox"').check()
    })
})
describe('submit form', () => {
    it('should be able to submit', () => {
        cy.get('#submitBtn').click()
    })
})