const LoginPage = require('../pageobjects/login.page');
const EmployeePage = require('../pageobjects/employee.page');

describe('Employee', () => {
    it('should add employee', () =>{
        browser.url('');
        LoginPage.loginAs('admin', 'admin123');
        expect(EmployeePage.userNameHeader).toHaveText('admin');

        EmployeePage.fillEmployeeForm('Juan','MTZ','MTZ','Cuba','11500','Juan@gmail.com','5368554');
        EmployeePage.addEmployee();

        expect(EmployeePage.successAlert).toBeDisplayed();
    })
})