describe('Verify Amazon Home Page', () => {
	beforeEach(() => {});

	it('Verify user vist homepage succefully', () => {
		cy.visit('https://www.amazon.com');
		cy.contains('span', 'Hello, sign in').click();
		cy.get('a#createAccountSubmit').click();
		cy.get('input#ap_customer_name').type('Test User');
	});
});
