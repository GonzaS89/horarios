const form1 = document.form1.origen;

form1.addEventListener('click', function(){

  const sanM = form1[1];
  const florida = form1[2];
  const body = document.querySelector('body')
  let titulo2 = document.createElement('h2');
  titulo2.textContent = '¿Por donde querés ir?'
  
  

    if(form1.value == 'florida' && florida.disabled == false){

  

      
  console.log(form1[2].text);

  
  
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
  opcion1.text = '¿Por Alderetes?';
  const opcion2 = document.createElement('option');
  opcion2.value = 'porPosse';
  opcion2.text = '¿ Posse';;

      
  
  camino.appendChild(opcion0);
  camino.appendChild(opcion1);
  camino.appendChild(opcion2);
  form2.appendChild(camino);
  body.appendChild(titulo2)
  body.appendChild(form2);

  florida.disabled = true;
  sanM.disabled = false;

      }

     if (form1.value == 'sanM' && sanM.disabled == false){

      titulo2.textContent='Pooasd';
    

      florida.disabled = false;
      sanM.disabled = true;
      console.log(form1[1].text)

    
   
      
    }

    
    
});
