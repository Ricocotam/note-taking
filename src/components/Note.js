import React, { Component } from 'react';
import "./Notes.css"


class ListNote extends Component {
    render() {
        const list = this.props.notes.map(note => (
            <li id={note.props.id} key={note.props.id}>
                {note}
            </li>
        ))

        return (
            <div className="ListNote">
                <ul>{list}</ul>
            </div>
        )
    }
}


class NewNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.target.value = this.state.value
        this.setState({value: ""})
        this.props.onSubmit(event)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="NewNote">
                <label>Title :
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="New Note" />
            </form>
        );
    }
}



class Note extends Component {
    render() {
        const titleId = `${this.props.id}.title`
        const textId = `${this.props.id}.text`
        return (
            <div className="Note" id={this.props.id} data-testid={this.props["data-testid"]} onClick={this.props.onClick} >
                <input className="title" data-testid={titleId} id={titleId} defaultValue={this.props.title} onChange={this.props.onTitleChange} readOnly={this.props.readOnly}/>
                <textarea className="text" data-testid={textId} id={textId} defaultValue={this.props.text} onChange={this.props.onTextChange}/>
            </div>
        );
    }
}

// Prevent from modifying the note
function EmptyNote(props){
    return <Note />
}

export {
    Note,
    ListNote,
    NewNote,
    EmptyNote,
}