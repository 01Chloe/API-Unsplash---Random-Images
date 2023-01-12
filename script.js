const monImage = document.querySelector('img');
const btnRandom = document.querySelector('.btn-random');

let maRequete = new Request('https://source.unsplash.com/random/500x500?sig=https://unsplash.com/@11chloe');

btnRandom.addEventListener('click', () => {
     fetch(maRequete) 
     .then(function(reponse) {
          if(!reponse.ok) {
               throw new Error(`erreur HTTP! satut: ${reponse.status}`);
          }
          return reponse.blob();
     })
     .then(function(reponse) {
          let URLobject = URL.createObjectURL(reponse);
          monImage.src = URLobject;
     });
});
