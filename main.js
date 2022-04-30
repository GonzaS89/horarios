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
    opcion0.text = 'Selecciona tú camino'
    opcion0.disabled = true;
    opcion0.selected = true;
    const opcion1 = document.createElement('option');
    opcion1.value = 'porAld';
    opcion1.text = 'Por Alderetes';
    const opcion2 = document.createElement('option');
    opcion2.value = 'porPosse';
    opcion2.text = 'Por Posse';;
    


    titulo2.textContent = '¿Por donde queres viajar?'
  
    camino.appendChild(opcion0);
    camino.appendChild(opcion1);
    camino.appendChild(opcion2);
    form2.appendChild(camino);
    body.appendChild(titulo2)
    body.appendChild(form2);

    form2.classList.add('contenedor');

    florida.disabled = true;
    

    camino.addEventListener('click', function(){

      let titulo3 = document.createElement('h2');

      titulo3.textContent = '¿En qué dia de la semana?'

      if(camino.value == 'porAld' && opcion1.disabled == false){

        
        const diasSemana = document.createElement('select');
        diasSemana.name = 'diasSemana';
        diasSemana.id = 'diasSemana';

        const opcionDia0 =  document.createElement('option');
        opcionDia0.text = 'Selecciona una opcion'
        opcionDia0.disabled = true;
        opcionDia0.selected = true;
        
        const opcionDia1 = document.createElement('option');
        opcionDia1.value = 'lunesViernes';
        opcionDia1.text = 'Lunes a Viernes';

        const opcionDia2 = document.createElement('option');
        opcionDia2.value = 'sabados'
        opcionDia2.text = 'Sábados'

        const opcionDia3 = document.createElement('option');
        opcionDia3.value = 'domingos'
        opcionDia3.text = 'Domingos'

        diasSemana.appendChild(opcionDia0);
        diasSemana.appendChild(opcionDia1);
        diasSemana.appendChild(opcionDia2);
        diasSemana.appendChild(opcionDia3);
        
        form2.appendChild(diasSemana);
        body.appendChild(titulo3);
        body.appendChild(diasSemana);

        diasSemana.addEventListener('click', function(){

          let titulo4 = document.createElement('h2');

          titulo4.textContent = '¿Qué horario buscas?';

          if (diasSemana.value == 'lunesViernes' && opcionDia1.disabled == false){

            opcionDia1.disabled = true;

            const horariosFloAldSM1 = document.createElement('select');
            horariosFloAldSM1.name = 'horariosFloAldSm1';
            horariosFloAldSM1.id = 'horariosFloAldSm1';

            const opcionHorario0 = document.createElement('option');
            opcionHorario0.text = 'Selecciona un horario'
            opcionHorario0.disabled = true;
            opcionHorario0.selected = true;

            const fASM1 = document.createElement('option');
            fASM1.value = 'fASM1';
            fASM1.text = '04:40 AM';

            const fASM2 = document.createElement('option');
            fASM2.value = 'fASM2';
            fASM2.text = '05:35 AM';
            


            body.appendChild(titulo4);
            horariosFloAldSM1.appendChild(opcionHorario0);
            horariosFloAldSM1.appendChild(fASM1);
            horariosFloAldSM1.appendChild(fASM2);
            body.appendChild(horariosFloAldSM1);

            horariosFloAldSM1.addEventListener('click', function (){
              let mostrarDetalle = document.createElement('h3');
              
              if (horariosFloAldSM1.value == 'fASM1' && fASM1.disabled == false){

                fASM1.disabled = true;
                fASM2.disabled = false;

                mostrarDetalle.textContent = 'Trayecto: Fortin => Tres Luces => Alderetes => Talar => Banda del Río Salí';

                body.appendChild(mostrarDetalle);

                setTimeout( ()=> {
                  mostrarDetalle.remove(),
                  opcionHorario0.selected = true;
                }, 5000);
              }

              if (horariosFloAldSM1.value == 'fASM2' && fASM2.disabled == false){

                fASM2.disabled = true;
                fASM1.disabled = false;

                mostrarDetalle.textContent = 'Trayecto: Colonia 4 => La Cancha => Talar => Alternativa';

                body.appendChild(mostrarDetalle);

                setTimeout( ()=> {
                  mostrarDetalle.remove(),
                  opcionHorario0.selected = true;
                }, 5000);
              }

            })

            


          }
        })
                       
        opcion1.disabled = true;
      }
    });
  }

});
