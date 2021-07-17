import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";

function App() {
	const [htmlCode, setHTMLCode] = useState("");
	const [cssCode, setCSSCode] = useState("");
	const [jsCode, setJSCode] = useState("");
	const [activeWindow, setActiveWindow] = useState(0);

	const [srcDoc, setSrcDoc] = useState("");

	useEffect(() => {
		const timeout = setTimeout(() => {
			let code = htmlCode.replace("<html>", `<html><head><style>${cssCode}</style><script>${jsCode}</script></head>`);
			setSrcDoc(code);
		}, 250);

		return () => clearTimeout(timeout);
	}, [htmlCode, cssCode, jsCode]);

	const handleCodeChange = (code) => {
		switch (activeWindow) {
			default:
				setHTMLCode(code);
				break;
			case 0:
				setHTMLCode(code);
				break;
			case 1:
				setCSSCode(code);
				break;
			case 2:
				setJSCode(code);
				break;
		}
	};

	const files = [
		{ filename: "index.html", index: 0 },
		{ filename: "index.css", index: 1 },
		{ filename: "index.js", index: 2 },
	];

	return (
		<>
			<div className='top-pane'>
				<div className='file-picker-container'>
					{files.map((file) => (
						<div
							key={file.index.toString()}
							className='file-picker'
							style={{ backgroundColor: file.index === activeWindow ? "#ddd" : "#1f2023", color: file.index === activeWindow ? "#333" : "#ddd" }}
							onClick={() => {
								setActiveWindow(file.index);
							}}>
							{file.filename}
						</div>
					))}
				</div>
				<Editor
					displayName={`index.${activeWindow === 0 ? "html" : activeWindow === 1 ? "css" : "js"}`}
					value={activeWindow === 0 ? htmlCode : activeWindow === 1 ? cssCode : jsCode}
					onChange={handleCodeChange}
					mode={activeWindow === 0 ? "htmlmixed" : activeWindow === 1 ? "css" : "javascript"}
				/>
			</div>
			<div className='bottom-pane'>
				<iframe
					srcDoc={srcDoc}
					title='output'
					sandbox='allow-forms allow-popups allow-scripts allow-same-origin allow-modals'
					frameBorder='0'
					width='100%'
					height='100%'
				/>
			</div>
		</>
	);
}

export default App;
