import 'cypress-mochawesome-reporter/register';

import Entry from '../PageObjects/LoginPOM';
import Exit from '../PageObjects/LogoutPOM';
import Home from '../PageObjects/Homepage';
import Approval from '../PageObjects/ApproveLeave';


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


describe('leave', () => {
    it('ApproveLeave', () => {

        Approval.MyApprove();
        Approval.clickonleave();
        Approval.mysubordinate();
        Approval.actionApprove();
    })
})