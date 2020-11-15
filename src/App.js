import React, { Component } from 'react';
import './App.css';
import { ListNote, NewNote, EmptyNote, Note } from './components/Note.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list_note: {},
      selected_note: ""
    }

    this.handleNewNote = this.handleNewNote.bind(this)
    this.handleClickNote = this.handleClickNote.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleNewNote(event) {
    const noteId = `note-${Object.keys(this.state.list_note).length}`
    const note = {id: noteId, title: event.target.value, text: ""}
    var newnote = {}
    newnote[noteId] = note
    this.setState({list_note: Object.assign({}, this.state.list_note, newnote)})
    event.preventDefault()
  }

  handleClickNote(event) {
    var target_id = event.target.id + "."
    const note_id = target_id.split(".")[0]
    this.setState({selected_note: note_id})
  }

  handleTitleChange(event) {
    console.log(event.target)
    const newTitle = event.target.value
    const noteId = event.target.id.split(".")[0]
    var listnote = this.state.list_note
    listnote[noteId] = {...listnote[noteId], title: newTitle}
    this.setState({list_note: listnote})
  }

  handleTextChange(event) {
    const newText = event.target.value
    const noteId = event.target.id.split(".")[0]
    var listnote = this.state.list_note
    listnote[noteId] = {...listnote[noteId], text: newText}
    this.setState({list_note: listnote})
  }

  render() {
    const notes = Object.entries(this.state.list_note).map(([id, props], i) => (
      <Note
        key={id}
        readOnly={true}
        title={props.title}
        text={props.text}
        data-testid={id}
        id={id}
        onClick={this.handleClickNote}
        onTitleChange={this.handleTitleChange}
        onTextChange={this.handleTextChange}
      />
    ))

    var displayedNote = null
    if (this.state.selected_note in this.state.list_note) {
      const noteId = this.state.selected_note
      const noteProps = this.state.list_note[noteId]
      displayedNote = <Note
        key={noteId}
        title={noteProps.title}
        text={noteProps.text}
        data-testid={noteId}
        id={noteId}
        onTitleChange={this.handleTitleChange}
        onTextChange={this.handleTextChange}
      />
    } else {
      displayedNote = <EmptyNote />
    }

    return (
      <div className="App">
        <div id="sidebar">
          <NewNote onSubmit={this.handleNewNote}/>
          <ListNote notes={notes}/>
        </div>
        {displayedNote}
      </div>
    )
  }
};

export default App;
