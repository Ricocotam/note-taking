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

    render() {
        const titleId = `${this.props.id}.title`
        const textId = `${this.props.id}.text`
        return (
            <div>
                <textarea className="title" id={titleId} rows="1" cols="140" defaultValue={this.state.title} />
                <textarea className="text" id={textId} cols="140" defaultValue={this.state.text} />
            </div>
         );
    }
}

export {
    Note,
    ListNote,
}