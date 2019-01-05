var data = null;

window.onload = function() {
	
	data = JSON.parse(getData());
	// var currDate = new Date("July 12, 2018");

	// var recentTopics = data.filter( topic => {
	// 	let date = new Date(topic.year + ' ' + topic.month + ' ' + topic.day);
	// 	let diffSeconds = currDate-date;
	// 	let diffDays = diffSeconds/(1000*60*60*24);

	// 	return ( Math.round(diffDays) === (7 || 6) || Math.round(diffDays) === (-7 || -6) );
	// })

	// console.log(recentTopics);


	display_summary_stats();
	displayTopics();
	create_filter_submenu();
}

function display_summary_stats() {
	let topics = data.map( topic => topic.topic );
	let dates = data.map( topic => new Date(topic.month + ' ' + topic.day + ' ' + topic.year).toDateString() );
	let instructors = data.map( topic => topic.instructor );

	let topic_stat_value = document.getElementById('topic-stat-value');
	topic_stat_value.innerHTML = new Set(topics).size;

	let instructor_stat_value = document.getElementById('instructor-stat-value');
	instructor_stat_value.innerHTML = new Set(instructors).size;

	let date_stat_value = document.getElementById('date-stat-value');
	date_stat_value.innerHTML = new Set(dates).size;
}

function displayTopics(newData) {
	let parent = document.getElementById('topics_schedule');
	let documentFragment = document.createDocumentFragment();

	let data_to_use = data;
	if(newData){ data_to_use = newData };

	data_to_use.forEach( topic => {

		// topic container
		let container = document.createElement('div');
		container.className = 'topic';
		container.style.width = '30%';
		container.style.padding = '1em';

		// add background image
		let bgImage = document.createElement('div');
		bgImage.className = 'topic-image bg-image';
		bgImage.style.width = '100%';
		bgImage.style.height = '15em';
		bgImage.style.backgroundImage = 'url("'+ topic.imageURL +'")';

		// add class date
		let classDate = document.createElement('div');
		classDate.className = 'topic-date';
		classDate.style.backgroundColor = '#ffffff';
		classDate.style.width = '30px';
		classDate.style.textAlign = 'center';
		classDate.style.color = 'gray';
		classDate.style.padding = '10px 20px';
		classDate.style.lineHeight = '1.5';
		classDate.style.opacity = '0.9';

		// specify the date day
		let day = document.createElement('span');
		day.id = 'day';
		day.style.display = 'block';
		day.style.fontSize = '1em';

		let dayText = document.createTextNode(topic.day);
		day.appendChild(dayText);

		// specify the date month
		let month = document.createElement('span');
		month.id = 'month';
		month.style.display = 'block';
		month.style.textTransform = 'uppercase';
		month.style.fontSize = '0.8em';

		let monthText = document.createTextNode(topic.month.slice(0,3));
		month.appendChild(monthText);

		// append day to date
		classDate.appendChild(day);

		// append month to date
		classDate.appendChild(month);

		// append date to background image
		bgImage.appendChild(classDate);

		// append background image to container
		container.appendChild(bgImage);


		let description = document.createElement('div');
		description.className = 'desc';
		description.style.border = '1px solid #e6e6e6';
  		description.style.borderTop = '0';
  		description.style.textAlign = 'center';

		let title = document.createElement('h3');
		title.style.margin = '3px 5px 3px 5px';

		let titleText = document.createTextNode(topic.topic);
		title.appendChild(titleText);

		let instructor = document.createElement('p');
		instructor.style.fontSize = '1em';
		instructor.style.margin = '0';
		instructor.style.fontStyle = 'italic';

		let instructorName = document.createTextNode('Instructor: ' + topic.instructor);
		instructor.appendChild(instructorName);

		let subtopics = document.createElement('ul');
		subtopics.style.textAlign = 'left';
		subtopics.style.fontSize = '1em';

		topic.subtopics.forEach( subtopic => {
			let listItem = document.createElement('li');
			let itemText = document.createTextNode(subtopic);

			listItem.appendChild(itemText);
			subtopics.appendChild(listItem);
		})

		description.appendChild(title);
		description.appendChild(instructor);
		description.appendChild(subtopics);

		container.appendChild(description);

		// append container to html page
		documentFragment.appendChild(container);
	})

	parent.appendChild(documentFragment);
}

function sort(sortBy) {
	if(sortBy === 'topic'){
		data.sort( (a,b) => {
			if(a.topic > b.topic){
				return 1;
			}
			else if(a.topic < b.topic){
				return -1;
			}
			else{
				return 0;
			}
		});
	}
	else if(sortBy === 'date'){
		data.sort( (a,b) => {
			let dateA = new Date(a.month + ' ' + a.day + ' ' + a.year);
			let dateB = new Date(b.month + ' ' + b.day + ' ' + b.year);
			return dateA - dateB;
		})
	}
	else{
		data.sort( (a,b) => {
			if(a.instructor > b.instructor){
				return 1;
			}
			else if(a.instructor < b.instructor){
				return -1;
			}
			else{
				return 0;
			}
		})
	}

	document.getElementById('topics_schedule').innerHTML = null;
	displayTopics();
}

function create_filter_submenu(){
	let topics = data.map( topic => topic.topic );
	let dates = data.map( topic => new Date(topic.month + ' ' + topic.day + ' ' + topic.year).toDateString() );
	let instructors = data.map( topic => topic.instructor );

	// add options for filtering by topic
	let filter_by_topic_options = create_filter_submenu_options( new Set(topics) );
	let filter_by_topic = document.getElementById('filter-by-topic');
	filter_by_topic.appendChild(filter_by_topic_options);

	// add options for filtering by date	
	let filter_by_date_options = create_filter_submenu_options( new Set(dates) );
	let filter_by_date = document.getElementById('filter-by-date');
	filter_by_date.appendChild(filter_by_date_options);

	// add options for filtering by instructor
	let filter_by_instructor_options = create_filter_submenu_options( new Set(instructors) );
	let filter_by_instructor = document.getElementById('filter-by-instructor');
	filter_by_instructor.appendChild(filter_by_instructor_options);
}

function create_filter_submenu_options(options) {
	let documentFragment = document.createDocumentFragment();

	options.forEach( option => {
		let filterOption = document.createElement('a');
		let optionText = document.createTextNode(option);

		filterOption.appendChild(optionText);
		filterOption.onclick = function(){
			filter(option);
		}

		documentFragment.appendChild(filterOption);
	})

	return documentFragment;
}

function filter(filterType){

	let newData = data.filter( topic => {
		return ( (filterType === topic.topic) || (filterType === new Date(topic.month + ' ' + topic.day + ' ' + topic.year).toDateString()) || 
			(filterType === topic.instructor) );
	})

	document.getElementById('topics_schedule').innerHTML = null;
	displayTopics(newData);
}

function createElement(ele, txt) {
	let eleNode = document.createElement(ele);

}