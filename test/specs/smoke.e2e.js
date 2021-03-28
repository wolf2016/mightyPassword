const PasswordPage = require('./../pageobjects/password.page');

describe('Smoke Test', () => {
  it('should load with all elements on the page', () => {
    PasswordPage.open();

    expect(browser).toHaveTitle('Mighty Strong Password Checker');

    expect(PasswordPage.adminLabel).toBeVisible();
    expect(PasswordPage.adminLabel).toHaveText('Check the box if you are an admin');

    expect(PasswordPage.adminCkbox).toBeVisible();
    expect(PasswordPage.adminCkbox).not.toBeChecked();

    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');

    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('');

    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();
  });
});