import React from 'react';
import ReactDOM from 'react-dom';

import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
    waitForDomChange,
    screen
  } from "@testing-library/react";

import '@testing-library/jest-dom/extend-expect'

import { ListNote, Note } from "./Note.js"

afterEach(cleanup);

describe("Basic Note functionnality", () => {
    it("New note", () => {
        const { getByTestId } = render(<ListNote />)
        fireEvent.click(getByTestId("newNote"))
        expect(getByTestId("note-0")).toBeInTheDocument()
    })

    it("Change note title", () => {
        const { getByTestId } = render(<Note id="note-0" />)
        fireEvent.change(getByTestId("note-0.title"), {"target": {"value": "Test Title"}})
        expect(getByTestId("note-0.title").value).toEqual("Test Title")
    })

    it("Change note content", () => {
        const { getByTestId } = render(<Note id="note-0" />)
        fireEvent.change(getByTestId("note-0.text"), {"target": {"value": "Test Text"}})
        expect(getByTestId("note-0.text").value).toEqual("Test Text")

    })
})