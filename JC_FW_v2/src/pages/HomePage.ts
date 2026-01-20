class HomePage {
  get homepageBanner() {
    return $('body');
  }

  get loggedInAsUser() {
    return $('*=Logged in as');
  }

  async selectMenuOption(option: string) {
    await $(`=${option}`).click();
  }
}

export default new HomePage();
