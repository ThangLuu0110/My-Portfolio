import React, { useContext } from 'react';
import { ThemeContext } from '../Store/ThemeContext';

const FunctionButtons = () => {
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

            
        </div>
    );
};

export default FunctionButtons;