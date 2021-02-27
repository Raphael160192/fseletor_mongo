import React from 'react';

 class Navegacao extends React.Component {
   // function Navegacao(){
   render() {
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

<div className="bem-vindos">
         <div>
               <h2>Sejam bem vindos!</h2>
               <p>Aqui em nossa loja <b>progamador tem desconto...</b></p>
               </div>
            </div>

            
            </div>


      )
   }
}

export default Navegacao;