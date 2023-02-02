import 'cypress-mochawesome-reporter/register';

import Entry from '../PageObjects/LoginPOM';
import Exit from '../PageObjects/LogoutPOM';
import Home from '../PageObjects/Homepage';
import Leaves from '../PageObjects/LeavesPOM';


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
describe('Leaves', ()=>{

    it('ApplyLeave',()=>{
        
    Leaves.Myrequest();
    Leaves.AddButttn();
    Leaves.LeaveCategory();
    Leaves.LeaveType();
    Leaves.StartDate();
    Leaves.EndDate();
    Leaves.Status();
    Leaves.LeaveReason();
    Leaves.SaveButton();
        
    })


    it.skip('EditLeave',()=>{

        Leaves.Myrequest();
        Leaves.CLickOnAction();
        Leaves.ClickEdit();
        Leaves.LeaveReason();
       // Leaves.SaveButton();
    })


    it.skip('DeleteLeave',()=>{
    
           Leaves.Myrequest();
           Leaves.CLickOnAction();
           Leaves.ClickDelete();
    })

})