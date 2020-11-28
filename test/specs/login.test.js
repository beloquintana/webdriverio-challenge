const LoginPage = require('../pageobjects/login.page');
const EmployeePage = require('../pageobjects/employee.page');

describe('Login', () => {
    it('should login successfully', () =>{
        browser.url('');
        LoginPage.loginAs('admin', 'admin123');

        expect(EmployeePage.userNameHeader).toHaveText('admin');
    })
})