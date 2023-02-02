class Tickets {

    RedTicket() {
        cy.get('.cd-dropdown-trigger').trigger('mouseover')
            .get("[data-href='red/parentlist']").trigger('mouseover')
            .get(".RED_menu > .cd-secondary-dropdown > .new_list > :nth-child(1) > .header-title")
            .trigger('mouseover')
            .click();
        cy.wait(10000);
    }
    CreateTicket() {
        cy.get('#createTicket').click();
    }
    MassUpdate() {
        cy.get("#massStatusUpdate").click();
    }
    Environment() {
        cy.get("input[placeholder='Select Environment']").type('qa').click().type('{enter}');
        cy.wait(1000);
    }
    Feature() {
        cy.get("input[placeholder='Select Feature']").type('No').click().type('{enter}');
        cy.wait(500);
    }
    Version() {
        cy.get("input[placeholder='Select Affected Version']").type('2.0.0').click().type('{enter}');
        cy.wait(1000);
    }
    Ticket_As() {
        cy.get("input[placeholder='Select Ticket As']").type('Bug').click().type('{enter}');
        cy.wait(1000);
    }
    Type() {
        cy.get("input[placeholder='Select Type']").type('Functional').click().type('{enter}');
        cy.wait(1000);
    }
    Severity() {
        cy.get("input[placeholder='Select Severity']").type('Medium').click().type('{enter}');
        cy.wait(1000);
    }
    Title() {
        cy.get("#txtTitle").type('Login Button Not Working');
        cy.wait(1000);
    }
    Narration() {
        cy.frameLoaded("body > div:nth-child(5) > div:nth-child(1) > section:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > iframe:nth-child(1)");
        cy.iframe("body > div:nth-child(5) > div:nth-child(1) > section:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > iframe:nth-child(1)")
            .clear()
            .type('Login Button should be working');
    }
    Submit() {
        cy.get('#btnSaveAndNext').click();
    }
    Ticket_filter() {
        cy.get("li[class='k-item k-state-default'] span[class='k-link k-header']")
            .click();
    }
    Status_filter() {
        cy.get("body > div:nth-child(5) > div:nth-child(1) > section:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(5) > li:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)")
            .type('open')
            .click()
            .type('{enter}');
    }
    select_tickets() {
        cy.wait(1000);
       // cy.get('[data-ticketid="108558"] > .stopprop.width25 > .d-block').trigger('mouseover').should('be.visible').click();
        cy.get('[data-ticketid="108547"] > .stopprop.width25 > .d-block').trigger('mouseover').should('be.visible').click();
    }
    changeStatusForMassUpdate()
    {
        cy.get('.statusform > fieldset > :nth-child(2) > .col-sm-7 > .k-widget > .k-dropdown-wrap > .k-input')
        .type('In Progress')
        .click()
        .type('{enter}');
    }
    submitMassupdate()
    {
        cy.get('#btnSubmitMassUpdate').click();
    }
    SearchTitle() {
        cy.get('#titleTicket').type('Q108555').click().type('{enter}');
        cy.wait(3000);
    }
    ClickTicketforPostReply() {
        cy.get("tr[data-ticketid='108555'] >.width60 > a").invoke('removeAttr', 'target').click();
    }
    PostReply() {
        cy.get('.col-sm-4 > .btn').click();
    }
    StatusOfPostReply() {
        cy.get('.modal-body > :nth-child(2) > :nth-child(1) > .value > .k-widget > .k-dropdown-wrap > .k-input')
            .clear()
            .type('In Progress')
            .click()
            .type('{enter}');
    }
    SubmitReply() {
        cy.get('#btnSaveSubmitData').click();
    }
    SearchTicketforAssign() {
        cy.get('#titleTicket').type('Q108353').click().type('{enter}');
        cy.wait(3000);
    }
    clickTicketforAssign() {
        cy.get("tr[data-ticketid='108353'] > .width60 >a").invoke('removeAttr', 'target').click();
    }
    Assignment() {
        cy.get('[src="https://spectrumdbperformance.specindia.com/Images/img_assign.png"]').click();
    }
    Timesheetfill() {
        cy.get("tbody tr[ng-repeat='cons in consultant.consultants'] td:nth-child(3) span:nth-child(1) input:nth-child(1)")
            .click()
            .type('8');
        cy.wait(2000);
    }
    Due_Date() {
        cy.get(':nth-child(5) > .k-datepicker > .k-picker-wrap > .k-select')
            .trigger('mouseover')
            .click()
            .type('01-Jan-2023');
    }
    Priority() {
        cy.get("input[placeholder='Priority']").type('moderate').click().type('{enter}');
    }
    SaveforAssign() {

        cy.get('[ng-disabled="consultant.assignees.length === consultant.consultants.length"]').click();

    }


}

export default new Tickets();