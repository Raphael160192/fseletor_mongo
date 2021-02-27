
import React from 'react';
import Zap from './Zap.jpg';
import Email from './Email.png';
import {useState, useEffect} from 'react'; 
// class Formulario extends React.Component {
   function Navegacao(){
      const [mensagens, setMensagens ] = useState([]);
      const [render, setRender] = useState(false);
      const [msg, setMsg] = useState(false);
      const [name , setName] = useState('');
      const [message, setMessage] = useState('');
  

      React.useEffect(async () => {
         const url = "http://localhost:8080/comentario";
         const response = await fetch(url);
         setMensagens(await response.json());
     }, [render]);
 
      
      
      async function envioMensagem(event) {
            event.preventDefault();
            let formData = {
               nome: name,
               msg:message,
            }
            ;  
            const url = "http://localhost:/8080/comentario";

            fetch(url, {
               method: "POST",
               headers: {"Content-Type":"application/json"},
               body: JSON.stringify(formData)
            }).then((response) => response.json()).then((dados) => {
               setRender(!render);
               setMsg(dados);

               setTimeout(() => {
                  setMsg(false)
               }, 3000);

            });
      }

      return (
         <div>
            <header>
 
            <div className="navbar container-fluid">
               <a className="link" href="Navegacao">FullStack Eletro</a>
               <a className="link" href="Produtos">Produto</a>
               <a className="link" href="Pedido">Pedido</a>
               <a className="link" href="Endereço">Loja</a>
               <a className="link" href="Formulario">Contato</a>
            </div>

</header>
         <div className="container titulo-contato">

            <h1>Contato</h1>

         </div>
            <div onSubmit={envioMensagem} className="container">
               <div class="row ml-5">
                  <img src={Email} alt="Email" className="logocontato" />
                  <div className="col">contato@fullstackeletro.com</div>

                  <img src={Zap} alt="Zap" className="logocontato" />
                  <div className="col">11 99999-9999</div>
               </div><br ></br>

               <div className="col">
                  <div className="input-group">
                     <form>
                        <label for="Nome">Nome</label>
                        <input type="text" className="form-control w-400 px-2" name="nome" placeholder="digite seu nome" value={name} onChange={event=>setName(event.target.value)}></input><br />
                        <label for="Mensagem">Mensagem</label>
                        <input type="Mensagem" className="form-control w-400 px-2" name="mensagem" placeholder="digite seu email" value={message} onChange={event=>setMessage(event.target.value)}></input><br />
                        <button type="submit" class="btn btn-danger  m-1">Enviar</button>
                     </form>
                  </div>
               </div>
            </div>
          
        {    
            msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
              Agradecemos por sua mensagem!
            </div>
          }

          <div className="col-lg-8 mx-auto">
            <div>
                  <div >
                    
                      {mensagens.map((item) =>{
                          return(
              
                              <div key={item.idcoment}>
                                  <div>
                                      Data: {item.data}
                                  </div>
                                  <div>
                                      Nome: {item.nome}
                                  </div>
                                  <div>
                                      Cliente {item.nome} escreveu: {item.msg}
                                  </div>
                                  <br/><br/>
                              </div>
                          )            
                      })}
                  </div>
              </div>
            </div>
         </div>
      );
 }


export default Navegacao;
