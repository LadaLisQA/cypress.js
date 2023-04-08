describe('Hunting pony', function () {
    it('Оформление заказа', function () {
        cy.reload();
        cy.clearAllCookies();
         cy.visit('https://huntingpony.com/');
         cy.get('[data-index="2"] > .header__collections-controls > .header__collections-link').click();
         cy.get('[data-product-id="338935607"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.get('.add-cart-counter__btn').click();
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.header__cart').click();
         cy.get('.cart-controls > .button').click();
         cy.wait(5000);
         cy.get('#client_surname').type('Листова');
         cy.get('#client_contact_name').type('Лада');
         cy.get('#client_phone').type('89999999988');
         cy.get('#client_email').type('lada@yandex.ru');
         cy.get('[for="order_delivery_variant_id_4754130"] > .radio > span').click();
         cy.get('#shipping_address_street').type('Кустанайская');
         cy.get('#shipping_address_house').type('12');
         cy.get('[for="order_payment_gateway_id_3184571"] > .co-payment_method-input > span').click();
         cy.get('.co-input--required > .co-input-select > .co-input-field').select('Девочка');
         cy.get('#create_order').click();
         cy.contains('Спасибо за заказ!');
     })
 })