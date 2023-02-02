

import Entry from '../PageObjects/LoginPOM';
import Exit from '../PageObjects/LogoutPOM';
import Home from '../PageObjects/Homepage';
import Tickets from '../PageObjects/RED';

before('InitBrowser', () => {       
    Home.open();
})

beforeEach('LoginPage', () => {
  
    cy.fixture('Credential').then(function (data) {     
        // Accessing data from the Fixture file (username and password)
        Entry.Loginfunction(data.userData[0].username, data.userData[0].password); //
    })
})

afterEach('LogoutFunction', () => {
  
    Exit.Logout();
})

describe('SpecTicket', ()=>{
    

it.skip('SpecCreateTicket',()=>{
    //Call the methods step by step from POM to creating Ticket
    Tickets.RedTicket();
    Tickets.CreateTicket();
    Tickets.Environment();
    Tickets.Feature();
    Tickets.Version();
    Tickets.Ticket_As();
    Tickets.Type();
    Tickets.Severity();
    Tickets.Title();
    Tickets.Narration();
    Tickets.Submit();
   
})

})