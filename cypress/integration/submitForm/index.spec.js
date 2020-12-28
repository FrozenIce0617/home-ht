/// <reference types="cypress" />

context('Form submission', () => {
  it('submits name', () => {
    cy.visit('/');
    cy.submitName('Jack Lee');
  });

  it('submits email', () => {
    cy.visit('/');
    cy.submitName('Jack Lee');
    cy.submitEmail('email@gmail.com');
  });

  it('submits phone number', () => {
    cy.visit('/');
    cy.submitName('Jack Lee');
    cy.submitEmail('email@gmail.com');
    cy.submitPhoneNumber('+44 1234567890');
  });

  it('submits salary indicator', () => {
    cy.visit('/');
    cy.submitName('Jack Lee');
    cy.submitEmail('email@gmail.com');
    cy.submitPhoneNumber('+44 1234567890');
    cy.submitSalaryIndicator(4);
  });

  it('validates summary', () => {
    const data = {
      name: 'Jack Lee',
      email: 'email@gmail.com',
      phone: '+44 1234567890',
      salaryIndicator: '2.000 - 3.000',
    };
    cy.visit('/');
    cy.submitName(data.name);
    cy.submitEmail(data.email);
    cy.submitPhoneNumber(data.phone);
    cy.submitSalaryIndicator(4);
    cy.validateSummary(data);
  });
});
