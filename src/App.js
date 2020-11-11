import React, { Component } from 'react';
//import './App.css';
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
    this.setState({selected_note: event.target.id})
    console.log("changed state")
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
    const notes = Object.entries(this.state.list_note).map(([id, props], i) => (
      <Note
        key={id}
        title={props.title}
        text={props.text}
        data-testid={id}
        id={id}
        onClick={this.handleClickNote}
        onTitleChange={this.handleTitleChange}
        onTextChange={this.handleTextChange}
      />
    ))

    console.log("rendering")
    console.log(this.state)
    var displayedNote = null
    if (this.state.selected_note in this.state.list_note) {
      console.log("new note")
      console.log(this.state.selected_note)
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
    console.log(displayedNote)

    return (
      <div className="App">
        <header className="App-header">
          Notes
        </header>
        <NewNote onSubmit={this.handleNewNote}/>
        <ListNote notes={notes}/>
        {displayedNote}
      </div>
    )
  }
};

export default App;
