import React, {useState, useEffect, useRef} from "react"
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { LuBrain } from "react-icons/lu";

export default function Navbar() {
    const [darkMode,setDarkMode] = useState(() => {
        if (localStorage.getItem('Mode') === 'dark') {
            return true;
        }
        else {
            return false;
        }
    });

    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('Mode', 'dark');
        } else {
            document.body.classList.remove('dark') ;
            localStorage.setItem('Mode', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);

        console.log(darkMode);
    }


    return (
        <div className=" border-2 border-solid dark:border-dark-primary border-light-primary w-fit max-sm:w-[80%] dark:bg-dark-accent/35 bg-light-accent/35 flex rounded-full py-3 px-8 m-6">
            <div className="flex items-center justify-around gap-4 w-full">
                {/* logo */}
                <div className="flex items-center gap-2 justify-start pr-16 max-sm:pr-3 motion-preset-slide-down">
                    <a href='/'>
                        <img src='./favicon.ico.png' alt="Lunar Logo" width={46} height={46} />
                    </a>
                    <p className="font-ukijru text-center text-2xl max-sm:text-xl hidden max-sm:block pl-2">Lunar Salameh</p>
                </div>
                {/* list */}
                <div className="">
                    <ul className="flex flex-row justify-center gap-8 max-sm:hidden">
                        <li className=" hover:font-semibold dark:text-dark-text motion-preset-rebound-down motion-delay-[400ms]">
                            <a href="/aboutMe">About me </a>
                        </li>
                        <li className=" hover:font-semibold dark:text-dark-text motion-preset-rebound-down motion-delay-[400ms]">
                            <a href="/projects">Projects </a>
                        </li>
                        <li className=" hover:font-semibold dark:text-dark-text motion-preset-rebound-down motion-delay-[400ms]"> 
                            <a href="/skills"> Skills</a>
                        </li>
                        <li className=" hover:font-semibold dark:text-dark-text motion-preset-rebound-down motion-delay-[400ms]">
                            <a href="/contactMe">Contact Me</a>
                        </li>
                        <li className="flex align-center items-center dark:text-dark-text motion-preset-rebound-down motion-delay-[400ms]">
                           <button onClick={()=>{handleDarkMode()}}>
                                { darkMode ? <MdOutlineLightMode size={22}/> :  <MdNightlight size={22}/>}
                            </button>
                        </li>
                    </ul>
                    <div className="hidden max-sm:block motion-preset-rebound-down motion-delay-[400ms]">
                        <FaListUl size={22} onClick={()=>setShowMenu(!showMenu)}/>
                    </div>
                </div>
                
                {showMenu && 
                    <div  ref={menuRef} className="hidden max-sm:block shadow-lg shadow-light-secondary dark:shadow-dark-accent/35  rounded-lg bg-light-background dark:bg-dark-background absolute top-24 right-16  z-50">
                    <div className="dark:bg-dark-accent/35 bg-light-accent/35 p-4 rounded-lg border-2 border-solid dark:border-dark-primary border-light-primary">
                        <ul className="flex flex-col gap-4">
                            <li className=" hover:font-semibold dark:text-dark-text motion-preset-rebound-down motion-delay-[400ms]">
                                <a href="/aboutMe" className="flex items-center gap-2"><IoPersonSharp />About me </a>
                            </li>
                            <li className=" hover:font-semibold dark:text-dark-text motion-preset-rebound-down motion-delay-[400ms]">
                                <a href="/projects" className="flex items-center gap-2"><GoProjectRoadmap />Projects </a>
                            </li>
                            <li className=" hover:font-semibold dark:text-dark-text motion-preset-rebound-down motion-delay-[400ms]"> 
                                <a href="/skills" className="flex items-center gap-2"><LuBrain />Skills</a>
                            </li>
                            <li className=" hover:font-semibold dark:text-dark-text motion-preset-rebound-down motion-delay-[400ms]">
                                <a href="/contactMe" className="flex items-center gap-2"><MdMarkEmailUnread />Contact Me</a>
                            </li>
                            <li className="flex align-center items-center dark:text-dark-text motion-preset-rebound-down motion-delay-[400ms]">
                            <button onClick={()=>{handleDarkMode()}} className="flex items-center gap-2">
                                    { darkMode ? <MdOutlineLightMode size={22}/> :  <MdNightlight size={22}/>} Mode
                                </button>
                            </li>
                        </ul>
                    </div>
                    </div>
                }
            </div>
            
        </div>

        

    )
}