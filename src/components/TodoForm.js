import React from 'react';

class TodoForm extends React.Component {

    state = {
        created : false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let id = event.target.userId.value;
        let title = event.target.title.value;
        let checked = event.target.completed.checked;
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                userId : id,
                title : title,
                completed : checked
            })
        })
        .then(res => res.json())
        .then(json => this.setState({
            created : true
        }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="flex-column">
                    <div className="space-between">
                        <label htmlFor="userId">ID</label>
                        <input name="userId" type="number" id="userId" />
                    </div>
                    <div className="space-between">
                        <label htmlFor="title">Titre</label>
                        <input name="title" type="text" id="title" />
                    </div>
                    <div className="space-between">
                        <label htmlFor="completed">Complété</label>
                        <input name="completed" type="checkbox" id="completed" />
                    </div>
                </div>
                <button type="submit">Envoyer</button>
                <div>{this.state.created && "Votre tâche a bien été créée"}</div>
            </form>
        )
    }
}

export default TodoForm;
