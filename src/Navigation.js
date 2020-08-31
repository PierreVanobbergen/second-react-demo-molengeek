import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class Navigation extends React.Component {

    state = {
        view: 'display'
    }

    handleClick = (newView) => {
        this.setState({
            view : newView
        })
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <button onClick={() => this.handleClick('display')}>Afficher</button>
                    <button onClick={() => this.handleClick('create')}>Créer</button>
                </div>
                {this.state.view === "display" && <TodoList />}
                {this.state.view === "create" && <TodoForm />}
            </div>
        )
    }

}

export default Navigation;