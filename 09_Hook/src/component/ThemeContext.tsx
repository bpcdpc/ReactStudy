import { createContext } from "react";

export type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

// Context 생성하기
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { console.log(); },
    // 초기값
});

export default ThemeContext;