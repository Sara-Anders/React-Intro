
'use strict';

// define dataset as array in a variable
const info = [
  { title: 'Week 3 JS Quiz', detail: 'Learned about Events and Objects of Javascript, created a quiz that has the user input an answer to a question, using to create an interactive experiance using logic and control structures. ', image_trail: 'images/quiz.png'},

  { title: 'Week 7 JQuery Plug-ins', detail: 'Learned to create jQuery plugins using object-oriented JavaScript code. Also, learned to research, evaluate and integrate multiple jQuery plugins to accomplish desired user experience.', image_trail: 'images/plugins.png' },

  { title:'Mid-Term Project Google Maps App', detail: 'Worked with dynamic data loaded from external JSON files. Worked with asynchronous events and JavaScript callback function. Created mobile-ready responsive interfaces using JavaScript, HTML and CSS.Respond to user events with function-based code blocks.', image_trail: 'images/midterm.png' },

  { title: 'Week 11 Basic Data Visualizations', detail: 'Developed data visualizations using external JSON data. Learned how JavaScript can command the browser to create visual graphics in HTML5 canvas elements.', image_trail: 'images/graph.png' },

  { title: 'Week 12 Advanced Data Visualizations', detail: 'Created a data visualization using the D3 library that supports user interaction using hover and click interaction elements, uses SVG elements and loads data from an external JSON file. ', image_trail: 'images/graph2.png' },

   { title:'Week 14 Basic Game Development', detail: 'Developed a highly interactive user experiences using the Phaser JavaScript library. Learned how JavaScript can command the browser to create games. ', image_trail: 'images/game.png' }
  
  
];

//define react page component with vanilla JS
function TaskList(props){
//return output for component use JSX
return <div>
  <h1>{props.text1}</h1>
  <br />
  <ol>
    {
      //using map() to loop through array passed in props.plan, creating new element for each array value
      props.list.map(
        //copy current array valur into item and pass to func 
        (item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>
            <br/>
            {item.detail}
             <br/>
            <img src={item.image_trail} alt={item.title} />
          </li>
        )
      )
    }
    </ol>
</div>
}

//put it onto the page with render
ReactDOM.render(
  <TaskList list={info} text1="A Compilation of 50C Intro to Javascript Projects" />,
  document.getElementById('myProject')
);