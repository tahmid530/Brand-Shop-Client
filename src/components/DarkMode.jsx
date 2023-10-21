import { useState, useEffect } from 'react';

function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if the user has a preference for dark mode in localStorage
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode) {
            setDarkMode(savedDarkMode === 'true');
        } else {
            // If no preference is found, set dark mode based on user's system preference
            setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    }, []);

    useEffect(() => {
        // Update the HTML root element to apply dark mode
        document.documentElement.classList.toggle('dark', darkMode);
        // Store the user's preference in localStorage
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`bg-${darkMode ? 'red-500' : 'white'} text-${darkMode ? 'white' : 'black'} transition-colors duration-500`}>
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-4">Dark Mode Example</h1>
                <button
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700"
                    onClick={toggleDarkMode}
                >
                    Toggle Dark Mode
                </button>
            </div>
        </div>
    );
}

export default DarkMode;
