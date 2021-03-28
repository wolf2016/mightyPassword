const PasswordPage = require('./../pageobjects/password.page');

describe('Password Strength Check for regular users', () => {
  it('should say password123 is strong', () => {
    PasswordPage.open();

    PasswordPage.checkPassword('password123');

    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();
    expect(PasswordPage.adminLabel).toBeVisible();
    expect(PasswordPage.adminLabel).toHaveText('Check the box if you are an admin');
    expect(PasswordPage.adminCkbox).toBeVisible();
    expect(PasswordPage.adminCkbox).not.toBeChecked();

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('password123');

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is acceptable!');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('weak-pw');
  });
  it('should show 12345 is weak and why', () => {
    PasswordPage.open();

    PasswordPage.checkPassword('12345');
    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();
    expect(PasswordPage.adminLabel).toBeVisible();
    expect(PasswordPage.adminLabel).toHaveText('Check the box if you are an admin');
    expect(PasswordPage.adminCkbox).toBeVisible();
    expect(PasswordPage.adminCkbox).not.toBeChecked();

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('12345');

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is not acceptable' +
      ' because it does not contain any letters and it is not the minimum length');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('weak-pw');
  });
  it('should show & is weak and why', () => {
    PasswordPage.open();

    PasswordPage.checkPassword('&');
    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();
    expect(PasswordPage.adminLabel).toBeVisible();
    expect(PasswordPage.adminLabel).toHaveText('Check the box if you are an admin');
    expect(PasswordPage.adminCkbox).toBeVisible();
    expect(PasswordPage.adminCkbox).not.toBeChecked();

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('&');

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is not acceptable' +
      ' because it does not contain any numbers, it does not contain any letters,' +
      ' it is not the minimum length');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('weak-pw');
  });
  it('should show abcdefgh is weak and why', () => {
    PasswordPage.open();

    PasswordPage.checkPassword('abcdefgh');
    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();
    expect(PasswordPage.adminLabel).toBeVisible();
    expect(PasswordPage.adminLabel).toHaveText('Check the box if you are an admin');
    expect(PasswordPage.adminCkbox).toBeVisible();
    expect(PasswordPage.adminCkbox).not.toBeChecked();

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('abcdefgh');

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is not acceptable' +
      ' because it does not contain any numbers and it is not the minimum length');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('weak-pw');
  });
});