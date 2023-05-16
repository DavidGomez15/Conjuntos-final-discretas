const bntU = document.getElementById("btnSendU");
const btn1 = document.getElementById("uno");
const btn2 = document.getElementById("dos");
const btn3 = document.getElementById("tres");
const zone = document.getElementById("captureValuesConjunto");
const btnOpU = document.getElementById("btnU");
const btnOpI = document.getElementById("btnI");
const btnOpD = document.getElementById("btnD");
const btnOpC = document.getElementById("btnC");

let arrU = [];
function quitarpopup (){
  document.getElementById("zoneValuesU").classList.toggle("ver1")
  
}
bntU.addEventListener("click", () => {
  let longitud = document.getElementById("conjuntoU").value;
  const divValues2 = document.getElementById("zoneValuesU");
  if (longitud != "") {
    if (longitud <= 10) {
      const divElse = document.getElementById("elseIfinputIsEmpty2");
      divElse.innerHTML = "";
      longitud = parseInt(longitud);
      arrU = new Array(longitud); //array1
      console.log(arrU.length);
      while (divValues2.firstChild) {
        //remueve los objetos que se crean al momento de dar click
        divValues2.removeChild(divValues2.firstChild);
      }
      for (let index = 0; index < arrU.length; index++) {
        const labelIn = document.createElement("label");
        const text = document.createTextNode("Ingrese el valor " + (index + 1));
        labelIn.appendChild(text);
        const etiqueta = document.createElement("input");
        etiqueta.type = "text";
        etiqueta.id = "input2" + index;
        const etiqueta2 = document.createElement("br");
        divValues2.appendChild(labelIn);
        divValues2.appendChild(etiqueta);
        divValues2.appendChild(etiqueta2);
      }
      const btnSendValues2 = document.createElement("button");
      btnSendValues2.id = "btnSend";
      const textBtn = document.createTextNode("Registrar");
      btnSendValues2.appendChild(textBtn);
      divValues2.appendChild(btnSendValues2);
      btnSendValues2.addEventListener("click", () => {
        //registrar los valores en el arreglo
        for (let index = 0; index < arrU.length; index++) {
          let valorInput = document.getElementById("input2" + index);
          if (valorInput !== null) {
            arrU.push(valorInput.value);
          }
        }
        console.log(arrU);
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        quitarpopup();
        mostrarConjuntos2(arrU, "U");
      }); //fin de si se va a trabajar con dos conjuntos
    } else {
      const divElse = document.getElementById("elseIfinputIsEmpty2");
      const etiqueta = document.createElement("p");
      const miTexto = document.createTextNode(
        "Ingrese 10 valores o menos para poder registrar los valores"
      );
      etiqueta.appendChild(miTexto);
      divElse.appendChild(etiqueta);
    }
  } else {
    console.log("entre");
    while (divValues2.firstChild) {
      //remueve los objetos que se crean al momento de dar click
      divValues2.removeChild(divValues2.firstChild);
    }
    const divElse = document.getElementById("elseIfinputIsEmpty2");
    const etiqueta = document.createElement("p");
    const miTexto = document.createTextNode(
      "Por favor ingresa cuantos valores deseas agregar al conjunto"
    );
    etiqueta.appendChild(miTexto);
    divElse.appendChild(etiqueta);
  }
});

btn1.addEventListener("click", () => {
  while (zone.firstChild) {
    //remueve los objetos que se crean al momento de dar click
    zone.removeChild(zone.firstChild);
  }
  dataConjunto();
});

btn2.addEventListener("click", () => {
  while (zone.firstChild) {
    //remueve los objetos que se crean al momento de dar click
    zone.removeChild(zone.firstChild);
  }
  dataConjunto2();
});

btn3.addEventListener("click", () => {
  while (zone.firstChild) {
    //remueve los objetos que se crean al momento de dar click
    zone.removeChild(zone.firstChild);
  }
  dataConjunto3();
});

function dataConjunto() {
  const label = document.createElement("label");
  const text = document.createTextNode(
    "Cuantos valores desea agregar en el conjunto "
  );
  label.appendChild(text);
  const input = document.createElement("input");
  input.id = "cantidadValores";
  const btn = document.createElement("button");
  const space = document.createElement("br");
  const textBtn = document.createTextNode("Enviar");
  btn.appendChild(textBtn);
  btn.id = "send";
  zone.appendChild(label);
  zone.appendChild(input);
  zone.appendChild(btn);
  zone.appendChild(space);
  const btnSend = document.getElementById("send");
  btnSend.addEventListener("click", () => {
    let longitud = document.getElementById("cantidadValores").value;
    const divValues = document.getElementById("zoneValues");
    if (longitud != "") {
      if (longitud <= 10) {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        divElse.innerHTML = "";
        longitud = parseInt(longitud);
        let arr = new Array(longitud); //array1
        console.log(arr.length);
        while (divValues.firstChild) {
          //remueve los objetos que se crean al momento de dar click
          divValues.removeChild(divValues.firstChild);
        }
        for (let index = 0; index < arr.length; index++) {
          const labelIn = document.createElement("label");
          const text = document.createTextNode(
            "Ingrese el valor " + (index + 1)
          );
          labelIn.appendChild(text);
          const etiqueta = document.createElement("input");
          etiqueta.type = "text";
          etiqueta.id = "input" + index;
          const etiqueta2 = document.createElement("br");
          divValues.appendChild(labelIn);
          divValues.appendChild(etiqueta);
          divValues.appendChild(etiqueta2);
        }
        const btnSendValues = document.createElement("button");
        btnSendValues.id = "btnSend";
        const textBtn = document.createTextNode("Registrar");
        btnSendValues.appendChild(textBtn);
        divValues.appendChild(btnSendValues);
        btnSendValues.addEventListener("click", () => {
          //registrar los valores en el arreglo
          for (let index = 0; index < arr.length; index++) {
            let valorInput = document.getElementById("input" + index);
            if (valorInput !== null) {
              arr.push(valorInput.value);
            }
          }
          console.log(arr);
          mostrarConjuntos(arr, "A");
          btnOpC.disabled = false;
          btnOpC.addEventListener("click", () => {
            complemento2(arrU, arr, "A'");
            complemento3(arrU, arr, "U'");
          });
        }); //fin de si se va a trabajar con dos conjuntos
      } else {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        const etiqueta = document.createElement("p");
        const miTexto = document.createTextNode(
          "Ingrese 10 valores o menos para poder registrar los valores"
        );
        etiqueta.appendChild(miTexto);
        divElse.appendChild(etiqueta);
      }
    } else {
      console.log("entre");
      while (divValues.firstChild) {
        //remueve los objetos que se crean al momento de dar click
        divValues.removeChild(divValues.firstChild);
      }
      const divElse = document.getElementById("elseIfinputIsEmpty");
      const etiqueta = document.createElement("p");
      const miTexto = document.createTextNode(
        "Por favor ingresa cuantos valores deseas agregar al conjunto"
      );
      etiqueta.appendChild(miTexto);
      divElse.appendChild(etiqueta);
    }
  });
}

function dataConjunto2() {
  let arr1;
  let arr2;
  const label = document.createElement("label");
  const text = document.createTextNode(
    "Cuantos valores desea agregar en el conjunto 1"
  );
  label.appendChild(text);
  const input = document.createElement("input");
  input.id = "cantidadValores";
  const btn = document.createElement("button");
  const space = document.createElement("br");
  const textBtn = document.createTextNode("Enviar");
  btn.appendChild(textBtn);
  btn.id = "send";
  zone.appendChild(label);
  zone.appendChild(input);
  zone.appendChild(btn);
  zone.appendChild(space);

  const btnSend = document.getElementById("send");

  /////
  const label2 = document.createElement("label");
  const text2 = document.createTextNode(
    "Cuantos valores desea agregar en el conjunto 2"
  );
  label2.appendChild(text2);
  const input2 = document.createElement("input");
  input2.id = "cantidadValores2";
  const btn2 = document.createElement("button");
  const space2 = document.createElement("br");
  const textBtn2 = document.createTextNode("Enviar");
  btn2.appendChild(textBtn2);
  btn2.id = "send2";
  zone.appendChild(label2);
  zone.appendChild(input2);
  zone.appendChild(btn2);
  zone.appendChild(space2);
  const btnSend2 = document.getElementById("send2");
  btnSend2.addEventListener("click", () => {
    console.log("conjunto 1");
    let longitud = document.getElementById("cantidadValores2").value;
    const divValues = document.getElementById("zoneValues");
    if (longitud != "") {
      if (longitud <= 10) {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        divElse.innerHTML = "";
        longitud = parseInt(longitud);
        arr2 = new Array(longitud);
        console.log(arr2.length);
        while (divValues.firstChild) {
          //remueve los objetos que se crean al momento de dar click
          divValues.removeChild(divValues.firstChild);
        }
        for (let index = 0; index < arr2.length; index++) {
          const labelIn = document.createElement("label");
          const text = document.createTextNode(
            "Ingrese el valor " + (index + 1)
          );
          labelIn.appendChild(text);
          const etiqueta = document.createElement("input");
          etiqueta.type = "text";
          etiqueta.id = "input" + index;
          const etiqueta2 = document.createElement("br");
          divValues.appendChild(labelIn);
          divValues.appendChild(etiqueta);
          divValues.appendChild(etiqueta2);
        }
        const btnSendValues = document.createElement("button");
        btnSendValues.id = "btnSend";
        const textBtn = document.createTextNode("Registrar");
        btnSendValues.appendChild(textBtn);
        divValues.appendChild(btnSendValues);
        btnSendValues.addEventListener("click", () => {
          //registrar los valores en el arreglo
          for (let index = 0; index < arr2.length; index++) {
            let valorInput = document.getElementById("input" + index);
            if (valorInput !== null) {
              arr2.push(valorInput.value);
            }
          }
          console.log(arr2);
          mostrarConjuntos(arr2, "B");
          btnOpU.disabled = false;
          btnOpI.disabled = false;
          btnOpD.disabled = false;
          btnOpC.disabled = false;
          btnOpU.addEventListener("click", () => {
            union(arr1, arr2);
          });
          btnOpI.addEventListener("click", () => {
            interseccion(arr1, arr2);
          });
          btnOpD.addEventListener("click", () => {
            diferencia(arr1, arr2, 1);
            diferencia(arr1, arr2, 2);
          });

          btnOpC.addEventListener("click", () => {
            complemento2(arr1, arr2, "B'");
            complemento3(arr1, arr2, "A'");
          });
          //btnFunction(arr1, arr2, 1);
        }); //fin de si se va a trabajar con dos conjuntos
      } else {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        const etiqueta = document.createElement("p");
        const miTexto = document.createTextNode(
          "Ingrese 10 valores o menos para poder registrar los valores"
        );
        etiqueta.appendChild(miTexto);
        divElse.appendChild(etiqueta);
      }
    } else {
      console.log("entre");
      while (divValues.firstChild) {
        //remueve los objetos que se crean al momento de dar click
        divValues.removeChild(divValues.firstChild);
      }
      const divElse = document.getElementById("elseIfinputIsEmpty");
      const etiqueta = document.createElement("p");
      const miTexto = document.createTextNode(
        "Por favor ingresa cuantos valores deseas agregar al conjunto"
      );
      etiqueta.appendChild(miTexto);
      divElse.appendChild(etiqueta);
    }
  });

  ///
  btnSend.addEventListener("click", () => {
    let longitud = document.getElementById("cantidadValores").value;
    const divValues = document.getElementById("zoneValues");
    if (longitud != "") {
      if (longitud <= 10) {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        divElse.innerHTML = "";
        longitud = parseInt(longitud);
        arr1 = new Array(longitud); //array1
        console.log(arr1.length);
        while (divValues.firstChild) {
          //remueve los objetos que se crean al momento de dar click
          divValues.removeChild(divValues.firstChild);
        }
        for (let index = 0; index < arr1.length; index++) {
          const labelIn = document.createElement("label");
          const text = document.createTextNode(
            "Ingrese el valor " + (index + 1)
          );
          labelIn.appendChild(text);
          const etiqueta = document.createElement("input");
          etiqueta.type = "text";
          etiqueta.id = "input" + index;
          const etiqueta2 = document.createElement("br");
          divValues.appendChild(labelIn);
          divValues.appendChild(etiqueta);
          divValues.appendChild(etiqueta2);
        }
        const btnSendValues = document.createElement("button");
        btnSendValues.id = "btnSend";
        const textBtn = document.createTextNode("Registrar");
        btnSendValues.appendChild(textBtn);
        divValues.appendChild(btnSendValues);
        btnSendValues.addEventListener("click", () => {
          //registrar los valores en el arreglo
          for (let index = 0; index < arr1.length; index++) {
            let valorInput = document.getElementById("input" + index);
            if (valorInput !== null) {
              arr1.push(valorInput.value);
            }
          }
          console.log(arr1);
          mostrarConjuntos(arr1, "A");
        }); //fin de si se va a trabajar con dos conjuntos
      } else {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        const etiqueta = document.createElement("p");
        const miTexto = document.createTextNode(
          "Ingrese 10 valores o menos para poder registrar los valores"
        );
        etiqueta.appendChild(miTexto);
        divElse.appendChild(etiqueta);
      }
    } else {
      console.log("entre");
      while (divValues.firstChild) {
        //remueve los objetos que se crean al momento de dar click
        divValues.removeChild(divValues.firstChild);
      }
      const divElse = document.getElementById("elseIfinputIsEmpty");
      const etiqueta = document.createElement("p");
      const miTexto = document.createTextNode(
        "Por favor ingresa cuantos valores deseas agregar al conjunto"
      );
      etiqueta.appendChild(miTexto);
      divElse.appendChild(etiqueta);
    }
  });
}

//funcion cuando se va a trabajar con tres conjuntos
function dataConjunto3() {
  let arr1;
  let arr2;
  let arr3;
  const label = document.createElement("label");
  const text = document.createTextNode(
    "Cuantos valores desea agregar en el conjunto 1"
  );
  label.appendChild(text);
  const input = document.createElement("input");
  input.id = "cantidadValores";
  const btn = document.createElement("button");
  const space = document.createElement("br");
  const textBtn = document.createTextNode("Enviar");
  btn.appendChild(textBtn);
  btn.id = "send";
  zone.appendChild(label);
  zone.appendChild(input);
  zone.appendChild(btn);
  zone.appendChild(space);

  const btnSend = document.getElementById("send");

  /////
  const label2 = document.createElement("label");
  const text2 = document.createTextNode(
    "Cuantos valores desea agregar en el conjunto 2"
  );
  label2.appendChild(text2);
  const input2 = document.createElement("input");
  input2.id = "cantidadValores2";
  const btn2 = document.createElement("button");
  const space2 = document.createElement("br");
  const textBtn2 = document.createTextNode("Enviar");
  btn2.appendChild(textBtn2);
  btn2.id = "send2";
  zone.appendChild(label2);
  zone.appendChild(input2);
  zone.appendChild(btn2);
  zone.appendChild(space2);
  const btnSend2 = document.getElementById("send2");
  btnSend2.addEventListener("click", () => {
    console.log("conjunto 2");
    let longitud = document.getElementById("cantidadValores2").value;
    const divValues = document.getElementById("zoneValues");
    if (longitud != "") {
      if (longitud <= 10) {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        divElse.innerHTML = "";
        longitud = parseInt(longitud);
        arr2 = new Array(longitud);
        console.log(arr2.length);
        while (divValues.firstChild) {
          //remueve los objetos que se crean al momento de dar click
          divValues.removeChild(divValues.firstChild);
        }
        for (let index = 0; index < arr2.length; index++) {
          const labelIn = document.createElement("label");
          const text = document.createTextNode(
            "Ingrese el valor " + (index + 1)
          );
          labelIn.appendChild(text);
          const etiqueta = document.createElement("input");
          etiqueta.type = "text";
          etiqueta.id = "input" + index;
          const etiqueta2 = document.createElement("br");
          divValues.appendChild(labelIn);
          divValues.appendChild(etiqueta);
          divValues.appendChild(etiqueta2);
        }
        const btnSendValues = document.createElement("button");
        btnSendValues.id = "btnSend";
        const textBtn = document.createTextNode("Registrar");
        btnSendValues.appendChild(textBtn);
        divValues.appendChild(btnSendValues);
        btnSendValues.addEventListener("click", () => {
          //registrar los valores en el arreglo
          for (let index = 0; index < arr2.length; index++) {
            let valorInput = document.getElementById("input" + index);
            if (valorInput !== null) {
              arr2.push(valorInput.value);
            }
          }
          console.log(arr2);
          mostrarConjuntos(arr2, "B");
        }); //fin de si se va a trabajar con dos conjuntos
      } else {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        const etiqueta = document.createElement("p");
        const miTexto = document.createTextNode(
          "Ingrese 10 valores o menos para poder registrar los valores"
        );
        etiqueta.appendChild(miTexto);
        divElse.appendChild(etiqueta);
      }
    } else {
      console.log("entre");
      while (divValues.firstChild) {
        //remueve los objetos que se crean al momento de dar click
        divValues.removeChild(divValues.firstChild);
      }
      const divElse = document.getElementById("elseIfinputIsEmpty");
      const etiqueta = document.createElement("p");
      const miTexto = document.createTextNode(
        "Por favor ingresa cuantos valores deseas agregar al conjunto"
      );
      etiqueta.appendChild(miTexto);
      divElse.appendChild(etiqueta);
    }
  });
  ///

  //aqui empieza la pedida de data  del conjunto 3

  const label3 = document.createElement("label");
  const text3 = document.createTextNode(
    "Cuantos valores desea agregar en el conjunto 3"
  );
  label3.appendChild(text3);
  const input3 = document.createElement("input");
  input3.id = "cantidadValores3";
  const btn3 = document.createElement("button");
  const space3 = document.createElement("br");
  const textBtn3 = document.createTextNode("Enviar");
  btn3.appendChild(textBtn3);
  btn3.id = "send3";
  zone.appendChild(label3);
  zone.appendChild(input3);
  zone.appendChild(btn3);
  zone.appendChild(space3);

  const btnSend3 = document.getElementById("send3");
  btnSend3.addEventListener("click", () => {
    let longitud = document.getElementById("cantidadValores3").value;
    const divValues = document.getElementById("zoneValues");
    if (longitud != "") {
      if (longitud <= 10) {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        divElse.innerHTML = "";
        longitud = parseInt(longitud);
        arr3 = new Array(longitud);
        console.log(arr3.length);
        while (divValues.firstChild) {
          //remueve los objetos que se crean al momento de dar click
          divValues.removeChild(divValues.firstChild);
        }
        for (let index = 0; index < arr3.length; index++) {
          const labelIn = document.createElement("label");
          const text = document.createTextNode(
            "Ingrese el valor " + (index + 1)
          );
          labelIn.appendChild(text);
          const etiqueta = document.createElement("input");
          etiqueta.type = "text";
          etiqueta.id = "input" + index;
          const etiqueta2 = document.createElement("br");
          divValues.appendChild(labelIn);
          divValues.appendChild(etiqueta);
          divValues.appendChild(etiqueta2);
        }
        const btnSendValues = document.createElement("button");
        btnSendValues.id = "btnSend";
        const textBtn = document.createTextNode("Registrar");
        btnSendValues.appendChild(textBtn);
        divValues.appendChild(btnSendValues);
        btnSendValues.addEventListener("click", () => {
          //registrar los valores en el arreglo
          for (let index = 0; index < arr3.length; index++) {
            let valorInput = document.getElementById("input" + index);
            if (valorInput !== null) {
              arr3.push(valorInput.value);
            }
          }
          console.log(arr3);
          mostrarConjuntos(arr3, "C");
          btnOpU.disabled = false;
          btnOpI.disabled = false;
          btnOpD.disabled = false;
          btnOpC.disabled = false;
          btnOpU.addEventListener("click", () => {
            union2(arr1, arr2, arr3);
          });
          btnOpI.addEventListener("click", () => {
            interseccion2(arr1, arr2, arr3);
          });
          btnOpD.addEventListener("click", () => {
            diferencia2(arr1, arr2, arr3, 1);
            diferencia2(arr1, arr2, arr3, 2);
            diferencia2(arr1, arr2, arr3, 3);
            diferencia2(arr1, arr2, arr3, 4);
            diferencia2(arr1, arr2, arr3, 5);
            diferencia2(arr1, arr2, arr3, 6);
          });
          btnOpC.addEventListener("click", () => {
            complementoA(arr1, arr2, arr3, "A'");
            complementoB(arr1, arr2, arr3, "B'");
            complementoC(arr1, arr2, arr3, "C'");
          });
        }); //fin de si se va a trabajar con dos conjuntos
      } else {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        const etiqueta = document.createElement("p");
        const miTexto = document.createTextNode(
          "Ingrese 10 valores o menos para poder registrar los valores"
        );
        etiqueta.appendChild(miTexto);
        divElse.appendChild(etiqueta);
      }
    } else {
      console.log("entre");
      while (divValues.firstChild) {
        //remueve los objetos que se crean al momento de dar click
        divValues.removeChild(divValues.firstChild);
      }
      const divElse = document.getElementById("elseIfinputIsEmpty");
      const etiqueta = document.createElement("p");
      const miTexto = document.createTextNode(
        "Por favor ingresa cuantos valores deseas agregar al conjunto"
      );
      etiqueta.appendChild(miTexto);
      divElse.appendChild(etiqueta);
    }
  });

  //aqui termina la pedida de data del conjunto 3

  btnSend.addEventListener("click", () => {
    let longitud = document.getElementById("cantidadValores").value;
    const divValues = document.getElementById("zoneValues");
    if (longitud != "") {
      if (longitud <= 10) {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        divElse.innerHTML = "";
        longitud = parseInt(longitud);
        arr1 = new Array(longitud); //array1
        console.log(arr1.length);
        while (divValues.firstChild) {
          //remueve los objetos que se crean al momento de dar click
          divValues.removeChild(divValues.firstChild);
        }
        for (let index = 0; index < arr1.length; index++) {
          const labelIn = document.createElement("label");
          const text = document.createTextNode(
            "Ingrese el valor " + (index + 1)
          );
          labelIn.appendChild(text);
          const etiqueta = document.createElement("input");
          etiqueta.type = "text";
          etiqueta.id = "input" + index;
          const etiqueta2 = document.createElement("br");
          divValues.appendChild(labelIn);
          divValues.appendChild(etiqueta);
          divValues.appendChild(etiqueta2);
        }
        const btnSendValues = document.createElement("button");
        btnSendValues.id = "btnSend";
        const textBtn = document.createTextNode("Registrar");
        btnSendValues.appendChild(textBtn);
        divValues.appendChild(btnSendValues);
        btnSendValues.addEventListener("click", () => {
          //registrar los valores en el arreglo
          for (let index = 0; index < arr1.length; index++) {
            let valorInput = document.getElementById("input" + index);
            if (valorInput !== null) {
              arr1.push(valorInput.value);
            }
          }
          console.log(arr1);
          mostrarConjuntos(arr1, "A");
        }); //fin de si se va a trabajar con dos conjuntos
      } else {
        const divElse = document.getElementById("elseIfinputIsEmpty");
        const etiqueta = document.createElement("p");
        const miTexto = document.createTextNode(
          "Ingrese 10 valores o menos para poder registrar los valores"
        );
        etiqueta.appendChild(miTexto);
        divElse.appendChild(etiqueta);
      }
    } else {
      console.log("entre");
      while (divValues.firstChild) {
        //remueve los objetos que se crean al momento de dar click
        divValues.removeChild(divValues.firstChild);
      }
      const divElse = document.getElementById("elseIfinputIsEmpty");
      const etiqueta = document.createElement("p");
      const miTexto = document.createTextNode(
        "Por favor ingresa cuantos valores deseas agregar al conjunto"
      );
      etiqueta.appendChild(miTexto);
      divElse.appendChild(etiqueta);
    }
  });
}

function mostrarConjuntos(arr, name) {
  const zone = document.getElementById("showCon");
  const espacio = document.createElement("br");
  arr = arr.filter(function (elemento) {
    return elemento !== undefined;
  });
  zone.innerHTML += name += " = ";
  zone.innerHTML += "{ ";
  for (let index = 0; index < arr.length; index++) {
    zone.innerHTML += arr[index] + " ";
  }
  zone.innerHTML += " }";
  zone.appendChild(espacio);
}

function mostrarConjuntos2(arr, name) {
  const zone = document.getElementById("showValuesConU");
  const espacio = document.createElement("br");
  arr = arr.filter(function (elemento) {
    return elemento !== undefined;
  });
  zone.innerHTML += name += " = { ";
  for (let index = 0; index < arr.length; index++) {
    zone.innerHTML += arr[index] + " ";
  }
  zone.innerHTML += " }";
  zone.appendChild(espacio);
}

function mostrarOp(arr) {
  const zone = document.getElementById("showOp");
  const espacio = document.createElement("br");
  arr = arr.filter(function (elemento) {
    return elemento !== undefined;
  });
  zone.innerHTML += "{ ";
  for (let index = 0; index < arr.length; index++) {
    zone.innerHTML += arr[index] + " ";
  }
  zone.innerHTML += " }";
  zone.appendChild(espacio);
}

function mostrarOpU(arr) {
  const zone = document.getElementById("showOp");
  const espacio = document.createElement("br");
  arr = arr.filter(function (elemento) {
    return elemento !== undefined;
  });
  zone.innerHTML += "A u B = { ";
  for (let index = 0; index < arr.length; index++) {
    zone.innerHTML += arr[index] + " ";
  }
  zone.innerHTML += " }";
  zone.appendChild(espacio);
}
function mostrarOpU2(arr) {
  const zone = document.getElementById("showOp");
  const espacio = document.createElement("br");
  arr = arr.filter(function (elemento) {
    return elemento !== undefined;
  });
  zone.innerHTML += "A u B u C = { ";
  for (let index = 0; index < arr.length; index++) {
    zone.innerHTML += arr[index] + " ";
  }
  zone.innerHTML += " }";
  zone.appendChild(espacio);
}

function mostrarOpI(arr) {
  const zone = document.getElementById("showOp");
  const espacio = document.createElement("br");
  arr = arr.filter(function (elemento) {
    return elemento !== undefined;
  });
  zone.innerHTML += "A ∩ B = { ";
  for (let index = 0; index < arr.length; index++) {
    zone.innerHTML += arr[index] + " ";
  }
  zone.innerHTML += " }";
  zone.appendChild(espacio);
}

function mostrarOpI2(arr) {
  const zone = document.getElementById("showOp");
  const espacio = document.createElement("br");
  arr = arr.filter(function (elemento) {
    return elemento !== undefined;
  });
  zone.innerHTML += "A ∩ B ∩ C = { ";
  for (let index = 0; index < arr.length; index++) {
    zone.innerHTML += arr[index] + " ";
  }
  zone.innerHTML += " }";
  zone.appendChild(espacio);
}

function mostrarOpD(arr, name1, name2) {
  const zone = document.getElementById("showOp");
  const espacio = document.createElement("br");
  arr = arr.filter(function (elemento) {
    return elemento !== undefined;
  });
  zone.innerHTML += name1;
  zone.innerHTML += " - ";
  zone.innerHTML += name2 += " = { ";
  for (let index = 0; index < arr.length; index++) {
    zone.innerHTML += arr[index] + " ";
  }
  zone.innerHTML += " }";
  zone.appendChild(espacio);
}

function mostrarOpC(arr, name) {
  const zone = document.getElementById("showOp");
  const espacio = document.createElement("br");
  arr = arr.filter(function (elemento) {
    return elemento !== undefined;
  });
  zone.innerHTML += name += " = { ";
  for (let index = 0; index < arr.length; index++) {
    zone.innerHTML += arr[index] + " ";
  }
  zone.innerHTML += " }";
  zone.appendChild(espacio);
}

//union entre dos conjuntos
function union(arr, arr2) {
  //a u b
  let arrU = [];
  for (let index = 0; index < arr.length; index++) {
    if (!arrU.includes(arr[index])) {
      arrU.push(arr[index]);
    }
  }
  for (let index = 0; index < arr2.length; index++) {
    if (!arrU.includes(arr2[index])) {
      arrU.push(arr2[index]);
    }
  }
  mostrarOpU(arrU);
}

//union entre tres conjuntos
function union2(arr, arr2, arr3) {
  // a u b u c
  let arrU = [];
  for (let index = 0; index < arr.length; index++) {
    if (!arrU.includes(arr[index])) {
      arrU.push(arr[index]);
    }
  }
  for (let index = 0; index < arr2.length; index++) {
    if (!arrU.includes(arr2[index])) {
      arrU.push(arr2[index]);
    }
  }
  for (let index = 0; index < arr3.length; index++) {
    if (!arrU.includes(arr3[index])) {
      arrU.push(arr3[index]);
    }
  }
  mostrarOpU2(arrU);
}

//interseccion entre dos conjuntos
function interseccion(arr, arr2) {
  //a ∩ b
  let arrI = [];
  let sumaLongitudes = arr.length + arr2.length;
  for (let index = 0; index < sumaLongitudes; index++) {
    if (arr2.includes(arr[index]) && !arrI.includes(arr[index])) {
      arrI.push(arr[index]);
    }
  }
  mostrarOpI(arrI);
}

//interseccion entre tres conjuntos
function interseccion2(arr, arr2, arr3) {
  //a ∩ b ∩ c
  let arrI = [];
  let sumaLongitudes = arr.length + arr2.length + arr3.length;
  for (let index = 0; index < sumaLongitudes; index++) {
    if (arr2.includes(arr[index]) && arr3.includes(arr[index])) {
      arrI.push(arr[index]);
    }
  }
  mostrarOpI2(arrI);
}

//difetencia entre dos conjuntos
function diferencia(array1, array2, op) {
  let arrD = [];
  if (op === 1) {
    //a-b
    const unicos = [...new Set([...array1, ...array2])];
    const sinRepetidos = unicos.filter((item) => !array2.includes(item));
    arrD = sinRepetidos;
    mostrarOpD(arrD, "A", "B");
  } else if (op === 2) {
    //b-a
    const unicos = [...new Set([...array1, ...array2])];
    const sinRepetidos = unicos.filter((item) => !array1.includes(item));
    arrD = sinRepetidos;
    mostrarOpD(arrD, "B", "A");
  }
}

//diferencia entre tres conjuntos
function diferencia2(array1, array2, array3, op) {
  let arrD = [];
  if (op === 1) {
    //a-b
    const unicos = [...new Set([...array1, ...array2])];
    const sinRepetidos = unicos.filter((item) => !array2.includes(item));
    arrD = sinRepetidos;
    mostrarOpD(arrD, "A", "B");
  } else if (op === 2) {
    //b-a
    const unicos = [...new Set([...array1, ...array2])];
    const sinRepetidos = unicos.filter((item) => !array1.includes(item));
    arrD = sinRepetidos;
    mostrarOpD(arrD, "B", "A");
  } else if (op === 3) {
    //a-c
    const unicos = [...new Set([...array1, ...array3])];
    const sinRepetidos = unicos.filter((item) => !array1.includes(item));
    arrD = sinRepetidos;
    mostrarOpD(arrD, "A", "C");
  } else if (op === 4) {
    //c-a
    const unicos = [...new Set([...array1, ...array3])];
    const sinRepetidos = unicos.filter((item) => !array3.includes(item));
    arrD = sinRepetidos;
    mostrarOpD(arrD, "C", "A");
  } else if (op === 5) {
    //b-c
    const unicos = [...new Set([...array2, ...array3])];
    const sinRepetidos = unicos.filter((item) => !array2.includes(item));
    arrD = sinRepetidos;
    mostrarOpD(arrD, "B", "C");
  } else if (op === 6) {
    //c-b
    const unicos = [...new Set([...array2, ...array3])];
    const sinRepetidos = unicos.filter((item) => !array3.includes(item));
    arrD = sinRepetidos;
    mostrarOpD(arrD, "C", "B");
  }
}

//complemento de b
function complemento2(array1, array2, name) {
  let arrC = [];
  array1.forEach((element) => {
    if (!array2.includes(element)) {
      arrC.push(element);
    }
  });
  mostrarOpC(arrC, name);
}

//complemento de a
function complemento3(array1, array2, name) {
  let arrC = [];
  array2.forEach((element) => {
    if (!array1.includes(element)) {
      arrC.push(element);
    }
  });
  mostrarOpC(arrC, name);
}

//complemento de c
function complemento4(array1, array2, array3, name) {
  let arrC = [];
  array2.forEach((element) => {
    if (!array1.includes(element) && !array3.includes(element)) {
      arrC.push(element);
    }
  });
  mostrarOpC(arrC, name);
}

function complementoA(array1, array2, array3, nam) {
  const combinedArray = array2.concat(array3);
  const missingValuesSet = new Set(
    combinedArray.filter((value) => !array1.includes(value))
  );
  const missingValues = [...missingValuesSet];
  mostrarOpC(missingValues, nam);
}

function complementoB(array1, array2, array3, nam) {
  const combinedArray = array1.concat(array3);
  const missingValuesSet = new Set(
    combinedArray.filter((value) => !array2.includes(value))
  );
  const missingValues = [...missingValuesSet];
  mostrarOpC(missingValues, nam);
}

function complementoC(array1, array2, array3, nam) {
  const combinedArray = array1.concat(array2);
  const missingValuesSet = new Set(
    combinedArray.filter((value) => !array3.includes(value))
  );
  const missingValues = [...missingValuesSet];
  mostrarOpC(missingValues, nam);
}
