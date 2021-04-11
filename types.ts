export type Note = {
  value: string,
  createdAt: Date,
  id: number
}

export interface HeaderComponentType extends EditorComponentType {
  onThemeChange: () => void
}

export type EditorComponentType = {
  mdParser: any,
  storedNotes: Note[]
  setNotes: (note: string | ((val: string) => string)) => void
}
