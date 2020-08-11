import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';

import data from './data';

function App() {
  return (
    <>
      <Section
        variant = "blue"
        title = {data[0].title}
        description = {data[0].description}
        buttonText = ""
      />

      <Section
        variant = "beige"
        title = {data[1].title}
        description = {data[1].description}
        buttonText = "Interagir"
      />

      <Section
        variant = "blue"
        title = {data[2].title}
        description = {data[2].description}
        buttonText = ""
      />

      <Section
        variant = "white"
        title = {data[3].title}
        description = {data[3].description}
        buttonText = "Interagir"
      />

      <Section
        variant = "black"
        title = {data[4].title}
        description = {data[4].description}
        buttonText = ""
      />



      <GlobalStyles />
    </>
  );
}

export default App;
