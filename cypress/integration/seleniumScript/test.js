/// <reference types="Cypress" />

describe('My First Test Suit', function(){
    it('My FirstTest Case', function(){
       // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
       cy.visit(Cypress.env('url')+"/seleniumPractise/")

        cy.get('.brand').should('have.text','GREENKART')

        cy.get('.brand').then(function(logo_Ele)
        {
            cy.log(logo_Ele.text())
        })

        cy.get(".search-keyword").type("BR")
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',2)
        cy.get('.products').find('.product').should('have.length',2)
        //cy.get('.products').find('.product').eq(1).contains("ADD TO CART").click()
        
        cy.get('.products').find('.product').each(($e1, index, $list)=>{

            const productName = $e1.find('h4.product-name').text()
            if(productName.includes('Brinjal'))
            {
                cy.wrap($e1).find('button').click()

               // $e1.find('button').click()
            }
        })
        
        cy.get('.cart-icon > img').click()
        //cy.get('.cart-preview > .action-block > button').click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains("Place Order").click() 

        cy.get('select').select('India').should('have.value','India')

        cy.get('.chkAgree').check().should('be.checked')

        cy.get('button').click()

    
    
    
    }
    )

})