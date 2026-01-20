class AccountPage {
  get logoutButton() {
    return $('=Logout');
  }

  get accountCreatedMessage() {
    return $('*=Account Created');
  }

  systemMessage(message: string) {
    return $(`*=${message}`);
  }

  option(option: string) {
    return $(`=${option}`);
  }

  async createAccount() {
    await $('button=Create Account').click();
  }

  async selectAction(action: string) {
    await $(`=${action}`).click();
  }

  async completeAccountInformation() {
    await $('input[name="password"]').setValue('Test123!');
  }
}

export default new AccountPage();
