import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {
    const {
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor,data,value){
        onChange(value)
    }

    return (
        <div className="editor-container">
            <div className="editor-title">
                {displayName}
            </div>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: 'htmlmixed',
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    )
}
