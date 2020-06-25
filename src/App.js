import React, { useState, useEffect } from 'react';
import qs from 'qs'
import GlobalStyles from '../src/styles/GlobalStyles'
import  logo  from '../src/images/logo.svg'
import { Wrapper, Card, Templates,  Form, Button, GeneratedMeme } from '../src/styles/stlyes'
function App() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [boxes, setBoxes] = useState([])
  const [generatedMeme, setGeneratedMeme] = useState(null)
   useEffect(() => {
     (async () => {
       const resp = await fetch('https://api.imgflip.com/get_memes');
       const { data: { memes }} = await resp.json()
       setTemplates(memes)
     })();
   }, [])

   const handleInputChange = (index) => (e) =>{
     const newValues = boxes;
     newValues[index] = e.target.value;
     setBoxes(newValues)
   } 

   function handleSelectedTemplate(template) {
     setSelectedTemplate(template);
     setBoxes([]);
   }

   async function handleSubmit(e) {
     e.preventDefault();
     const params =  qs.stringify({
      template_id: selectedTemplate.id,
      username: 'senha123321',
      password: 'senha123321',
      boxes: boxes.map(text => ({ text })),
    })

     const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`);
     const { data } = await resp.json();
     setGeneratedMeme(data)

   }

   function handleReset() {
      setSelectedTemplate(null);
      setBoxes([]);
      setGeneratedMeme(null);
   }

  return (
    <>
    <GlobalStyles />
    <Wrapper>
      <img src={logo} alt="MemeMaker" />
      {generatedMeme &&
      <>
        <GeneratedMeme>
        <img src={generatedMeme.url} alt="Generated Meme"/>
        <Button onClick={handleReset}>
          Create other Meme
        </Button>
        <Button >
          <a href={generatedMeme.url} target="_blank">Download Meme</a>
        </Button>
        </GeneratedMeme>
      </>
      }
      {!generatedMeme && <Card>
      <h2>Select your meme:</h2>
        <Templates>
         {templates.map((template) => (
          <button 
            key={template.id}
            type="button"
            onClick={() => handleSelectedTemplate(template)}
            className={template.id === selectedTemplate?.id ? 'selected' : ''}
          >
            <img src={template.url} alt={template.name}/>
         </button>
         ))}
        
        </Templates>
       
      { selectedTemplate && 
      <>
        
        <Form onSubmit={handleSubmit}>
          {(new Array(selectedTemplate.box_count).fill('').map((_,i) =>(
            <input 
            key={String(Math.random())}
            type="text" placeholder={`Text ${i + 1}`}
            onChange={handleInputChange(i)} />
          )))}
          
            <Button>MakeMeme</Button>
        </Form> 
      </>}
      </Card>}

    </Wrapper>
    </>
  );
}

export default App;
