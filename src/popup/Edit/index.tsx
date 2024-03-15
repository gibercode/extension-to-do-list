import { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'
import { TaskType } from '../types'

type EditComponent = {
  task: TaskType
  handleEdit: (task: TaskType) => void
  setIsEditing: (param: boolean) => void
}

export const Edit = ({ task, handleEdit, setIsEditing }: EditComponent) => {
  const handleBack = () => {
    setIsEditing(false)
  }
  const [input, setInput] = useState<string>(task?.text)
  const handleInput = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(value)
  }

  return (
    <div className={styles.main}>
      <img
        src={`${process.env.PUBLIC_URL}/icons/arrow.png`}
        alt="goback-icon"
        width={16}
        className={styles.goBack}
        onClick={handleBack}
      />
      <textarea
        onChange={handleInput}
        placeholder="Edit todo"
        className={styles.textarea}
        value={input}
      />
      <button
        disabled={!input.length}
        className={styles.editBtn}
        onClick={() => handleEdit({ id: task?.id, text: input })}
      >
        Edit
      </button>
    </div>
  )
}
