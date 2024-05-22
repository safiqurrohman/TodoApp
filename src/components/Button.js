import React from "react";
import propTypes from 'prop-types'
import './style/Tombol.css';

const Button = ({variant, text, action}) => {
    return (
        <button className={`btn btn-${variant}`} onClick={action}>
            {text}
        </button>
    )
};

Button.propTypes = {
    text: propTypes.string.isRequired,
    variant: propTypes.string.isRequired,
    action: propTypes.func
}
export default Button;