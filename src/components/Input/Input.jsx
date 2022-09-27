import React from 'react';

import './Input.scss';

export default function Input(props) {
    return (
        <input
            className="input_search"
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange ? (e) => props.onChange(e) : null}
        />
    );
}
