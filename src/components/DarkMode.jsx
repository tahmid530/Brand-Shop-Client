import { useState, useEffect } from 'react';


// function DarkMode() {
//     const [darkMode, setDarkMode] = useState(false);

//     useEffect(() => {
//         // Check if the user has a preference for dark mode in localStorage
//         const savedDarkMode = localStorage.getItem('darkMode');
//         if (savedDarkMode) {
//             setDarkMode(savedDarkMode === 'true');
//         } else {
//             // If no preference is found, set dark mode based on user's system preference
//             setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
//         }
//     }, []);

//     useEffect(() => {
//         // Update the HTML root element to apply dark mode
//         document.documentElement.classList.toggle('dark', darkMode);
//         // Store the user's preference in localStorage
//         localStorage.setItem('darkMode', darkMode);
//     }, [darkMode]);

//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//     };

//     return (
//         <div className={`bg-${darkMode ? 'red-500' : 'white'} text-${darkMode ? 'white' : 'black'} transition-colors duration-500`}>
//             <div className="p-4">
//                 <h1 className="text-md mb-4">Dark Mode Example</h1>
//                 <button
//                     className="px-2 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700"
//                     onClick={toggleDarkMode}
//                 >
//                     Dark Mode
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default DarkMode;


function DarkMode() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    const handleDarkMode1 = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    const handleDarkMode2 = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }


    return (
        <div>
            <label className="swap swap-rotate">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* sun icon */}
                <svg onClick={handleDarkMode1} className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                {/* moon icon */}
                <svg onClick={handleDarkMode2} className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

            </label>
        </div>
    );
}

export default DarkMode;


{/* <div className="bg-white dark:bg-black">
<button className="px-2 py-2 rounded-3xl bg-blue-600 text-white dark:bg-black"
    onClick={handleDarkMode}>
    DarkMode
</button>
</div> */}
