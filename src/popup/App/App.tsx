import React from 'react'
import styles from './app.module.scss'
import { TodoList } from '../TodoList'

const App = () => {
  return (
    <div className={styles.app}>
      <TodoList />
    </div>
  )
}

export default App
