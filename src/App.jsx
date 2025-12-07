import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  const [password, setPassword] = useState("")

    const copyToClipboard = () => {
      navigator.clipboard.writeText(password);
      alert("password copied to clipboard");
    }

    const [includeUppercase, setincludeUppercase] = useState(true) 
    const [includeLowercase, setincludeLowercase] = useState(true)
    const [includeNumbers, setincludeNumbers] = useState(true)
    const [includeSymbols, setincludeSymbols] = useState(true) 
    
    const generatePassword = () =>{
      let charset = '';
      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
      const lower = "abcdefghijklmnopqrstuvwxyz"
      const numbers = "0123456789"
      const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-="

      if(includeUppercase) charset += upper;
      if(includeLowercase) charset += lower;
      if(includeNumbers) charset += numbers;
      if(includeSymbols) charset += symbols;

      if(charset.length === 0){
        alert("Please select at least one option");
        return;
      } 

      let generatePassword = "";  

      for(let i = 0; i<length ; i++){
        const randomIndex = Math.floor(Math.random() * charset.length)  
        generatePassword += charset[randomIndex]
      }

      setPassword(generatePassword)
    }


  return (

    


    <>
      <div className='app'>
        <h1>password Generator</h1>
        <div className="output">
          <input type="text" 
          value={password}
          readOnly
           />
           <button onClick={copyToClipboard}>Copy</button>
        </div>

        <div className='controls'>
          <label htmlFor="">
            length: {length}
            <input type="range" min= "6" max= "20" value={length} onChange={(e) => setLength(e.target.value)}/>
          </label>

          <label >
            <input type="checkbox" checked = {includeUppercase} onChange={()=>setincludeUppercase(!includeUppercase)}/>
            Include Uppercase Letters
          </label>

          <label >
            <input type="checkbox" checked = {includeNumbers} onChange={()=>setincludeNumbers(!includeNumbers)}/>
            Include Numbers
          </label>

          <label >
            <input type="checkbox" checked = {includeLowercase} onChange={()=>setincludeLowercase(!includeLowercase)}/>
            Include lowercase letters
          </label>

          <label >
            <input type="checkbox" checked = {includeSymbols} onChange={()=>setincludeSymbols(!includeSymbols)}/>
            Include Symbols
          </label>


          <button className='generate-button' onClick={generatePassword}>Generate Password</button>

        </div>

      </div>
    </>
  )
}

export default App
