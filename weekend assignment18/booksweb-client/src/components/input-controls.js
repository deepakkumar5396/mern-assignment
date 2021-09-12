import React, {useState}from 'react'


export const LabeledInput=({id, value, label, placeholder, type, onChange})=>{

    const[ text, setText]=useState(value);
    if(!placeholder) placeholder=id;
    if(!type) type="text";

    if(!label)
        label=id.toUpperCase();

    const handleChange=(e)=>{
        onChange(e.target.id,e.target.value);
        setText(e.target.value);
    }

    return (
        <div className="form-group">
                <label htmlFor="title">{label}</label>
                <input  type={type}          
                        id={id}
                        className="form-control"          
                        placeholder={placeholder}
                        value={text}
                        onChange={handleChange}
                        />
            </div>
    );
}

export const LabeledTextArea=({id, value,label, placeholder, type, onChange})=>{

    const[ text, setText]=useState(value);
    if(!placeholder) placeholder=id;
    if(!type) type="text";
    if(!label)
        label=id.toUpperCase();

    const handleChange=(e)=>{
        onChange(e.target.id,e.target.value);
        setText(e.target.value);
    }

    return (
        <div className="form-group">
                <label htmlFor="title">{label}</label>
                <textarea  type={type}          
                        id={id}
                        className="form-control"          
                        placeholder={placeholder}
                        value={text}
                        onChange={handleChange}
                        />
            </div>
    );
}
