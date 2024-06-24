// Write your code here

import {v4 as uuidv4} from 'uuid'

import {useState} from 'react'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  NotesContainer,
  NotesHeading,
  Description,
  Title,
  AddBtn,
  EmptyContainer,
  NoNotes,
  ImgEl,
  ListContainer,
} from './styledComponents'

const Notes = () => {
  const [titleValue, setTitle] = useState('')

  const [desc, setDesc] = useState('')

  const [initialList, setNoteList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setDesc(event.target.value)
  }

  const onClickAddBtn = () => {
    const newNotes = {
      id: uuidv4(),
      title: titleValue,
      notesInfo: desc,
    }

    if (titleValue !== '' && desc !== '') {
      setNoteList(previousState => [...previousState, newNotes])
      setTitle('')
      setDesc('')
    }
  }

  console.log(initialList)

  return (
    <AppContainer>
      <NotesHeading>Notes</NotesHeading>
      <NotesContainer>
        <Title
          type="text"
          onChange={onChangeTitle}
          value={titleValue}
          placeholder="Title"
        />

        <Description
          onChange={onChangeNote}
          value={desc}
          placeholder="Take a Note..."
        >
          {desc}
        </Description>
        <AddBtn onClick={onClickAddBtn} type="button">
          Add
        </AddBtn>
      </NotesContainer>
      {initialList.length === 0 ? (
        <EmptyContainer>
          <ImgEl
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotes>No Notes yet</NoNotes>
          <NoNotes>Notes you add will appear here</NoNotes>
        </EmptyContainer>
      ) : (
        <ListContainer>
          {initialList.map(eachItem => (
            <NoteItem key={eachItem.id} noteItems={eachItem} />
          ))}
        </ListContainer>
      )}
    </AppContainer>
  )
}

export default Notes
