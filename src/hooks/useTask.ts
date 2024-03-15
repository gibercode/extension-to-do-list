import { createChromeStorageStateHookLocal } from 'use-chrome-storage'

const SETTINGS_KEY = 'tasks'
const INITIAL_VALUE: any = []

export const useTasksStore = createChromeStorageStateHookLocal(
  SETTINGS_KEY,
  INITIAL_VALUE,
)
