var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _360DEGREE = 360;
var MONTHS = ['1 month', '2 month', '3 month', '4 month', '5 month', '6 month', '7 month', '8 month', '9 month', '10 month', '11 month', '12 month'];
var WEEKS = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7'];
var DAYS = ['1 day', '2 day', '3 day', '4 day', '5 day', '6 day', '7 day', '8 day', '9 day', '10 day', '11 day', '12 day', '13 day', '14 day', '15 day', '16 day', '17 day', '18 day', '19 day', '20 day', '21 day', '22 day', '23 day', '24 day', '25 day', '26 day', '27 day', '28 day', '29 day', '30 day', '31 day'];
var HOURS = ['1 hr', '2 hr', '3 hr', '4 hr', '5 hr', '6 hr', '7 hr', '8 hr', '9 hr', '10 hr', '11 hr', '12 hr', '13 hr', '14 hr', '15 hr', '16 hr', '17 hr', '18 hr', '19 hr', '20 hr', '21 hr', '22 hr', '23 hr', '24 hr'];
var MINS = ['1 min', '2 min', '3 min', '4 min', '5 min', '6 min', '7 min', '8 min', '9 min', '10 min', '11 min', '12 min', '13 min', '14 min', '15 min', '16 min', '17 min', '18 min', '19 min', '20 min', '21 min', '22 min', '23 min', '24 min', '25 min', '26 min', '27 min', '28 min', '29 min', '30 min', '31 min', '32 min', '33 min', '34 min', '35 min', '36 min', '37 min', '38 min', '39 min', '40 min', '41 min', '42 min', '43 min', '44 min', '45 min', '46 min', '47 min', '48 min', '49 min', '50 min', '51 min', '52 min', '53 min', '54 min', '55 min', '56 min', '57 min', '58 min', '59 min', '60 min'];
var SECS = ['1 sec', '2 sec', '3 sec', '4 sec', '5 sec', '6 sec', '7 sec', '8 sec', '9 sec', '10 sec', '11 sec', '12 sec', '13 sec', '14 sec', '15 sec', '16 sec', '17 sec', '18 sec', '19 sec', '20 sec', '21 sec', '22 sec', '23 sec', '24 sec', '25 sec', '26 sec', '27 sec', '28 sec', '29 sec', '30 sec', '31 sec', '32 sec', '33 sec', '34 sec', '35 sec', '36 sec', '37 sec', '38 sec', '39 sec', '40 sec', '41 sec', '42 sec', '43 sec', '44 sec', '45 sec', '46 sec', '47 sec', '48 sec', '49 sec', '50 sec', '51 sec', '52 sec', '53 sec', '54 sec', '55 sec', '56 sec', '57 sec', '58 sec', '59 sec', '60 sec'];

var Plate = function (_React$Component) {
	_inherits(Plate, _React$Component);

	function Plate() {
		_classCallCheck(this, Plate);

		return _possibleConstructorReturn(this, (Plate.__proto__ || Object.getPrototypeOf(Plate)).apply(this, arguments));
	}

	_createClass(Plate, [{
		key: 'render',
		value: function render() {
			var array = this.props.array;

			if (array.length === 7) {
				//WEEKS

				for (var i = 1; i <= 11; i++) {
					array.push('');
				} //for circle purpose
			} else if (array.length % 2 != 0) {
				array.push('');
			} //for symmetry purpose

			var size = this.props.size;

			var points = [];

			var halfLen = array.length / 2;
			var rotateDegree = _360DEGREE / array.length;

			var rotate = 0;

			//push 0:  add rooter class for show current time
			points.push(React.createElement(
				'div',
				{
					key: 0,
					style: { transform: "translate(-50%, -50%) rotate(" + rotate + "deg)",
						width: size + "px" },
					className: 'points' },
				React.createElement(
					'p',
					{ className: 'points__point point-right rooter', key: array[0] + ' ' + 0 },
					array[0]
				),
				React.createElement(
					'p',
					{ className: 'points__point point-left', key: array[halfLen] },
					array[halfLen]
				)
			));
			rotate += rotateDegree;

			for (var _i = 1; _i < halfLen; _i++) {

				points.push(React.createElement(
					'div',
					{
						key: _i,
						style: { transform: "translate(-50%, -50%) rotate(" + rotate + "deg)",
							width: size + "px" },
						className: 'points' },
					React.createElement(
						'p',
						{ className: 'points__point point-right', key: array[_i] + ' ' + _i },
						array[_i]
					),
					React.createElement(
						'p',
						{ className: 'points__point point-left', key: array[_i + halfLen] },
						array[_i + halfLen]
					)
				));

				rotate += rotateDegree;
			}

			return React.createElement(
				'div',
				{ className: 'plateWrp' },
				React.createElement(
					'div',
					{
						className: 'plate',
						style: { width: size + "px",
							height: size + "px" } },
					points
				)
			);
		}
	}]);

	return Plate;
}(React.Component);

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(Plate, { array: MONTHS, size: 170 }),
				React.createElement(Plate, { array: WEEKS, size: 330 }),
				React.createElement(Plate, { array: DAYS, size: 460 }),
				React.createElement(Plate, { array: HOURS, size: 560 }),
				React.createElement(Plate, { array: MINS, size: 680 }),
				React.createElement(Plate, { array: SECS, size: 800 })
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
