/// <reference types="Cypress" />

import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../../support/PageObjectModel/HomePage'
import ShopPage from '../../../../support/PageObjectModel/ShopPage'

const homePage = new HomePage()
const shopPage = new ShopPage()
Given('I open Ecommerce page',() => {
     cy.visit(Cypress.env('url')+"/angularpractice/")
})

When('i add products into cart',function(){
    homePage.getShopLink().click()

    //using parameterize multiple data array
    this.data.products.forEach(element => {
      cy.AddToCartProduct(element)      
    });

    shopPage.getShopCartBtn().click() 

})

When('I filling the form details', function(dataTable){

  homePage.getNameBox().type(dataTable.rawTable[1][0])
  homePage.getEmailBox().type(dataTable.rawTable[1][1])
  homePage.getPasswordBox().type('123456')
  homePage.getCheckboxButton().check().should("be.checked")
  homePage.getGender().select(dataTable.rawTable[1][2]).should("have.value",dataTable.rawTable[1][2])
  homePage.getRadiobution1().check().should("be.checked")
  homePage.getBirthdate().type('1992-07-03')
})


And('Validate the total price and Checkout process',()=>{
    var sum = 0
    cy.get("tr td:nth-child(4) > strong").each(($e1,index,$list)=>{
      const produt_price=$e1.text()
      var res = produt_price.split(" ")
      res= res[1].trim()
       sum=Number(sum)+Number(res)

    }).then(function () {
      cy.log(sum)

        })

    cy.get('h3 strong').then(function (element) {

      const total_amount=element.text()
      var res = total_amount.split(" ")
      var total = res[1].trim()
      expect(Number(total)).to.equal(sum)
    })


    shopPage.getCheckoutBtn().click() 
})

Then('Select the country and Submit and verfiy Thank you',function () {
    cy.Auto_DropDown(this.data.delivery_location)      
    shopPage.getCheckboxButton().check({force: true}).should("be.checked")
    shopPage.getCheckout_Submitt_btn().click() 
    //shopPage.getSucessMsg().should("have.text","Success! Thank you! Your order will be delivered in next few weeks :-).")
    
    shopPage.getSucessMsg().then(function(element) {
    const actualText=element.text()
    expect(actualText.includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
    })    
})

Then('Submit and Validating form behaviour',function () {
  homePage.getNameBox().should('have.attr','minlength','2')
  homePage.getEnterpreneaur_Radiobution3().should("be.disabled")
  homePage.getTwoWayDataBinding().should('have.value',this.data.name)
  homePage.getFormBtn().click()
  homePage.getSucessMsg().then(function(element) {
  const actualText=element.text()
  expect(actualText.includes('The Form has been submitted successfully!.')).to.be.true
  })
})

And('Navigate to Shop Page',()=>{
  
  homePage.getShopLink().click()

})
