const app = require('./../server/server.js');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;
const request = require('supertest')(HOST);
const { expect, assert } = require('chai');

describe('HTTP Server', function() {
	describe('/', function() {
		describe('GET', function() {
			it('index.html', function(done) {
				request
					.get('/')
					.expect(200)
					.end((err, res) => {
						console.log("Res.bdy: ", res.body);
						done();
					});
					// .expect('Content-Type', /text\/html/, done);
			});
			it('no extraneous', function(done) {
				request
					.get('/not-a-route')
					.expect(404)
					.expect('Content-Type', /text\/html/, done);
			});
			it('app.js', function(done) {
				request
					.get('/app.js')
					.expect(200)
					.expect('Content-Type', /application\/javascript/, done);
			});
			it('styles.css', function(done) {
				request
					.get('/styles.css')
					.expect(200)
					.expect('Content-Type', /text\/css/, done);
			});

			describe('Angular', function() {
				it('loginController', function(done) {
					request
						.get('/controllers/loginController.js')
						.expect(200)
						.expect('Content-Type', /application\/javascript/, done);
				});
				it('createController', function(done) {
					request
						.get('/controllers/createController.js')
						.expect(200)
						.expect('Content-Type', /application\/javascript/, done);
				});
				it('contentController', function(done) {
					request
						.get('/controllers/contentController.js')
						.expect(200)
						.expect('Content-Type', /application\/javascript/, done);
				});
				it('mainController', function(done) {
					request
						.get('/controllers/mainController.js')
						.expect(200)
						.expect('Content-Type', /application\/javascript/, done);
				});
				it('testController', function(done) {
					request
						.get('/controllers/testController.js')
						.expect(200)
						.expect('Content-Type', /application\/javascript/, done);
				});
				it('deckFactory', function(done) {
					request
						.get('/factories/deckFactory.js')
						.expect(200)
						.expect('Content-Type', /application\/javascript/, done);
				});
				it('userFactory', function(done) {
					request
						.get('/factories/userFactory.js')
						.expect(200)
						.expect('Content-Type', /application\/javascript/, done)
				});		
			});
		});
	});

	describe('/users', function() {
		it('Verifies User Auth', function(done) {
			request
				.get('/user')
				.expect(200)
				// .expect('Content-Type', /application\/json/, done);
				.end(function(err, res) {
					console.log("Res.body: ", res.body);
					expect(res.headers['x-powered-by']).to.equal('Express');
					done();
				});
		});
	});
});