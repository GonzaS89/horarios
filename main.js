const form1 = document.form1.origen;

form1.addEventListener('click', function(){

  const sanM = form1[1];
  const florida = form1[2];
  const body = document.querySelector('body');
  

    if(form1.value == 'florida' && florida.disabled == false){

      
        console.log(form1[2].text);
        florida.disabled = true;
        sanM.disabled = false;


    };

     if (form1.value == 'sanM' && sanM.disabled == false){

      florida.disabled = false;
      sanM.disabled = true;
      console.log(form1[1].text)
    }

    
    const form2 = document.createElement('form');
    const camino = document.createElement('select');
    camino.name = 'camino';
    camino.id = 'camino';
    const opcion0 = document.createElement('option');
    opcion0.disabled = true;
    opcion0.selected = true;
    const opcion1 = document.createElement('option');
    opcion1.value = 'porAld';
    opcion1.text = '¿Por Alderetes?';
    const opcion2 = document.createElement('option');
    opcion2.value = 'porPosse';
    opcion2.text = '¿Por Posse';

    camino.appendChild(opcion0);
    camino.appendChild(opcion1);
    camino.appendChild(opcion2);
    form2.appendChild(camino);
    body.appendChild(form2);

});
