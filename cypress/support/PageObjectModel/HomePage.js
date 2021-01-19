class HomePage{

    getNameBox(){
        return cy.get('form input[name="name"]')
    }

    getEmailBox(){
        return cy.get('form input[name="email"]')
    }

    getPasswordBox(){
        return cy.get('#exampleInputPassword1')
    }

     
    getCheckboxButton(){
        return cy.get('#exampleCheck1')

    }
    
    getRadiobution1(){
        return  cy.get('#inlineRadio1')

    }
    getRadiobution2(){
        return  cy.get('#inlineRadio2')

    }
    getEnterpreneaur_Radiobution3(){
        return  cy.get('#inlineRadio3')

    }
    getTwoWayDataBinding(){
        return  cy.get('.ng-untouched')

    }
    getBirthdate(){
        return  cy.get('form input[name="bday"]')
     }

     getFormBtn(){
        return  cy.get('input[type="submit"]')
     }
     getShopLink(){
         return  cy.get(':nth-child(2) > .nav-link')
     }
    getGender(){
        return cy.get('select')
    }

    getSucessMsg(){
        return cy.get('.alert')

    }

}

export default HomePage