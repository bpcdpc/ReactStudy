import { useState } from "react";
import type { Theme } from "./ThemeContext";
import ThemeContext from "./ThemeContext";
import MainContext from "./ThemeContext_Main";
import MiddleContext from "./ThemeContext_Middle";

// DarkOrLight > 
export default function DarkOrLight() {
    // 함수 내부에서 사용하는 Toggle State
    const [theme, setTheme] = useState<Theme>('light');
    const toggleTheme = (): void => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        // ThemeContext 값 설정
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MiddleContext/>
        </ThemeContext.Provider>
    );
}