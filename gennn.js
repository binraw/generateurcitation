let cita =["Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie  \n , Confucius",

"L'ignorance mène à la peur, la peur mène à la haine et la haine conduit à la violence. Voilà l'équation\n ,  Averroès",
"Le courage n'est pas l'absence de peur, mais la capacité de la vaincre\n  Nelson Mandela",
"C'est peut-être de la peur qu'on a le plus souvent besoin pour se tirer d'affaire dans la vie \n , Louis-Ferdinand Céline",
"Offrir l'amitié à qui veut l'amour, c'est donner du pain à qui meurt de soif \n  Proverbe espagnol",
"Quand la pauvreté entre par la porte, l'amour s'en va par la fenêtre \n ,  Proverbe français",
"L'oisiveté est la mère de tous les vices\n Proverbe Français"]
let resultat =0;
let emplacement =[];
let citation = document.querySelector('.citation');
console.log(citation);
let btn = document.querySelector('button');
console.log(btn);
let openCita = false;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    resultat= Math.floor(Math.random() * (max - min + 1) + min)
return resultat};
    

btn.addEventListener('click', () => {
     getRandomIntInclusive(1, 8);
    switch(resultat){
        case 1:
           emplacement.splice(0,1,cita[0]);
           
            break
        case 2: 
        emplacement.splice(0,1,cita[1]);
         
             break
             
         case 3:
            emplacement.splice(0,1,cita[2]);
              
                 break
         case 4:
            emplacement.splice(0,1,cita[3]);
              
                 break;
          case 5:
            emplacement.splice(0,1,cita[4]);
            
                 break
             case 6:
                emplacement.splice(0,1,cita[5]);
                  
                 break
             case 7:
                emplacement.splice(0,1,cita[6]);
                   
                 break
             case 8:
                emplacement.splice(0,1,cita[3]);
                  
                 break

    }
 citation.textContent = emplacement;
    console.log(emplacement);
})

