it('Direct to kitabisa.com homepage',() => {
       cy.visit('https://kitabisa.com')
        cy.get('.style__LargeListFigure-sc-__kwu31b-1').click()
        cy.get('.campaign-detail_button_donasi-sekarang').click()
        cy.get('.style__DonationAmountOption-tuwc7v-13').click()
        cy.get('.style__InfoWrapper-tuwc7v-17 > span').should('have.text', 'Transfer BCA')
        cy.get('#fullname').type('Hamdatun')
        cy.get('#username').type('hamdatunnupus@gmail.com')
        cy.get('.button-lanjut-pembayaran').click()
        cy.get('.style__ArrowImg-sc-1qhccvk-3').click()
   }
)
