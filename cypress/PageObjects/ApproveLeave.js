class Approval
{

    MyApprove()
    {
        cy.get('.cd-dropdown-trigger').trigger('mouseover')
        .get("a[data-childmenu='My Desk'] span").trigger('mouseover')
        .get(".header-title[data-childmenu='My Approval']").trigger('mouseover')
        .click();
        
    }
    clickonleave()
    {
        cy.get("#childMenu").should('have.text','My Approval');
        cy.get('#hyper_LeaveApproval').click();cy.wait(1000);
    }
    mysubordinate()
    {
        cy.get('[ng-include="LeaveUrl"] > :nth-child(1) > .col-sm-12 > .subor-list > :nth-child(2) > label > .checkmark')
        .trigger('mouseover')
        .click();
    }
    actionApprove()
    {
    //     cy.get("cy.get(':nth-child(1) > :nth-child(10) > .approval-status > .d-flex > :nth-child(1) > .approve-request > .fa')")
    //     .click();
     }


}
export default new Approval();