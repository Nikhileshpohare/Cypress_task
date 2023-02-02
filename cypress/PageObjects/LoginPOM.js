
class Entry
{
    Loginfunction(uid,pwd)
    {
        cy.get("#UserId").type(uid);
 
        cy.get('#Password').type(pwd);
 
        cy.get('#btnSubmit').click();
   
        cy.get('#childMenu').should('be.visible').and('exist');
    }
}
export default new Entry();
