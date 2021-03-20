import { render } from 'react-dom';
import { App } from './App'

//  O render recebe dois parâmetros, oque eu quero exibir em tela e o segundo em qual elemento eu quero renderizar
render(<App />, document.getElementById('root'))

// Quando utilizamos Typescript precisamos incluir as definições de tipos das bibliotecas