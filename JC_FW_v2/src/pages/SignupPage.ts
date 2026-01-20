class SignupPage {
  enterName(name: string) {
    return $('#name').setValue(name);
  }

  enterEmail(email: string) {
    return $('#email').setValue(email);
  }

  submitSignup() {
    return $('button[type="submit"]').click();
  }

  sectionHeader(title: string) {
    return $(`h2=${title}`);
  }
}

export default new SignupPage();
