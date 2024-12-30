import React, {useState, useEffect} from "react"
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";

export default function Navbar() {
    const [darkMode,setDarkMode] = useState(() => {
        if (localStorage.getItem('Mode') === 'dark') {
            return true;
        }
        else {
            return false;
        }
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('Mode', 'dark');
        } else {
            document.body.classList.remove('dark') ;
            localStorage.setItem('Mode', 'light');
        }
    }, [darkMode]);


    const handleDarkMode = () => {
        setDarkMode(!darkMode);

        console.log(darkMode);
    }

    return (
        <div className="border-2 border-solid dark:border-dark-primary border-light-primary w-fit dark:bg-dark-accent/35 bg-light-accent/35 flex rounded-full py-3 px-8 m-6">
            <div className="flex items-center justify-around gap-4 w-full">
                {/* logo */}
                <div className="flex items-center gap-2 justify-start pr-16">
                    <img src='./favicon.ico.png' alt="Lunar Logo" width={46} height={46} />
                    {/* <p className="font-ukijru text-center text-2xl">Lunar Salameh</p> */}
                </div>
                {/* list */}
                    <ul className="flex flex-row justify-center gap-8">
                        <li className=" hover:font-semibold dark:text-dark-text">
                            <a href="/">About me </a>
                        </li>
                        <li className=" hover:font-semibold dark:text-dark-text">
                            <a href="/">Projects </a>
                        </li>
                        <li className=" hover:font-semibold dark:text-dark-text"> 
                            <a href="/">Skills</a>
                        </li>
                        <li className=" hover:font-semibold dark:text-dark-text">
                            <a href="/">Contact Me</a>
                        </li>
                        <li className="flex align-center items-center dark:text-dark-text">
                           <button onClick={()=>{handleDarkMode()}}>
                                { darkMode ? <MdOutlineLightMode size={22}/> :  <MdNightlight size={22}/>}
                            </button>
                        </li>
                    </ul>
                
            </div>
        </div>
    )
}