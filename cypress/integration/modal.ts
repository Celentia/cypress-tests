import { modalLocators } from 'cypress/fixtures/modal-locators';

describe('Modal content', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-automation-id="home-button"]').click();
  });

  it('should render the modal component', () => {
    cy.get(modalLocators.content).should('exist').and('be.visible');
  });

  it('should have visible header', () => {
    cy.get(modalLocators.content)
      .find(modalLocators.header)
      .should('exist')
      .and('be.visible');
  });

  it('should have correct title', () => {
    cy.get(modalLocators.content)
      .find(modalLocators.title)
      .should('have.text', 'Info Modal');
  });

  it('should close modal after click on close button', () => {
    cy.get(modalLocators.content).should('exist').and('be.visible');
    cy.get(modalLocators.content).find(modalLocators.closeButton).click();
    cy.get(modalLocators.content).should('not.be.visible');
  });
});
