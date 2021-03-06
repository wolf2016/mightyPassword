/**
 * page containing specific selectors and methods
 */
class PasswordPage {
  /**
   * define selectors using getter methods
   */
  get adminLabel() {
    return $('//label[@for="isAdmin"]');
  }
  get adminCkbox() {
    return $('//*[@id="isAdmin"]');
  }
  get passwordLabel() {
    return $('//label[@for="pw"]');
  }
  get passwordInput() {
    return $('//*[@id="pw"]');
  }
  get submitBtn() {
    return $('//*[@id="submit"]');
  }
  get feedback() {
    return $('//*[@id="feedback"]');
  }
  get feedbackContainer() {
    return $('//*[@id="fDiv"]');
  }
  /**
   * this will submit the password to the password checker
   */
  checkPassword(password) {
    this.passwordInput.setValue(password);
    this.submitBtn.click();
  }
  checkAdminPassword(password) {
    this.adminCkbox.click();
    this.passwordInput.setValue(password);
    this.submitBtn.click();
  }
  /**
   * Opens the main page !
   */
  open() {
    return browser.url(`http://localhost:8080/src/index.html`);
  }
}

module.exports = new PasswordPage();