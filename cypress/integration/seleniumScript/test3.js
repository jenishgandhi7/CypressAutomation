/// <reference types="Cypress" />

/// <reference types="Cypress-iframe" /> 
import 'cypress-iframe'

describe('My Test Suite', function() 
{

    it('My FirstTest case',function() {
 
       // cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        //-----------------------------------------------------------//
       
        //Radio Buttion select
        cy.get('[value="radio2"]').check().should('be.checked').and('have.value','radio2')
        //-----------------------------------------------------------//
        //Autodropdown 
        cy.get('#autocomplete').type('ind') //inputbox
        //select from dropdown
        cy.get('.ui-menu-item').each(($e1, index, $list) => {
            if($e1.text()=="India"){
                cy.wrap($e1).click()
            }
        })
        //Assert check for dropword value selection
        cy.get('#autocomplete').should('have.value','India')

        //-----------------------------------------------------------//
        //static dropdown and check value of checkbox
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')

        //-----------------------------------------------------------//

        //Checkbox && Assert with checkbox checked or uncheck and Value of Checkbox 
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        //check multiple value of checkboox
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        //-----------------------------------------------------------//

        //checking component is visible or not
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


        //-----------------------------------------------------------//
        //cypress automatically control window alert and confirm popup
        cy.get('#name').type('jenish gandhi')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>
        {
        //Mocha
        expect(str).to.equal('Hello jenish gandhi, share this practice page and share your knowledge')
        })
        //confirm popup
        cy.get('#name').type('jenish gandhi')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>
        {
        //Mocha
        expect(str).to.equal('Hello jenish gandhi, Are you sure you want to confirm?')
        })

        //-----------------------------------------------------------//


        //Handle new tab link using jQuery invoke function

        //cy.get('#opentab').invoke('removeAttr','target').click() // remove target tag using invoke
       // cy.wait(10000)
        //cy.url().should('include','rahulshettyacademy') //verify url using include
        //cy.go('back') //back to previous url

        //Handle new window link using jQuery invoke function

       // cy.get('#openwindow').invoke('removeAttr','onclick').click() // remove target tag using invoke
        //cy.go('back') //back to previous url
        
        //-----------------------------------------------------------//
        // how to find value for using nth-child cssSelectors
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
            const text=$e1.text()
            if(text.includes("Python"))
            {
         
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                 const priceText=   price.text()
                 expect(priceText).to.equal('25')
                })
            }
         
        })
        //-----------------------------------------------------------//
        // Mouse hover not allow in cypress but using jquery invoke we can show open of child
        // 
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Reload').click() // without invoke show force fuuly click on top link 

        cy.contains('Top').click({force:true}) // without invoke show force fuuly click on top link 
        cy.url().should('include','top')

        //-----------------------------------------------------------//
       //how to handlle iframe in website
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)
            
    })        
})
