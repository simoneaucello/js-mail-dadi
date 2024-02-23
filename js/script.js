// creare un prompt di rchiesta e-mail 

const userMail = prompt('Inserisci la tua e-mail');
console.log(userMail);

// creare un array con la lista delle e-mail abilitate 

let mailList = ['ugodeughi@example.it', 'simo.a@example.it', 'booleaners@example.it', 'array@example.it', 'itsfriday@example.it'];
console.log(mailList);

let validMail = false

// creare un ciclo for per confronto con lista e-mail nell'array 

for (let i = 0; i < mailList.length; i++){
  let mailVerified = mailList[i];

  if (userMail === mailVerified) {
    validMail = true
    console.log(validMail); 
  }
}

// stampare un messaggio appropriato in base all'esito della verifica 

if(validMail){
  alert('Benvenuto!')
}else{
  alert('E-mail non trovata!')
}


