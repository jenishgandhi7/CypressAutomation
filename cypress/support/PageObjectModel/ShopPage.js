class ShopPage{

    getShopCartBtn(){
        return cy.contains("Checkout")
    }

    getCheckoutBtn(){
        return cy.get(".btn-success")
    }
    
    getPirces_product(){
        return cy.get("tr td:nth-child(4) > strong")
    }

    getTotalPrice(){
        return cy.get("h3 strong")
    }

    getCheckboxButton(){
        return cy.get('input[type="checkbox"]')

    }
    
    getCheckout_Submitt_btn(){
        return cy.get('input[type="submit"]')

    }

    getSucessMsg(){
        return cy.get('.alert')

    }
    
    
}


export default ShopPage