import {useState} from 'react';

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }


  let tabContent = <p>Choose a topic from the menu</p>;
  if (selectedTopic) {
    tabContent = (
      <div id = 'tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
       </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id = 'core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept key = {concept.title} {...concept} />
          ))}
        </ul>
        </section>
        <section id = 'examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton isClicked = {selectedTopic === 'components'} onClick = {() => handleClick('components')} label = 'Components' />
          <TabButton isClicked = {selectedTopic === 'jsx'} onClick = {() => handleClick('jsx')} label = 'JSX' />
          <TabButton isClicked = {selectedTopic === 'props'} onClick = {() => handleClick('props')} label = 'Props' />
          <TabButton isClicked = {selectedTopic === 'state'} onClick = {() => handleClick('state')} label = 'State' />
        </menu>
        {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
