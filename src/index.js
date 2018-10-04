import React from 'react';
import ReactDOM from 'react-dom';

// const HelloWorld = () => (
//     <div>HELLO WORLD</div>
// );

// const GroceryList = () => (
//     <ul>
//         <li>cucumber</li>
//         <li>kale</li>
//         <li>당근3</li>
//         <li>당근4</li>
//         <li>당근5</li>
//     </ul>
// )

// ReactDOM.render(<GroceryList />, document.getElementById("root"));

const ToDoList = (props) => {
    const onListItemClick = (event) => {
        console.log('I got clicked');
    };

    return (
      <ul>
        <li onClick={onListItemClick}>{props.todo[0]}</li>
        <li>{props.todo[1]}</li>
        <li>{props.todo[2]}</li>
      </ul>        
    );
};

const App = () => (
    <div>
        <h2>My ToDo List</h2>
        <ToDoList
          todos={[
              'Learn React',
              'Crush Recast.ly',
              'Maybe sleep',
          ]} 
        />
    </div>
)