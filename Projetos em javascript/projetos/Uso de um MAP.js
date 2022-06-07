function mostraAdmins(map){
    let admins =[];
    for ([key, value] of map ) {              //o objetivo da função é buscar os valores (Admin) no map e
      if (value === 'Admin'){                  //  retornar apenas  os administradores.                                         
        admins.push(key);
        }
      }                                         
 
  return 'Os administradores são :'  +  admins;
}

function mostraUsuarios(map){
    let usuariosf =[];
    for ([key, value] of map ) {            //o objetivo da função é buscar os valores (user) no map e
    if (value === 'user'){                 //retornar apenas os usuários.
    usuariosf.push(key);
    }
  }
  return 'E estes são os usuários :'  +  usuariosf;
}

const usuarios = new Map();            //map alvo das funçoes.

usuarios.set('Ronald','Admin');
usuarios.set('Marcos','user');
usuarios.set('Barba','user');
usuarios.set('Vermelho','user');
usuarios.set('Camicase','user');
usuarios.set('Anderson','Admin');
usuarios.set('Samuel','Admin');
usuarios.set('Alfredo','user');
usuarios.set('Américo','Admin');
usuarios.set('Robson','user');
usuarios.set('Maria','Admin');
usuarios.set('João','user');
usuarios.set('José','user');
usuarios.set('Pedro','Admin');

console.log(mostraAdmins(usuarios))      //istrução para demosntrar no console o resultado das funções. 
console.log(mostraUsuarios(usuarios))
