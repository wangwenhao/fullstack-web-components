/*
 * @Author: 王闻昊 wwh27791@ly.com
 * @Date: 2022-11-10 10:03:09
 * @LastEditors: 王闻昊 wwh27791@ly.com
 * @LastEditTime: 2022-11-10 10:59:34
 * @FilePath: /fullstack-web-components/cypress/integration/Card.spec.js
 * @Description: Card Component Test Case
 */
describe("CardComponent", () => {
    it("should find slots in the card", () => {
        cy.visit("iframe.html?id=components-card--image-card");
        cy.get("in-card").shadow().find('slot[name="header"]').should('exist');
        cy.get("in-card").shadow().find('slot[name="content"]').should('exist');
        cy.get("in-card").shadow().find('slot[name="footer"]').should('exist');
    });
    it("should find the card slot content in light DOM", () => {
        cy.visit("iframe.html?id=components-card--image-card");
        cy.get("#root").find('[slot="header"]').get("img").should("exist");
        cy.get("#root").find('[slot="header"]').contains("Food").should("exist");
        cy.get("#root").find('[slot="content"]').contains("Lorem ipsum").should("exist");
        cy.get("#root").find('[slot="footer"]').contains("Read").should("exist");
    })
});