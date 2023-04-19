import './App.css';
import Container from './Comps/Container';
import Descrition from './Comps/Descrition';
import Title from './Comps/Title';
import Input from './Comps/Input';
import Button from './Comps/Button';
import Error from './Comps/Error';
import { MdOutlineSearch } from 'react-icons/md';
import { useState } from 'react';
import Password from './Comps/Password';

function App() {

  const [ Number , setNumber ] = useState(4);
  const [ Message, setMessage ] = useState({
    Status: true,
    Message: ''
  });
  const Encrypts = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [ Value, setValue ] = useState('');

  const changeNumberInInput = (e) => {
    if(e.target.validationMessage === ''){
      setValue('');
      setNumber(e.target.value)
      setMessage({
        Status: true,
        Message: ''
      })
    } else {
      setMessage({
        Status: false,
        Message: e.target.validationMessage
      })
    }
  }

  const Render = () => {
    var Resultado = '';
    for (let i = 0; i < Number; i++){
      const index = Math.floor(Math.random() * Encrypts.length);
      Resultado = Resultado + Encrypts[index];
    }
    setValue(Resultado)
  }

  return (
    <>
      <div className='h-full w-full py-[20px] bg-gradient-to-t from-[#fff] via-slate-100 to-slate-100'>
        <Container 
          Child={
            <>
              <Title 
                Text='Gerador de password'
              />

              <Descrition 
                Text={
                  <>
                    agora esta mais <span className='text-sky-500'> simples </span> de ter sua senha gerada aleatoriamente.
                  </>
                }
              />

              <Input 
                Number={Number}
                changeNumberInInput={changeNumberInInput}
              />

              {
                Message.Status === true ? '' : <Error Message={Message.Message}/>
              }

              <Button 
                Text={
                  <>
                    <span className='pt-[2px]'>Renderizar</span>
                    <span><MdOutlineSearch size='20'/></span>
                  </>
                }
                Func={Render}
              />

              <Password Value={Value}/>
              
            </>
          }/>
      </div>
    </>
  );
}

export default App;
