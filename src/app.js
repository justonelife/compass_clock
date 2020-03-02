const _360DEGREE = 360;
const MONTHS = ['1 month', '2 month', '3 month', '4 month', '5 month', '6 month',
				'7 month', '8 month', '9 month', '10 month', '11 month', '12 month'];
const WEEKS = ['week 1', 'week 2', 'week 3', 'week 4',
			   'week 5', 'week 6', 'week 7'];
const DAYS = ['1 day', '2 day', '3 day', '4 day', '5 day', '6 day', '7 day', '8 day',
			  '9 day', '10 day', '11 day', '12 day', '13 day', '14 day', '15 day', '16 day',
			  '17 day', '18 day', '19 day', '20 day', '21 day', '22 day', '23 day', '24 day',
			  '25 day', '26 day', '27 day', '28 day', '29 day', '30 day', '31 day'];
const HOURS = ['1 hr', '2 hr', '3 hr', '4 hr', '5 hr', '6 hr',
			   '7 hr', '8 hr', '9 hr', '10 hr', '11 hr', '12 hr',
			   '13 hr', '14 hr', '15 hr', '16 hr', '17 hr', '18 hr',
			   '19 hr', '20 hr', '21 hr', '22 hr', '23 hr', '24 hr'];
const MINS = ['1 min', '2 min', '3 min', '4 min', '5 min', '6 min',
			  '7 min', '8 min', '9 min', '10 min', '11 min', '12 min',
			  '13 min', '14 min', '15 min', '16 min', '17 min', '18 min',
			  '19 min', '20 min', '21 min', '22 min', '23 min', '24 min',
			  '25 min', '26 min', '27 min', '28 min', '29 min', '30 min',
			  '31 min', '32 min', '33 min', '34 min', '35 min', '36 min',
			  '37 min', '38 min', '39 min', '40 min', '41 min', '42 min',
			  '43 min', '44 min', '45 min', '46 min', '47 min', '48 min',
			  '49 min', '50 min', '51 min', '52 min', '53 min', '54 min',
			  '55 min', '56 min', '57 min', '58 min', '59 min', '60 min',];
const SECS = ['1 sec', '2 sec', '3 sec', '4 sec', '5 sec', '6 sec',
			  '7 sec', '8 sec', '9 sec', '10 sec', '11 sec', '12 sec',
			  '13 sec', '14 sec', '15 sec', '16 sec', '17 sec', '18 sec',
			  '19 sec', '20 sec', '21 sec', '22 sec', '23 sec', '24 sec',
			  '25 sec', '26 sec', '27 sec', '28 sec', '29 sec', '30 sec',
			  '31 sec', '32 sec', '33 sec', '34 sec', '35 sec', '36 sec',
			  '37 sec', '38 sec', '39 sec', '40 sec', '41 sec', '42 sec',
			  '43 sec', '44 sec', '45 sec', '46 sec', '47 sec', '48 sec',
			  '49 sec', '50 sec', '51 sec', '52 sec', '53 sec', '54 sec',
			  '55 sec', '56 sec', '57 sec', '58 sec', '59 sec', '60 sec',];

class Plate extends React.Component {
	render() {
		const array = this.props.array;


		if (array.length === 7) {//WEEKS
			
			for (let i = 1; i <= 11; i++) array.push('');//for circle purpose

		}
		else if (array.length % 2 != 0) {
			array.push('');
		}//for symmetry purpose

		const size = this.props.size;


		let points = [];

		let halfLen = array.length / 2;
		let rotateDegree = _360DEGREE / array.length;

		let rotate = array.length === 12 ? 
			this.props.currentTime * rotateDegree : 
			this.props.currentTime * rotateDegree - rotateDegree;


		//push 0:  add rooter class for show current time
		// points.push(
		// 	<div 
		// 		key={0}
		// 		style={{transform: "translate(-50%, -50%) rotate(" + rotate + "deg)",
		// 				width: size + "px"}} 
		// 		className="points">

		// 		<p className="points__point point-right rooter" key={`${array[0]} ${0}`}>{array[0]}</p>
		// 		<p className="points__point point-left" key={array[halfLen]}>{array[halfLen]}</p>
		// 	</div>
		// );
		// rotate -= rotateDegree;

		for (let i = 0; i < halfLen; i++) {

			if (rotate === 0) {
				points.push(
					<div 
						key={i}
						style={{transform: "translate(-50%, -50%) rotate(" + rotate + "deg)",
								width: size + "px"}} 
						className="points">

						<p className="points__point point-right rooter" key={`${array[i]} ${i}`}>{array[i]}</p>
						<p className="points__point point-left" key={array[i + halfLen]}>{array[i + halfLen]}</p>
					</div>
				);
			}

			else if (rotate === _360DEGREE / 2) {
				points.push(
					<div 
						key={i}
						style={{transform: "translate(-50%, -50%) rotate(" + rotate + "deg)",
								width: size + "px"}} 
						className="points">

						<p className="points__point point-right" key={`${array[i]} ${i}`}>{array[i]}</p>
						<p className="points__point point-left rooter" key={array[i + halfLen]}>{array[i + halfLen]}</p>
					</div>
				);
			} else {

				points.push(
					<div 
						key={i}
						style={{transform: "translate(-50%, -50%) rotate(" + rotate + "deg)",
								width: size + "px"}} 
						className="points">

						<p className="points__point point-right" key={`${array[i]} ${i}`}>{array[i]}</p>
						<p className="points__point point-left" key={array[i + halfLen]}>{array[i + halfLen]}</p>
					</div>
				);
			}

			rotate -= rotateDegree;
		}

		return (
			<div className="plateWrp">
				<div 
					className="plate"
					style={{width: size+"px",
							height: size+"px"}}>
					{points}
				</div>
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({
			date: new Date()
		});
	}
	render() {
		let whatWeek = Math.ceil((this.state.date.getDate() + 1) / WEEKS.length);

		return (
			<React.Fragment>
				<h1>{this.state.date.toLocaleTimeString()}</h1>
				<Plate array={MONTHS} size={170} currentTime={this.state.date.getMonth()} />
				<Plate array={WEEKS} size={330} currentTime={whatWeek} />
				<Plate array={DAYS} size={460} currentTime={this.state.date.getDate()} />
				<Plate array={HOURS} size={560} currentTime={this.state.date.getHours()} />
				<Plate array={MINS} size={680} currentTime={this.state.date.getMinutes()} />
				<Plate array={SECS} size={800} currentTime={this.state.date.getSeconds()} />
			</React.Fragment>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);