import React, { Component } from 'react';

class ListNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
         }
    }

    newNote() {
        console.log(this)
        const noteId = `note-${this.state.notes.length}`
        const note = <Note id={noteId} />
        this.setState({notes: this.state.notes.concat(note)})
    }

    render() {
        const list = this.state.notes.map(note => (
            <li key={note.props.id}>{note}</li>
        ))

        return (
            <div>
                <button onClick={() => this.newNote()}>New Note</button>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
         }
    }

    handleTitleChange(event) {
        const newTitle = event.target.value
        this.setState({title: newTitle})
    }

    handleTextChange(event) {
        const newText = event.target.value
        this.setState({text: newText})
    }

    render() {
        const titleId = `${this.props.id}.title`
        const textId = `${this.props.id}.text`
        return (
            <div>
                <textarea className="title" id={titleId} defaultValue={this.state.title} onChange={(event) => this.handleTitleChange(event)} />
                <textarea className="text" id={textId} defaultValue={this.state.text} onChange={(event) => this.handleTextChange(event)}/>
            </div>
         );
    }
}

export {
    Note,
    ListNote,
}