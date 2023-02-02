import 'cypress-mochawesome-reporter/register';

import Entry from '../PageObjects/LoginPOM';
import Exit from '../PageObjects/LogoutPOM';
import Home from '../PageObjects/Homepage';
import Tickets from '../PageObjects/RED';


before('InitBrowser', () => {
    Home.open();
})

beforeEach('LoginPage', () => {
  
    cy.fixture('Credential').then(function (data) {
        Entry.Loginfunction(data.userData[0].username, data.userData[0].password);
    })
})

afterEach('LogoutFunction', () => {
  
    Exit.Logout();
})


describe('ReplyforPost', () => {

    it('PostReply', () => {

        Tickets.RedTicket();
        Tickets.SearchTitle();
        Tickets.ClickTicketforPostReply();
        Tickets.PostReply();
        Tickets.StatusOfPostReply();
        Tickets.SubmitReply();

    })

})