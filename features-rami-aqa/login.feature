Feature: User Registration and Account Management
  As a new user
  I want to register an account and manage it
  So that I can verify the registration and deletion process

  Scenario: Register a new user and delete the account
    Given I launch the browser
    And I navigate to url 'http://automationexercise.com'
    And I verify that home page is visible successfully
    And I click on 'Signup / Login' button
    And I verify 'New User Signup!' is visible
    And I enter name and email address
    And I click 'Signup' button
    And I verify that 'ENTER ACCOUNT INFORMATION' is visible
    And I fill details: Title, Name, Email, Password, Date of birth
    And I select checkbox 'Sign up for our newsletter!'
    And I select checkbox 'Receive special offers from our partners!'
    And I fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    And I click 'Create Account' button
    And I verify that 'ACCOUNT CREATED!' is visible
    And I click 'Continue' button
    And I verify that 'Logged in as username' is visible
    When I click 'Delete Account' button
    Then I verify that 'ACCOUNT DELETED!' is visible
    And I click 'Continue' button

