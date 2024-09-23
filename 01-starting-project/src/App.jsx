import TabButton from './components/TabButton/TabButton.jsx';
import  Header  from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import {CORE_CONCEPTS} from './data.js'
import { useState } from 'react';
import { EXAMPLES } from './data.js';
function App() {
  const [ selectedTopic, setSelectedTopic ]= useState();

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
  }    
  return (
    <div>
      <Header />      
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples"> 
        <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>Jsx</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>pleas select a topic.</p> : null}
          {selectedTopic ? 
          <div id="tab-content">
           
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> : null}
        </section>       
      </main>
    </div>
  );
}

export default App;
