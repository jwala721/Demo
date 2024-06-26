
context('verifying multiple product', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
      cy.visit('https://www.automationteststore.com/')
    })
  
    it('verifying multiple product in feature', () => {
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
//   .and('contain','Tropiques Minerale Loose Bronzer')    // assert 3rd text...

      });


    it('clicking on cart', () => {
          cy.get('li[data-id="menu_cart"]').eq(0).should('be.visible').click();
          cy.get('span[class="maintext"]').should('contain',' Shopping Cart');
          Cy.get('').should('exit');
   
      
       });
    });