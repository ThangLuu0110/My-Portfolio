import React, { useContext } from 'react';
import { ThemeContext } from '../Store/ThemeContext';
import { useTranslation } from 'react-i18next';

const FunctionButtons = () => {
    const { t, i18n } = useTranslation();
    const context = useContext(ThemeContext);

    return (
        <div className="function-buttons">
            <button
                type="button"
                aria-label={context.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                className={`function-buttons_theme-toggle ${context.theme}`}
                onClick={context.toggleTheme}
                >
                {context.theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button
                type="button"
                aria-label={i18n.language === 'en' ? 'Switch to Vietnamese' : 'Switch to English'}
                className={`function-buttons_lang-toggle ${context.theme}`}
                onClick={() => {
                    i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
                }}
            >
                {i18n.language === 'en' ? 'VN' : 'EN'}
            </button>
        </div>
    );
};

export default FunctionButtons;