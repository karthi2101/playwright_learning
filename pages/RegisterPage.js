export class RegisterPage {

  constructor(page) {
    this.page = page;
    this.firstNameField = page.getByLabel('First Name');
    this.lastNameField = page.getByLabel('Last Name');
    this.usernameField = page.getByLabel('Login');
    this.passwordField = page.getByLabel('Password', { exact: true });
    this.confirmPasswordField = page.getByLabel('Confirm Password');
    this.registerButton   = page.getByRole('button', { name: 'Register' });
  }

async goto() {
  await this.page.goto('https://buggy.justtestit.org/register');
}

  async Register(firstNme, Lastname, username, password) {
    await this.usernameField.fill(username);
    await this.firstNameField.fill(firstNme);
    await this.lastNameField.fill(Lastname);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(password);
    await this.registerButton.click();
  }
}