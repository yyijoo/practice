import React from 'react';
import ReactDOM from 'react-dom';

const GroceryList = (props) => (
    <ul>
        {props.todos.map(todo =>
        <GroceryListItem todo ={todo} />
        )}
    </ul>
);

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            mouseOver: false
        };
    }

    onListItemClick() {
        this.setState({
            done: !this.state.done
        })
    }

    onMouseOverEvent() {
        this.setState({
            mouseOver: !this.state.mouseOver
        })
    }

    render() {
        const style = {
            textDecoration: this.state.done ? 'line-through' : 'none',
            fontWeight: this.state.mouseOver ? 'bold' : 'normal'
        };

        return (
            <li style={style} 
            onClick={this.onListItemClick.bind(this)} 
            onMouseOver={this.onMouseOverEvent.bind(this)} onMouseOut={this.onMouseOverEvent.bind(this)}>{this.props.todo}</li>
        )
    };
}

const App = () => (
    <div>
        <h2>My ToDo List</h2>
        <GroceryList
          todos={[
              '맛있는 당근',
              '더 맛있는 당근',
              '최고로 맛있는 당근',
          ]} 
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));