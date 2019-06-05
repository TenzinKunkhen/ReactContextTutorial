import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    //hooking up the context object to the component
    //contextType is keyword
    static contextType = LanguageContext;



    render() {
        console.log(this.context);
        return (
            
            <button className="ui button primary">Submit</button>
        )
    }
}
export default Button;