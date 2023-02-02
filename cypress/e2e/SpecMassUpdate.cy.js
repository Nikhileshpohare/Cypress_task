import 'cypress-mochawesome-reporter/register';

import 'cypress-iframe'
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

describe('Massupdatesuite', () => {

    it('MassUpdate', () => {

  Tickets.RedTicket();
  Tickets.Ticket_filter();
  Tickets.Status_filter();
  Tickets.select_tickets();
  Tickets.MassUpdate();
  Tickets.changeStatusForMassUpdate();
  Tickets.submitMassupdate();

})
})
