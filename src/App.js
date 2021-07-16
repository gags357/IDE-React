import React, { useState, useEffect } from 'react';
import Editor from './components/Editor'

function App() {
  const [code, setCode] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
          ${code}
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [code])

  return (
    <>
      <div className="top-pane">
        <Editor 
          displayName="CODE" 
          value={code}
          onChange={setCode}
        />
      </div>
      <div className="bottom-pane">
        <iframe 
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
