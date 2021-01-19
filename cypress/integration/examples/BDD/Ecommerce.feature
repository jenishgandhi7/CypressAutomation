Feature: End to end Ecommerce fllow Validation

    Application Regration testing
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When i add products into cart
    And Validate the total price and Checkout process
    Then Select the country and Submit and verfiy Thank you 


    @Smoke
    Scenario: Filing Register form
    Given I open Ecommerce page
    When I filling the form details
        |name | email | gender |
        |Jenish Gandhi|jenish.gandhi@gmail.com|Male|
    Then Submit and Validating form behaviour 
    And Navigate to Shop Page   
