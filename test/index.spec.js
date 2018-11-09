var expect = require('chai').expect;
var mock = require('mock-require');

mock('hammerjs', {
	on: function(evt) {
	}
});

describe('HGraph', function() {
	var HGraph = require('../index');

	var graph = new HGraph({
		container: null,
		userdata: {
			hoverevents: true,
			factors: null
		},
		showLabels: true,
		showHealthyRangeValues: true,
		zoomable: false,
		rotation: -90,
		features: {
			healthyRange: 'healthyRange',
			totalRange: 'totalRange'
		},
		tooltip: {},
		layersVisibleAtStartup: ['ring', 'web', 'datapoints', 'tooltips']
	});

	describe('calculateScoreFromValue', function() {

		describe('with no max', function() {
			var features = {
				healthyRange: [40, null]
			};

			it('should return perfect score if value is above min', function(done) {
				expect(graph.calculateScoreFromValue(features, 50)).to.equal(0);
				expect(graph.calculateScoreFromValue(features, 60)).to.equal(0);
				expect(graph.calculateScoreFromValue(features, 80)).to.equal(0);
				expect(graph.calculateScoreFromValue(features, 200)).to.equal(0);
				done();
			});

			it('should return half of worst down score if value is below min', function(done) {
				expect(graph.calculateScoreFromValue(features, 30)).to.equal(-50);
				expect(graph.calculateScoreFromValue(features, 0)).to.equal(-50);
				expect(graph.calculateScoreFromValue(features, -100)).to.equal(-50);
				done();
			});

			it('should return a border score if value matches min', function(done) {
				expect(graph.calculateScoreFromValue(features, 40)).to.equal(-25);
				done();
			});
		});

		describe('with no min', function() {
			var features = {
				healthyRange: [null, 200]
			};

			it('should return perfect score if value is below max', function(done) {
				expect(graph.calculateScoreFromValue(features, 50)).to.equal(0);
				expect(graph.calculateScoreFromValue(features, 60)).to.equal(0);
				expect(graph.calculateScoreFromValue(features, 0)).to.equal(0);
				expect(graph.calculateScoreFromValue(features, -100)).to.equal(0);
				done();
			});

			it('should return half of worst up score if value is above max', function(done) {
				expect(graph.calculateScoreFromValue(features, 201)).to.equal(50);
				expect(graph.calculateScoreFromValue(features, 1000)).to.equal(50);
				done();
			});

			it('should return a border score if value matches max', function(done) {
				expect(graph.calculateScoreFromValue(features, 200)).to.equal(25);
				done();
			});
		});

		describe('with min and max', function() {
			it('should return perfect score if value is between min & max, but closer to min', function(done) {
				var features = {
					healthyRange: [41, 53],
					totalRange: [0, 94]
				};

				var expectedScore = -15;

				expect(graph.calculateScoreFromValue(features, 44)).to.equal(expectedScore);
				done();
			});

			it('should return bad score if value is below min', function(done) {
				var features = {
					healthyRange: [525, 5000],
					totalRange: [0, 5000]
				};

				var expectedScore = -57.06666666666666;

				expect(graph.calculateScoreFromValue(features, 322)).to.equal(expectedScore);
				done();
			});
		});
	});
});
