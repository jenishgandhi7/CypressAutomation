/// <reference types="Cypress" />
// for import pageobject pages
import HomePage from '../../support/PageObjectModel/HomePage'
import ShopPage from '../../support/PageObjectModel/ShopPage'


describe('My First Test Suit', function(){

    before(() => {
        // runs once before all tests in the block
        //for call data file from fixture
        cy.fixture("example").then(function (data){
          this.data=data //using this keyword allow to acces to whole class
        }) 

      })

    it('My testcase',function () {
    const homePage = new HomePage()
    const shopPage = new ShopPage()

    cy.visit(Cypress.env('url')+"/angularpractice/")
   homePage.getNameBox().type(this.data.name)
   homePage.getNameBox().should('have.attr','minlength','2')
   homePage.getEmailBox().type(this.data.email)
   homePage.getPasswordBox().type('123456')
   homePage.getCheckboxButton().check().should("be.checked")
   homePage.getGender().select(this.data.gender).should("have.value","Male")
   homePage.getRadiobution1().check().should("be.checked")
   homePage.getEnterpreneaur_Radiobution3().should("be.disabled")
   homePage.getTwoWayDataBinding().should('have.value',this.data.name)
   homePage.getBirthdate().type('1992-07-03')
   homePage.getFormBtn().click()
   homePage.getShopLink().click()

    //using parameterize multiple data array
    this.data.products.forEach(element => {
      cy.AddToCartProduct(element)      
    });

    shopPage.getShopCartBtn().click() 
    
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
    cy.Auto_DropDown(this.data.delivery_location)      
    shopPage.getCheckboxButton().check({force: true}).should("be.checked")
    shopPage.getCheckout_Submitt_btn().click() 
    //shopPage.getSucessMsg().should("have.text","Success! Thank you! Your order will be delivered in next few weeks :-).")
    
    shopPage.getSucessMsg().then(function(element) {
      const actualText=element.text()
      expect(actualText.includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
      
    })


    })

})
