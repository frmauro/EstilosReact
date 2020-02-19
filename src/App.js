import React from 'react';
import { Container, Head, BemVindo } from './styles';

function App() {
  return (
    <Container>
      <Head>
        <a>Projeto Styled</a>
      </Head>
      <BemVindo cor="00FF00">
        Bem vindo ao sistema
      </BemVindo>
    </Container>
  );
}

export default App;

/*
<div className="container">
     <header className="header">
       <a className="titulo">Projeto Styled</a>
     </header>
     <h1>Bem vindo ao sistema</h1>
</div>
*/
