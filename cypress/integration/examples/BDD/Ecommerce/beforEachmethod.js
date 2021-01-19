beforeEach(function () {
    cy.fixture("example").then(function(data){
        this.data=data //using this keyword allow to acces to whole class
      }) 

})