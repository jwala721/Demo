
context('verifying multiple product', () => {
    beforeEach(() => {
      cy.visit('https://www.automationteststore.com/')
    })
  
<<<<<<< HEAD
    it.only('verifying multiple product in feature', () => {
     //   cy.get('#featured > div').should('be.visible');

    // // Get the list of products
    // cy.get('#featured > div').each(($product, index) => {
    //   // Verify product name and price
    //   cy.wrap($product).find('div[class="fixed"]')               // row containing the heasers
    //     .children('a[class="prdocutname"]').invoke('text').then((productName) => {
    //     // Check if product name contains the search keyword
    //     expect(productName.toLowerCase()).to.include('Skinsheen Bronzer Stick');
    //   });
    // });
  
    

    const expected = ['Skinsheen Bronzer Stick', 'BeneFit Girl Meets Pearl', 'Benefit Bella Bamba', 'Tropiques Minerale Loose Bronzer']
    cy.get('#featured > div')
      .find('div[class="fixed"]')
      .children('a[class="prdocutname"]')
      .each(($th, index) => {
        cy.wrap($th).should('have.text', expected[index]);
      });

//     cy.get('div[class="block_frame block_frame_featured"]')
//     .find('div[class="fixed"]')               // row containing the heasers
//   .children('a[class="prdocutname"]').should('exist')               // collection of header elements
//   .should('contain', 'Skinsheen Bronzer Stick')    // assert 1st text
//   .and('contain', 'BeneFit Girl Meets Pearl')        // assert 2nd text
//   .and('contain', 'Benefit Bella Bamba')
//   .and('contain','Tropiques Minerale Loose Bronzer')    // assert 3rd text
=======
    it('.as() - alias a DOM element for later use', () => {
      // https://on.cypress.io/as

    //   cy.get('#featured > div').should('be.visible');

    // // Get the list of products
    // cy.get('#featured > div').each(($product, index) => {
    //   // Verify product name and price
    //   cy.wrap($product).find('a[class="prdocutname"]').invoke('text').then((productName) => {
    //     // Check if product name contains the search keyword
    //     expect(productName.toLowerCase()).to.include('Skinsheen Bronzer Stick');
    //   });
    // });
  
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

    // const expected = ['Skinsheen Bronzer Stick', 'Robin', 'Flash', 'Kid Flash']
    // cy.get('#featured > div')
    //   .children('a[class="prdocutname"]')
    //   .each(($th, index) => {
    //     cy.wrap($th).should('have.text', expected[index]);
    //   });

    cy.get('#featured > div')               // row containing the heasers
  .children('a[class="prdocutname"]')                 // collection of header elements
  .should('contain', 'Skinsheen Bronzer Stick')    // assert 1st text
  .and('contain', 'BeneFit Girl Meets Pearl')        // assert 2nd text
  .and('contain', 'Benefit Bella Bamba')
  .and('contain','Tropiques Minerale Loose Bronzer')    // assert 3rd text

>>>>>>> master
    });
    });