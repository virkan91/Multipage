import React, { useEffect, useState } from 'react'

const DarkMode = () => {
    const [theme, setTheme] = useState("light")
    const element = document.documentElement
    const options = [
        {
            icon: "sunny",
            text: "light"
        },
        {
            icon: "moon",
            text: "dark"
        },
        // {
        //   icon: "desktop-outline",
        //   text: "system"
        // },
    ]

    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark")
                break;
            case "light":
                element.classList.remove("dark")
                break;
            default:
                break;
        }
    }, [theme])
    const [ic, setIc] = useState("sunny")

    function dd() {
        if (ic == "sunny") {
            setIc("moon")
            setTheme("dark")
        }
        else {
            setIc("sunny")
            setTheme("light")
        }
    }
    return (
        // <div className='dark:text-gray-100 duration-300 pt-[3px] px-[6px] rounded-[8px] bg-transparent inline-block'>
         <div className='dark:text-gray-100 duration-300 dark:bg-slate-800 pt-[6px] px-[6px] rounded-[8px] bg-gray-100 inline-block'> 
            {/* {options?.map(opt => (
                <button
                    key={opt.text}
                    onClick={() => setTheme(opt.text)}
                    className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"
                        }`}
                >
                    <ion-icon name={opt.icon}></ion-icon>
                </button>
            ))} */}
            <button onClick={() => dd()} className={`duration-1000 ${theme === "dark" && "text-sky-600"}`}>
                <ion-icon name={ic}></ion-icon>
            </button>
            {/* <button onClick={()=>ll()}>
                <ion-icon name="moon"></ion-icon>
            </button> */}
        </div>
    )
}

export default DarkMode