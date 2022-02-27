const form1 = document.form1.origen;

form1.addEventListener('click', function(){

  const sanM = form1[1];
  const florida = form1[2];
  const body = document.querySelector('body')
  let titulo2 = document.createElement('h2');
  

    if(form1.value == 'florida' && florida.disabled == false){

    const form2 = document.createElement('form');
    const camino = document.createElement('select');
    camino.name = 'camino';
    camino.id = 'camino';
    const opcion0 = document.createElement('option');
    opcion0.text = 'Selecciona tu camino'
    opcion0.disabled = true;
    opcion0.selected = true;
    const opcion1 = document.createElement('option');
    opcion1.value = 'porAld';
    opcion1.text = 'Por Alderetes';
    const opcion2 = document.createElement('option');
    opcion2.value = 'porPosse';
    opcion2.text = 'Por Posse';;
    


    titulo2.textContent = 'Elegi tu camino'
  
    camino.appendChild(opcion0);
    camino.appendChild(opcion1);
    camino.appendChild(opcion2);
    form2.appendChild(camino);
    body.appendChild(titulo2)
    body.appendChild(form2);

    form2.classList.add('contenedor')

    florida.disabled = true;
    sanM.disabled = false;

    camino.addEventListener('click', function(){

      let titulo3 = document.createElement('h2');

      titulo3.textContent = 'Elegi un horario'

      if(camino.value == 'porAld' && opcion1.disabled == false){

        form2.appendChild(titulo3);

        const horariosAld = document.createElement('select');

        
        horariosAld.name = 'horariosAld';
        horariosAld.id = 'horariosAld';

        const opcionAld0 =  document.createElement('option');
        opcionAld0.text = 'Selecciona un horario'
        opcionAld0.disabled = true;
        opcionAld0.selected = true;
        
        const opcionAld1 = document.createElement('option');
        opcionAld1.value = 'opcionAld1';
        opcionAld1.text = '06:00';

        const opcionAld2 = document.createElement('option');
        opcionAld2.value = 'opcionAld2'
        opcionAld2.text = '06:30'

        horariosAld.appendChild(opcionAld0);
        horariosAld.appendChild(opcionAld1);
        horariosAld.appendChild(opcionAld2);
        form2.appendChild(horariosAld);

        horariosAld.addEventListener('click', function(){
          
          let mostrarHorario = document.createElement('h3');

          if(horariosAld.value == 'opcionAld1' && opcionAld1.disabled == false){
            mostrarHorario.textContent = `Servicio de las ${opcionAld1.text} 
            Recorrido // Barrrio La Cancha - Cochuchal - San Miguel de Tucumán`

            form2.appendChild(mostrarHorario);

            opcionAld1.disabled = true;
            opcionAld2.disabled = false;
          }
          if(horariosAld.value == 'opcionAld2' && opcionAld2.disabled == false){
            mostrarHorario.textContent = `Servicio de las ${opcionAld2.text} 
            Recorrido // Barrrio La Cancha - Autopista - San Miguel de Tucumán`

            form2.appendChild(mostrarHorario);

            opcionAld1.disabled = false;
            opcionAld2.disabled = true;
          }
        })

        

        

         
          
        opcion1.disabled = true;
      
          
      }
        
    });

      
      
    
  }

    
    
});
