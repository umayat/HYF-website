function getData() {

	var data = [
		{
			topic: 'Introduction',
			subtopics: [
				'Introduction to web development', 
				'Career path',
				'Front-end vs. back-end',
				'Introduction to Github' 	
				],
			month: 'June',
			day: '21',
			year: '2018',
			instructor: 'Youssef',
			imageURL: 'images/introduction.jpg'
		},
		{
			topic: 'HTML',
			subtopics: [
				'Introduction to HTML', 
				'Parents, children, attributes', 
				'Indentation',
				'Semantic elements',
				'Paragraphs, links, images, lists',
				'Introduction to ARIA',
				'Using ARIA in HTML'	
				],
			month: 'June',
			day: '28',
			year: '2018',
			instructor: 'Rajaie',
			imageURL: 'images/html.png'
		},
		{
			topic: 'CSS',
			subtopics: [
				'Where can we write it and what difference does that make?', 
				'Call CSS file in HTML', 
				'Selectors (id, class, element type), properties',
				'How to structure a CSS file(best practices)',
				'Naming CSS files(best practices)'
				],
			month: 'July',
			day: '5',
			year: '2018',
			instructor: 'Rajaie',
			imageURL: 'images/css.png'
		},
		{
			topic: 'Responsive Web Development',
			subtopics: [
				'Relative measurements (%, (r)em, vw)',
				'Media queries',
				'Positioning (absolute, relative, fixed)',
				'Floating and clearing',
				'Flexbox'
				],
			month: 'July',
			day: '12',
			year: '2018',
			instructor: 'Rajaie',
			imageURL: 'images/responsiveDesign.png'
		},
		{
			topic: 'Command Line Interface (CLI)',
			subtopics: [
				'terminal/bash/command line for UNIX based systems',
				'Navigate the file system without using a UI explorer',
				'Write basic shell scripts to ease the programming life',
				'Output redirection, piping on the terminal',
				'Copy, rename and move files with terminal commands.'
				],
			month: 'July',
			day: '19',
			year: '2018',
			instructor: 'Rajaie',
			imageURL: 'images/terminal.png'
		},
		{
			topic: 'Javascript 1',
			subtopics: [
				'Intro JavaScript (What is it, where can you use it )',
				'Variables (var, let, const)',
				'Basic data types (strings, numbers, arrays, booleans)',
				'Operators',
				'Naming conventions'
				],
			month: 'July',
			day: '26',
			year: '2018',
			instructor: 'Saad',
			imageURL: 'images/js1.png'
		},
		{
			topic: 'Javascript 1',
			subtopics: [
				'Advanced data types(objects)',
				'conditional executions',
				'statement vs. expressions',
				'loops (for/while)',
				'functions',
				'scope'
				],
			month: 'August',
			day: '2',
			year: '2018',
			instructor: 'Saad',
			imageURL: 'images/js1.png'
		},
		{
			topic: 'Javascript 2',
			subtopics: [
				'Capturing user input',
				'Events',
				'Basic DOM manipulations(img src, innerHTML)',
				'Code debugging using the browser (no notes required, only demonstration)',
				'Code commenting',
				'Structuring code files (best practices)',
				'Code formating'
				],
			month: 'August',
			day: '9',
			year: '2018',
			instructor: 'Uzair',
			imageURL: 'images/js2.png'
		},
		{
			topic: 'Javascript 2',
			subtopics: [
				'Functions + JSON/Arrays',
				'Array Manipulations',
				'JSON',
				'Map + Filter',
				'Arrow Functions'
				],
			month: 'August',
			day: '16',
			year: '2018',
			instructor: 'Uzair',
			imageURL: 'images/js2.png'
		},
		{
			topic: 'Mock-interview Session',
			subtopics: [
				'Good resume vs. bad resume',
				'Interview tips',
				'Perfect your personal brand'
				],
			month: 'August',
			day: '23',
			year: '2018',
			instructor: 'Rabia/Syeda',
			imageURL: 'images/interview.jpg'
		},
		{
			topic: 'Javascript 2',
			subtopics: [
				'Closures',
				'Callbacks'
				],
			month: 'August',
			day: '30',
			year: '2018',
			instructor: 'Uzair',
			imageURL: 'images/js2.png'
		},
		{
			topic: 'Javascript 3',
			subtopics: [
				'Event Loop(order of execution)',
				'XMLHttpRequests',
				'API Calls'
				],
			month: 'September',
			day: '6',
			year: '2018',
			instructor: 'Shah',
			imageURL: 'images/js3.png'
		},
		{
			topic: 'Javascript 3',
			subtopics: [
				'try...catch',
				'Promises',
				'async/await'
				],
			month: 'September',
			day: '13',
			year: '2018',
			instructor: 'Shah',
			imageURL: 'images/js3.png'
		},
		{
			topic: 'Javascript 3',
			subtopics: [
				'Object Orientated Programming and ES6 Classes',
				'This keyword',
				'call,apply,bind'
				],
			month: 'September',
			day: '20',
			year: '2018',
			instructor: 'Shah',
			imageURL: 'images/js3.png'
		},
		{
			topic: 'Node',
			subtopics: [
				'What is Node.js?',
				'Using Node Package Manager (NPM)',
				'Using http to handle http requests and respond',
				'Using require to include modules'
				],
			month: 'September',
			day: '27',
			year: '2018',
			instructor: 'Aneesh',
			imageURL: 'images/nodeJS.png'
		},
		{
			topic: 'Node',
			subtopics: [
				'Using fs to read from and write to files',
				'Using process to read arguments from the CLI'
				],
			month: 'October',
			day: '4',
			year: '2018',
			instructor: 'Aneesh',
			imageURL: 'images/nodeJS.png'
		},
		{
			topic: 'Node',
			subtopics: [
				'Using express to make a RESTful API',
				'Building a REST API for To-Dos'
				],
			month: 'October',
			day: '11',
			year: '2018',
			instructor: 'Aneesh',
			imageURL: 'images/nodeJS.png'
		},
		{
			topic: 'Database',
			subtopics: [
				'Entities',
				'The relational model',
				'What is SQL and how to use it',
				'The construction of a database system'
				],
			month: 'October',
			day: '18',
			year: '2018',
			instructor: 'Ishan',
			imageURL: 'images/database.png'
		},
		{
			topic: 'Database',
			subtopics: [
				'MySQL as an example of a relational database system',
				'Non-relational data and NoSQL',
				'MongoDB as an example of a NoSQL database'
				],
			month: 'October',
			day: '25',
			year: '2018',
			instructor: 'Ishan',
			imageURL: 'images/database.png'
		},
		{
			topic: 'React',
			subtopics: [
				'React Components (JSX, Elements, Components and Props)'
				],
			month: 'November',
			day: '1',
			year: '2018',
			instructor: 'Youssef',
			imageURL: 'images/reactJS.png'
		},
		{
			topic: 'React',
			subtopics: [
				'State and Lifecycle (Lifecycle, Events, Conditional Rendering, List and Keys)'
				],
			month: 'November',
			day: '8',
			year: '2018',
			instructor: 'Youssef',
			imageURL: 'images/reactJS.png'
		},
		{
			topic: 'React',
			subtopics: [
				'Forms and managing states (Forms, Manage State, Thinking in React)'
				],
			month: 'November',
			day: '15',
			year: '2018',
			instructor: 'Youssef',
			imageURL: 'images/reactJS.png'
		},
		{
			topic: 'React',
			subtopics: [
				'MobX, Flux concepts'
				],
			month: 'November',
			day: '22',
			year: '2018',
			instructor: 'Youssef',
			imageURL: 'images/reactJS.png'
		},
		{
			topic: 'React',
			subtopics: [
				'MobX Async Actions'
				],
			month: 'November',
			day: '29',
			year: '2018',
			instructor: 'Youssef',
			imageURL: 'images/reactJS.png'
		}
	]

	return JSON.stringify(data);
}