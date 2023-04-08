
describe('Автотесты на авторизацию', function () {
    it('Верный логин, верный пароль', function () {
        cy.reload();
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click(); 
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })
 describe('Автотесты на авторизацию', function () {
    it('Восстановление пароля', function () {
        cy.reload();
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click(); 
         cy.get('#mailForgot').type('german@dolnikov.ru');
         cy.get('#restoreEmailButton').click(); 
         cy.contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })
 describe('Автотесты на авторизацию', function () {
    it('Неправильный пароль', function () {
        cy.reload();
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('Loveqastudio1');
         cy.get('#loginButton').click(); 
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })
 describe('Автотесты на авторизацию', function () {
    it('Неправильный логин', function () {
        cy.reload();
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('grman@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click(); 
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })
 describe('Автотесты на авторизацию', function () {
    it('Ошибка валидации', function () {
        cy.reload();
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('Loveqastudio1');
         cy.get('#loginButton').click(); 
         cy.contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })
 describe('Автотесты на авторизацию', function () {
    it('Приведение к строчным буквам. Баг', function () {
        cy.reload();
        cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click(); 
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })

 