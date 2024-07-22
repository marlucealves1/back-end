//Paciência e uma boa prova, Que a Força esteja com você! 

import { v4 as uuidv4 } from 'uuid'; //Se não souber, não precisa usar.
import { URLSearchParams } from "node:url";
import cadastrar from "./cadastrar.js";
import { URLSearchParams } from "node:url"; 

const PORT = 3333

const server = createServer((resquest, response) => {
   const {url, method} = resquest;
  
   if(method === 'GET' && url === '/livro'){
    cadastrar((err,livros)=>{
        if(err){
        response.writeHead(500,{"Content-Type" : "aplication/json"})
        response.end(JSON.stringify({message:"Erro ao ler dados"}))
        return
        }
        response.writeHead(200,{"Content-Type" : "aplication/json"})
        response.end(JSON.stringify(livros))
    })
   }else if(method === 'POST' && url === '/livros'){
    
   }else if(method === 'GET' && url.startsWith('/id_livros/')){
    
   }else if(method === 'PUT' && url.startsWith('/descriçao/')){
    
   }else if(method === 'DELETE' && url.startsWith('/autores/')){
    
   }else if(method === 'GET' && url.startsWith('/editoras/')){
    
   }else if(method === 'GET' && url.startsWith('/cadastrar')){
 
    const urlParams =  URLSearchParams(url.split("?")[1])
    const termo = urlParams.get("termo")
    console.log(termo)
    cadastrar((err, livros)=>{
      if(err){
        response.writeHead(500,{'Content-Type' : 'application/json'})
        response.end(JSON.stringify({messge:"Erro ao ler dados dos livros"}))
        return
      }

      const resultado = livros.filter((livros) =>
      livros.nome.includes(termo) ||
      livros.categoria.includes(termo) ||
      livros.includes((termo) =>
      cadastrar.includes(termo)
      )
      
      ) ;
      if(resultado.lenght === 0){
        response.writeHead(404,{"Content_Type" : "application/json"})
        response.end(JSON.stringify({message:"Nao encontrado um livro com o termo"+termo}))
        return
      }
      response.writeHead(200, {"Content_Type" : "application/json"})
      response.end(resultado)
    })
    
   }else if(method === 'GET' && url.startsWith('/livros')){
    
   }else {
    response.writeHead(404, {'Content-Type': 'application/json'})
    response.end(JSON.stringify({message: 'livro não encontrada'}))
   }
})

server.listen(PORT, () => {
    console.log(`http//localhost:${PORT}`)
})
