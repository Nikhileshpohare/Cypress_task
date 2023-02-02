class Leaves {

    Myrequest() {
        cy.get('.cd-dropdown-trigger').trigger('mouseover')
            .get("a[data-childmenu='My Desk'] span").trigger('mouseover')
            .get(".header-title[data-childmenu='My Request']").trigger('mouseover')
            .click();
            cy.wait(7000);
    }
    AddButttn() {
        cy.get("#createAddLeave").click();
        cy.wait(1000);
       
    }
    LeaveCategory() {
        cy.get("input[placeholder='Leave Category']").type('personal').click().type('{enter}');
        cy.wait(1000);
    }

    LeaveType() {
        cy.get("input[placeholder='Leave Type']").type('half').click().type('{enter}');
        cy.wait(1000);
    }
    StartDate() {
        cy.get(':nth-child(3) > :nth-child(2) > .k-datepicker > .k-picker-wrap > .k-select')
            .trigger('mouseover')
            .click()
            .type('{enter}')
    }
    EndDate() {
        cy.get(':nth-child(3) > .k-widget > .k-picker-wrap > .k-select')
            .trigger('mouseover')
            .click()
            .type('{enter}');
    }
    Status() {
        cy.get("input[placeholder='Status']").type('request').click().type('{enter}');
    }
    LeaveReason() {
        cy.get("textarea[placeholder='Reason']").clear().type('Due to personal Reason').click().type('{enter}');
    }
    SaveButton() {
        cy.get("button[ng-click='ApplyLeave()']").click();
    }
    CLickOnAction()
    {
        cy.get("tbody tr:nth-child(5) td:nth-child(12) div:nth-child(1) div:nth-child(1) a:nth-child(1) i:nth-child(1)")
        .click()
        .should('be.visible');
    }
    ClickEdit()
    {
        cy.get(".k-link[ng-click='EditLeave(leaveDetails)']")
        .click();
        cy.wait(4000);
    }
    ClickDelete()
    {
         cy.get('[ng-show="showDelete"] > .k-link').click();
    }


}
export default new Leaves();