import { useCallback, useEffect, useState } from "react";

export function useDarkMode() {

    const [mode, setMode] = useState(localStorage.theme);

    if (localStorage.theme === undefined) {
        localStorage.theme = 'light';
        setMode(localStorage.theme);
    }
    const changeMode = useCallback(() => {
        localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light'
        setMode(localStorage.theme);
    });
    useEffect(
        () => {
            // console.log('mode change')
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        },
        [mode] 
    );
    return [ mode, changeMode ];
}