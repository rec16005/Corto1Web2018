const state = {
  arrGraf: []
};


const render = lState =>  {
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  const ingresar = document.createElement('div');
  ingresar.className = 'ingresar';

  const txtIngresar = document.createElement('input');
  txtIngresar.className = 'txtIngresar';

  const btnGenerar = document.createElement('button');
  btnGenerar.className = 'btnGenerar';
  btnGenerar.innerHTML = 'GENERAR';

  root.appendChild(ingresar);
  ingresar.appendChild(txtIngresar);
  ingresar.appendChild(btnGenerar);

  const grafs = document.createElement('div');
  grafs.className = 'grafs';

  root.appendChild(grafs);

  btnGenerar.onclick = () =>{
    const date = new Date();
    if (txtIngresar.value == null || txtIngresar.value == ""){
      alert("Vacio");
    }
    else {
      
      state.arrGraf.unshift([txtIngresar.value, date]);
    }
      
    console.log(state.arrGraf)
    render(state);
  }

  for (let i = 0; i < state.arrGraf.length; i += 1) {
      const newGraf = document.createElement('div');
      newGraf.className = `Graf`;
      newGraf.innerHTML = state.arrGraf[i][1];
      const dibujo = document.createElement('div');
      dibujo.className = 'dibujo';
      a = parseInt(state.arrGraf[i][0]);

      for (let x = 0; x < a; x += 1){
        const newSq = document.createElement('div');
        newSq.className = 'sq';
        dibujo.appendChild(newSq);
        console.log(x);
      }

      dibujo.innerHTML = a;
      newGraf.appendChild(dibujo);
      grafs.appendChild(newGraf);
  }

}

render(state);