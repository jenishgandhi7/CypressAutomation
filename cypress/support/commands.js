// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//
//
// -- This is a dual command --
 Cypress.Commands.add("AddToCartProduct", (product_Name) => { 

    cy.get('app-card-list').find('app-card').each(($e1, index, $list)=>{

        const productName = $e1.find('.card-title a').text()
        if(productName.includes(product_Name))
        {
            cy.wrap($e1).find('button').click()
    
        }
    })
 })


 Cypress.Commands.add("Auto_DropDown", (country) => { 


 cy.get('#country').type(country) //inputbox
 //select from dropdown
 cy.wait(10000)
 cy.get('.suggestions > ul > li > a').each(($e1, index, $list) => {
     if($e1.text().includes(country)){
         //$e1.click()
       cy.wrap($e1).click()
     }
 })
})
