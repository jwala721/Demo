describe('Cypress Test', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      })

    it('should click a button and display a message', () => {
       cy.get('input[name="username"]').click().type('Admin');
       cy.get('input[name="password"]').click().type('admin123')

        // Find the button and click it
        cy.get('button[type="submit"]').click();

        // Verify that the message is displayed
        // cy.get('#message').should('have.text', 'Button clicked!');
    });
});
