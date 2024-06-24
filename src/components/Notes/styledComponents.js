// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotesHeading = styled.h1`
  color: orange;
  font-family: 'Bree Serif';
`

export const NotesContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: black;
  margin-bottom: 10px;
`

export const Description = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
`

export const AddBtn = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: blueviolet;
  border: none;
  border-radius: 10px;
  color: white;
  margin-left: auto;
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImgEl = styled.img`
  height: 40px;
`

export const NoNotes = styled.p``

export const ListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`
