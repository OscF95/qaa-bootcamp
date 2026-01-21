Feature: User Registration and Account Management
  As a new user
  the user wants to register an account and manage it
  So that the user can verify the registration and deletion process

  Scenario: Register a new user and delete the account
    Given the user navigates to automationexercise website
    And the user verifies that home page is visible successfully
    And the user clicks on 'Signup / Login' button
    And the user verifies 'New User Signup!' is visible
    And the user enter name and email address
    And the user clicks 'Signup' button
    And the user verifies that 'ENTER ACCOUNT INFORMATION' is visible
    And the user fills details: Title, Name, Email, Password, Date of birth
    And the user select checkbox 'Sign up for our newsletter!'
    And the user select checkbox 'Receive special offers from our partners!'
    And the user fills details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    And the user clicks 'Create Account' button
    And the user verifies that 'ACCOUNT CREATED!' is visible
    And the user clicks 'Continue' button
    And the user verifies that 'Logged in as username' is visible
    When the user clicks 'Delete Account' button
    Then the user verifies that 'ACCOUNT DELETED!' is visible
    And the user clicks 'Continue' button

