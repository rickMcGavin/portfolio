
let row = document.querySelector('.row');

// array of objects containing the data to build each card quickly
const projectsObj = [
	{
		title: 'Tribute Page',
		description: 'This page is a tribute to chess legend: Bobby Fischer.',
		tools: 'HTML - CSS - Responsive Design',
		link: 'projects/bobby_fischer/bobby.html',
		name: 'bobby'
	},
	{
		title: 'Random Quote Generator',
		description: 'A random quote machine for the TV Show Silicon Valley',
		tools: 'HTML - CSS - Vanilla JavaScript',
		link: 'projects/random_quote/random.html',
		name: 'quote'
	},
	{
		title: 'Wikipedia Viewer',
		description: 'A search front end utilizing wiki search API',
		tools: 'HTML - SCSS - Vanilla JavaScript',
		link: 'projects/wikipedia_viewer/wiki.html',
		name: 'wiki'
	},
	{
		title: 'JavaScipt Calculator',
		description: 'A basic calculator',
		tools: 'HTML - SCSS - Vanilla JavaScript',
		link: 'projects/javascript_calculator/calculator.html',
		name: 'calc'
	},
	{
		title: 'Pomodoro Timer',
		description: 'A pomodoro, productivity timer',
		tools: 'HTML - SCSS - Vanilla JavaScript',
		link: 'projects/pomodoro_clock/pomodoro.html',
		name: 'pomo'
	},
	{
		title: 'Tic-Tac-Toe',
		description: 'A tic-tac-toe game for one or two players with a random AI',
		tools: 'HTML - SCSS - jQuery',
		link: 'projects/tic_tac_toe/tic-tac-toe.html',
		name: 'tictac'
	},
	{
		title: 'Simon',
		description: 'A browser based version of the 80s classic game: Simon',
		tools: 'HTML - SCSS - Vanilla JavaScript',
		link: 'projects/simon/simon.html',
		name: 'simon'
	}
];


// function to build cards for display
function buildCards() {
	for (let i = projectsObj.length-1; i >= 0; i--) {
	let html =
	`
	<div class="wide-card">
		<div class="card-splash ${projectsObj[i].name}">
			<h3>${projectsObj[i].title}</h3>
		</div>
		<div class="card-description">
			<p>${projectsObj[i].description}</p>
			<p>${projectsObj[i].tools}</p>
		</div>
		<div class="card-link">
			<a href="${projectsObj[i].link}" target="_blank">View Project</a>
		</div>
	</div>
	`
	row.innerHTML += html;
	}
}



function init() {
	buildCards();
}


init()
