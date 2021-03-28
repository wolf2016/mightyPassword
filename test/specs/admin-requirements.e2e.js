const PasswordPage = require('./../pageobjects/password.page');

describe('Password Strength Check for admin users', () => {
  it('should say password1234! is strong', () => {
    PasswordPage.open();
    PasswordPage.checkAdminPassword('password1234!');

    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();
    expect(PasswordPage.adminLabel).toBeVisible();
    expect(PasswordPage.adminLabel).toHaveText('Check the box if you are an admin');

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('password1234!');
    expect(PasswordPage.adminCkbox).toBeVisible();
    expect(PasswordPage.adminCkbox).toBeChecked();

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is acceptable!');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('weak-pw');
  });
  it('should show password123 is weak and why', () => {
    PasswordPage.open();

    PasswordPage.checkAdminPassword('password123');
    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();
    expect(PasswordPage.adminLabel).toBeVisible();
    expect(PasswordPage.adminLabel).toHaveText('Check the box if you are an admin');

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('password123');
    expect(PasswordPage.adminCkbox).toBeVisible();
    expect(PasswordPage.adminCkbox).toBeChecked();

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is not acceptable' +
      ' because it does not contain any special characters and it is not the minimum length');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('weak-pw');
  });
  it('should show 123456789101112 is weak and why', () => {
    PasswordPage.open();

    PasswordPage.checkAdminPassword('123456789101112');
    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();
    expect(PasswordPage.adminLabel).toBeVisible();
    expect(PasswordPage.adminLabel).toHaveText('Check the box if you are an admin');

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('123456789101112');
    expect(PasswordPage.adminCkbox).toBeVisible();
    expect(PasswordPage.adminCkbox).toBeChecked();

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is not acceptable' +
      ' because it does not contain any letters and it does not contain any special characters');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('weak-pw');
  });
  it('should show & is weak and why', () => {
    PasswordPage.open();

    PasswordPage.checkAdminPassword('&');
    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();
    expect(PasswordPage.adminLabel).toBeVisible();
    expect(PasswordPage.adminLabel).toHaveText('Check the box if you are an admin');

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('&');
    expect(PasswordPage.adminCkbox).toBeVisible();
    expect(PasswordPage.adminCkbox).toBeChecked();

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is not acceptable' +
      ' because it does not contain any numbers, it does not contain any letters,' +
      ' it is not the minimum length');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('weak-pw');
  });
  it('should show abcdefghijklm is weak and why', () => {
    PasswordPage.open();

    PasswordPage.checkAdminPassword('abcdefghijklm');
    //verify objects that should be static on the page haven't changed
    expect(browser).toHaveTitle('Mighty Strong Password Checker')
    expect(PasswordPage.passwordLabel).toBeVisible();
    expect(PasswordPage.passwordLabel).toHaveText('Enter Password:');
    expect(PasswordPage.submitBtn).toBeVisible();
    expect(PasswordPage.submitBtn).toHaveValue('Check Password');
    expect(PasswordPage.submitBtn).toBeClickable();
    expect(PasswordPage.adminLabel).toBeVisible();
    expect(PasswordPage.adminLabel).toHaveText('Check the box if you are an admin');

    //verify the value is still what was entered.
    expect(PasswordPage.passwordInput).toBeVisible();
    expect(PasswordPage.passwordInput).toHaveValue('abcdefghijklm');
    expect(PasswordPage.adminCkbox).toBeVisible();
    expect(PasswordPage.adminCkbox).toBeChecked();

    //verify the feedback is correctly displayed
    expect(PasswordPage.feedback).toHaveText('The password entered is not acceptable' +
      ' because it does not contain any numbers and it does not contain any special characters');
    expect(PasswordPage.feedbackContainer).not.toHaveElementClass('strong-pw');
    expect(PasswordPage.feedbackContainer).toHaveElementClass('weak-pw');
  });
});