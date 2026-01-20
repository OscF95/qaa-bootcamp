Feature: Register User

  Background:
    Given the user "automation" launches the browser
    And the user "automation" navigates to the "https://automationexercise.com/" page
    And the homepage is displayed successfully
    And the user "automation" selects the "Signup / Login" option


  Scenario: Register a new user successfully

    Given the "New User Signup!" option is displayed successfully
      And the user "automation" enters name and email address
        | name  | TestUser             |
        | email | testuser@example.com |
      And the "ENTER ACCOUNT INFORMATION" section is displayed successfully
      And the user "automation" completes the account information form

    When the user "automation" creates the account

    Then the "ACCOUNT CREATED!" message is displayed successfully


  Scenario: Delete account after successful login

    Given the user "automation" has created an account successfully
      And the user "automation" selects the "Continue" option
      And the user "automation" is logged in successfully

    When the user "automation" selects the "Delete Account" option

    Then the "ACCOUNT DELETED!" message is displayed successfully
      And the "Continue" option is displayed successfully
