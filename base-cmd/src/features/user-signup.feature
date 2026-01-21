Feature: User Registration

    Background:
        Given I am on the homepage
        When I clic on the "Signup / Login" button
        And I enter "Pablo" as name and "example1@mail.com" as email
        And I clic on the "Signup" button
        Then the signup page is loaded
        

    Scenario: User Registration
        Given I am on the Signup page
        And I fill in the required fields
            | field | value |
            | password | 1235Qa |
            | firstName | Pablo |
            | lastName  | Vasquez |
            | address | Calle 123 |
            | country | United States |
            | state | Florida |
            | city | Miami |
            | zipcode | 10001 |
            | mobile | 3001231452 |
        When I clic on the "Create Account" button
        Then that "ACCOUNT CREATED!" message is visible
        




