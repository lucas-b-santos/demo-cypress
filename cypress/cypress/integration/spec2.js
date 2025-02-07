describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
      cy.visit('http://localhost:5000/')
      cy.log('Página carregada')
    })
    
    it('Teste 2: Verifica item na página', () => {
      cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
      cy.log('Livro encontrado')
    })
  
    it('Teste 3: Calcula Frete', () => {
      cy.get('[data-id=3]').within(() => {
        cy.get('input').type('10000-000')
        cy.contains('Calcular Frete').click().then
        cy.wait(1000) // Pausa controlada
      })
      cy.get('.swal-text').should('contain', 'O frete é: R$')
      cy.get('.swal-button').click()
    })
  
    it('Teste 4: Compra de Livro', () => {
      cy.contains('button', 'Comprar').click().then
      cy.wait(1000) // Pausa controlada
      cy.get('.swal-text').should('contain', 'Sua compra foi realizada com sucesso')
      cy.get('.swal-button').click()
    })
  })
  