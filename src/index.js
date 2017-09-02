import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("h1", {}, "An Awesome Person")
const paragraph = React.createElement("p", {}, "Who is learning React")
const list = React.createElement("ul", { className: "my-interests"},[
		React.createElement('li', { key: 1 }, 'JavaScript'),
		React.createElement('li', { key: 2 }, 'React'),
		React.createElement('li', { key: 3 }, 'Movies'),
		React.createElement('li', { key: 4 }, 'Ice cream')
	])


const meInReact = React.createElement( "div", { className: "me"}, [heading, paragraph, list] )

// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact, 
  document.getElementById('root')
);

export default meInReact


