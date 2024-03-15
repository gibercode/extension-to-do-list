import { ChangeEvent, useState, MouseEvent, useEffect } from 'react'
import styles from './styles.module.scss'
import { ReactSortable } from 'react-sortablejs'
import { v4 as uuid } from 'uuid'
import { format } from '@formkit/tempo'
import { Edit } from '../Edit'
import { TaskType } from '../types'
import { useTasksStore } from '../../hooks/useTask'

export const TodoList = () => {
  // const [tasks, setTasks] = useState<TaskType[]>([])
  const [input, setInput] = useState<string>('')
  const [currentTask, setCurrentTask] = useState<any>(null)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'Enter' && input.length) handleAdd()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [input])

  const [value, setValue] = useTasksStore()

  const handleInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInput(value)
  }

  const handleAdd = () => {
    if (!input?.length) return

    const task = {
      id: uuid(),
      text: input,
    }
    // setTasks((prev: TaskType[] | []) => [task, ...prev])
    setValue((prev: TaskType[] | []) => [task, ...prev])
    setInput('')
  }

  const handleDelete = (index: number) => {
    const tasksCopy = [...value]
    tasksCopy.splice(index, 1)
    // setTasks(tasksCopy)
    setValue(tasksCopy)
  }

  const handleSelect = (task: TaskType) => {
    if (task?.id === currentTask?.id) return setCurrentTask(null)
    setCurrentTask(task)
  }

  const handleEdit = (newTask: TaskType) => {
    const tasksCopy = [...value]
    const index = value.findIndex(({ id }: TaskType) => id === currentTask?.id)
    tasksCopy[index] = newTask

    setTimeout(() => {
      setValue(tasksCopy)
    }, 0)
    setCurrentTask(newTask)
    setIsEditing(false)
  }

  const handleIsEditing = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setIsEditing(true)
  }

  return (
    <div className={styles.main}>
      {!isEditing && (
        <>
          <div className={styles.dateParent}>
            <h3>{format(new Date(), 'medium')}</h3>
            {!!value.length && (
              <p className={styles.tasksNumber}>
                {value.length} task{value?.length > 1 ? 's' : ''}
              </p>
            )}
          </div>

          <div className={styles.formParent}>
            <input
              placeholder="Add todo"
              className={styles.input}
              onChange={handleInput}
              value={input}
            />
            <button
              className={styles.addBtn}
              onClick={handleAdd}
              disabled={!input.length}
            >
              +
            </button>
          </div>
          <div className={styles.taskParent}>
            <ReactSortable list={value} swap setList={setValue}>
              {value?.length ? (
                value.map((task: TaskType, index: number) => (
                  <div
                    className={styles.task}
                    key={task?.id}
                    onClick={() => handleSelect(task)}
                  >
                    <div className={styles.content}>
                      <div>
                        <input
                          type="checkbox"
                          className={styles.radio}
                          onChange={() => handleSelect(task)}
                          checked={task?.id === currentTask?.id}
                        />
                      </div>

                      <p>{task?.text}</p>
                      {task?.id === currentTask?.id && (
                        <div className={styles.actions}>
                          <div
                            className={styles.icon}
                            onClick={() => handleDelete(index)}
                          >
                            <img src={`icons/close.png`} alt="close-icon" width={9} />
                          </div>
                          <div
                            className={styles.icon}
                            onClick={(event) => handleIsEditing(event)}
                          >
                            <img src={`icons/pencil.png`} alt="edit-icon" width={9} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className={styles.noTaskText}>No pending tasks</p>
              )}
            </ReactSortable>
          </div>
        </>
      )}

      {isEditing && currentTask ? (
        <Edit task={currentTask} handleEdit={handleEdit} setIsEditing={setIsEditing} />
      ) : (
        <></>
      )}
    </div>
  )
}
