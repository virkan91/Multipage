import React from 'react'
import { useTranslation } from 'react-i18next';

const MyTranslation = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }
    return (
        <select
             onChange={(event) => changeLanguage(event.target.value)}
             className='border rounded font-[500] dark:text-black duration-1000'
        >
            <option value="ru">RN</option>
            <option value="en">EN</option>
        </select>
    )
}

export default MyTranslation