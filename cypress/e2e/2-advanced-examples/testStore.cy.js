
context('Aliasing', () => {
    beforeEach(() => {
      cy.visit('https://www.automationteststore.com/')
    })
  
    it.only('.as() - alias a DOM element for later use', () => {
      // https://on.cypress.io/as

      cy.get('#featured > div').should('be.visible');

    // Get the list of products
    cy.get('#featured > div').each(($product, index) => {
      // Verify product name and price
      cy.wrap($product).find('a[class="prdocutname"]').invoke('text').then((productName) => {
        // Check if product name contains the search keyword
        expect(productName.toLowerCase()).to.include('Skinsheen Bronzer Stick');
      });
    });
  
    //   // Alias a DOM element for use later
    //   // We don't have to traverse to the element
    //   // later in our code, we reference it with @
  
    //   cy.get('.as-table').find('tbody>tr')
    //     .first().find('td').first()
    //     .find('button').as('firstBtn')
  
    //   // when we reference the alias, we place an
    //   // @ in front of its name
    //   cy.get('@firstBtn').click()
  
    //   cy.get('@firstBtn')
    //     .should('have.class', 'btn-success')
    //     .and('contain', 'Changed')
    });
    });