

export type SimplifiedNote = {
    tags: Tag[];
    title: string;
    id: string;
  }

export type Tag = {
    id: string
    label: string
}

export type NoteData = {
    title: string;
    markdown: string
    tags: Tag[]
}

export type RawNote = {
    id: string;
} & RawNoteData;

export type RawNoteData = {
    title: string;
    markdown: string;
    tagIds:  string[];
}

type Note = {id: string} & NoteData;

export default Note;