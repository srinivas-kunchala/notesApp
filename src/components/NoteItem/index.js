// Write your code here
import {ListItems, TitleItem, DescriptionItem} from './styledComponents'

const NoteItem = props => {
  const {noteItems} = props

  return (
    <ListItems>
      <TitleItem>{noteItems.title}</TitleItem>
      <DescriptionItem>{noteItems.notesInfo}</DescriptionItem>
    </ListItems>
  )
}

export default NoteItem
