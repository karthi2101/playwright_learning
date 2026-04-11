export class LoginPage {

  constructor(page) {
    this.page = page;
    this.usernameField = page.getByPlaceholder('Login');
    this.passwordField = page.locator('input[type="password"]');
    this.loginButton   = page.getByRole('button', { name: 'Login' });
    this.errorMessage  = page.getByText('Invalid username/password');
  }

  async goto() {
    await this.page.goto('https://buggy.justtestit.org/');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}