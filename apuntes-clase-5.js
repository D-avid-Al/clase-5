function pesarCaja(caja) {
    caja <= 25 ? console.log(`La caja es liviana`) : console.log(`La caja es pesada`);
  }
  pesarCaja(25.1);
  
  /*-----------------------------------------------------------------------------------------------------------------------*/
  
  function test1() {
    let x = 0;
    let y = x++; //Primero se asigna el valor a la variable 'y' y luego se le suma 1
    let z = ++x; //Primero se le suma 1 y luego se asigna el valor a la variable 'z' 
  }
  test1();
  
  /*-----------------------------------------------------------------------------------------------------------------------*/
  
  let comprarML = function () {
    console.log(`Su compra ha sido realizada`);
  }
  comprarML();
  
  function sumar(n1, n2) {
    return n1 + n2;
  }
  function restar(n1, n2) {
    return n1 - n2;
  }
  function resolverOperacion(funcionOperador, n1, n2) {
    console.log(funcionOperador(n1, n2));
  }
  resolverOperacion(sumar, 3, 4);
  
  /*-----------------------------------------------------------------------------------------------------------------------*/
  
  const nuestroTitulo = document.querySelector('h1');
  console.log(nuestroTitulo);
  console.log(nuestroTitulo.innerText);
  nuestroTitulo.innerText = 'Hola r/David';
  
  /*-----------------------------------------------------------------------------------------------------------------------*/
  
  const mediaLinks = document.querySelectorAll('li');
  console.log(mediaLinks);
  
  for (let i = 0; i < mediaLinks.length; i++) {
    console.log(mediaLinks[i].innerText);
    mediaLinks[i].innerText = 'Chau';
  }
  
  /*-----------------------------------------------------------------------------------------------------------------------*/
  
  setInterval(function () {
    nuestroTitulo.innerText = String(Math.random());
  }, 1000);
  
  /*-----------------------------------------------------------------------------------------------------------------------*/
  
  const $botonIngreso = document.querySelector("#ingresar");
  
  $botonIngreso.onclick = function () {
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    let textoResultado;
  
    if (edadUsuario >= 18) {
      textoResultado = 'Podes ingresar';
    } else {
      textoResultado = 'No podes ingresar';
    }
  
    document.querySelector('#resultado').innerText = textoResultado;
    return false; //para manetener el resultado y no lo actualice la pagina
  
  
  }
  
  /*-----------------------------------------------------------------------------------------------------------------------*/
  
  
  
  /*-----------------------------------------------------------------------------------------------------------------------*/
  