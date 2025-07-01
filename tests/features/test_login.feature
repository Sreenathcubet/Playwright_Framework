Feature: Login functionality

  Scenario: User can login with valid credentials
    Given I am on the home page
    When I click on "Login"
    And I fill "UserName" with "admin"
    And I fill "Password" with "password"
    And I click on "Log in"
    Then I should see the title containing "Home - Execute Automation Employee App"

  Scenario: User cannot login with invalid credentials
    Given I am on the home page
    When I click on "Login"
    And I fill "UserName" with "wronguser"
    And I fill "Password" with "wrongpass"
    And I click on "Log in"
    Then I should see the text "Invalid login attempt."