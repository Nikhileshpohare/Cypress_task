class Home{
    open()
    {
        cy.viewport(1440,900);
        cy.visit("https://spectrumdbperformance.specindia.com/");
        cy.wait(1000);
    }
}export default new Home();

