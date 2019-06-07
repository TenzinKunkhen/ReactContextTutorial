import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    //hooking up the context object to the component
    //contextType is keyword
    //static contextType = LanguageContext;

    //consumer needs no context type


    render() {
        return (
            <ColorContext.Consumer>
            {(color ) =>   <button className={`ui button ${color}`}>
             
            <LanguageContext.Consumer>
                
                {(value) => value === 'english' ? 'Submit' : 'Vorleggen'}
            </LanguageContext.Consumer>
            </button>
            }
            </ColorContext.Consumer>

        )
    }
}
export default Button;