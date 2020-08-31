import React from 'react';
import TableDisplay from './TableDisplay';

class TodoList extends React.Component {

    state = {
        inputValue: "",
        values: []
    }

    handleClick = () => {
        let url = 'https://jsonplaceholder.typicode.com/todos?userId=';
        url += this.state.inputValue;
        fetch(url)
            .then(response => response.json())
            .then(json => {
                json.map((element) => {
                    element.completed = element.completed ? 'Oui' : 'Non';
                    return element; 
                });
                this.setState({
                    values : json
                })
            })
    }
    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
                <button onClick={this.handleClick}>Filter</button>
                <TableDisplay content={this.state.values} header={['UserID', 'TacheID', 'Titre', 'Complété']} uniqueKey="id" />
            </div>
        );
    }
}

export default TodoList;