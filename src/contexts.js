import { createContext } from 'react'
import themes from './themes'

export const ThemeContext = createContext(themes.dark)
export const LocaleContext = createContext('🇯🇵')
