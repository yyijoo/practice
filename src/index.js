import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = (props) => (
    <ul>
        {props.todos.map(todo =>
        <ToDoListItem todo ={todo} />
        )}
    </ul>
);

class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        };
    }

    onListItemClick() {
        this.setState({
            done: !this.state.done
        })
    }

    render() {

        const style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };

        return (
            <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
        )
    };
}

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

ReactDOM.render(<App />, document.getElementById("root"));