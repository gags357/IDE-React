import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
	const { displayName, value, onChange, mode } = props;

	function handleChange(editor, data, value) {
		onChange(value);
	}

	return (
		<div className='editor-container'>
			<div className='editor-title'>{displayName}</div>
			<ControlledEditor
				onBeforeChange={handleChange}
				value={value}
				className='code-mirror-wrapper'
				options={{
					lineWrapping: true,
					lint: true,
					mode,
					theme: "material",
					lineNumbers: true,
				}}
			/>
		</div>
	);
}
