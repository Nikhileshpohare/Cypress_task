class Exit {
    Logout() {
     cy.visit("https://spectrumdbperformance.specindia.com/MyDesk/Dashboard");
        cy.wait(2000);
        cy.get('.caret').click();
        cy.get('#logout').click();
    }
}

export default new Exit();