import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
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
    )
}
