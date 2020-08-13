import React from 'react';

import { 
     Container, 
     Content,
     HeaderWrapper,
     Header,
     DropBoxLogo,
} from './styles';

interface Props {
     variant: 'blue' | 'beige' | 'white' | 'black';
     title: string;
     description: string;
     buttonText: string;
}


const Section: React.FC<Props> = ({ variant, title, description, buttonText }) => {
     function handleToggle(){
          if (window.toggleActiveMenu) window.toggleActiveMenu();
     }
     
     return (
     <Container className={variant}>
          <HeaderWrapper>
               <Header>
                    <h1>
                         <DropBoxLogo/>
                         <span>Dropbox</span>
                    </h1>
                    <button onClick={handleToggle} >{buttonText === "" ? 'Acessar' : buttonText}</button>
               </Header>
          </HeaderWrapper>
          <Content>
               <h2>{title}</h2>
               <p>{description}</p>
          </Content>
     </Container>
  );
}

export default Section;