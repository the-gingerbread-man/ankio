const request = require('supertest');
const app = require('../');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;
const { expect, assert } = require('chai');

describe('HTTP Server', function() {
	describe('/', function() {
		describe('GET', function() {
			it('index.html', function(done) {
				request(HOST)
					.get('/')
					.expect(200)
					.expect('Content-Type', /text\/html/, done);
			});
			it('app.js', function(done) {
				request(HOST)
					.get('./app.js')
					.expect(200)
					.expect('Content-Type', /application\/javascript/, done);
			});
			xit('styles.css', function(done) {
				request(HOST)
					.get('./styles.css')
					.expect(200)
					.expect('Content-Type', /text\/css/, done);
			});
		});
	});
	describe('Angular', function() {
		xit('loginController', function(done) {
			request(HOST)
				.get('./controllers/loginController.js')
				.expect(200)
				.expect('Content-Type', /application\/javascript/, done);
		});
		xit('createController', function(done) {
			request(HOST)
				.get('./controllers/createController.js')
				.expect(200)
				.expect('Content-Type', /application\/javascript/, done);
		});
		xit('contentController', function(done) {
			request(HOST)
				.get('./controllers/contentController.js')
				.expect(200)
				.expect('Content-Type', /application\/javascript/, done);
		});
		xit('mainController', function(done) {
			request(HOST)
				.get('./controllers/mainController.js')
				.expect(200)
				.expect('Content-Type', /application\/javascript/, done);
		});
		xit('testController', function(done) {
			request(HOST)
				.get('./controllers/testController.js')
				.expect(200)
				.expect('Content-Type', /application\/javascript/, done);
		});
		xit('deckFactory', function(done) {
			request(HOST)
				.get('./factories/deckFactory.js')
				.expect(200)
				.expect('Content-Type', /application\/javascript/, done);
		});
		xit('userFactory', function(done) {
			request(HOST)
				.get('./factories/userFactory.js')
				.expect(200)
				.expect('Content-Type', /application\/javascript/, done);
		});		
	});
});