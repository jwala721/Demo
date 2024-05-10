describe('My First Test Suite', function()
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://admin-demo.nopcommerce.com/l");
// cy.get('input[class="email valid"]').click().clear().type('admin@yourstore.com');
// cy.get('input[class="password"]').click().clear().type('admin');
cy.get('button[type="submit"]').click();
cy.get('#id').click();

})
})
