const PasswordPage = require('./../pageobjects/password.page');

describe('Password Strength Check', () => {
  it('should say the password is strong', () => {
    PasswordPage.open();

    PasswordPage.checkPassword('password123');

    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('password123');

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is acceptable!');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('weak-pw');
  });
  it('should show the password is weak', () => {
    PasswordPage.open();

    PasswordPage.checkPassword('12345');
    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('12345');

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is not acceptable!');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('weak-pw');
  });
});