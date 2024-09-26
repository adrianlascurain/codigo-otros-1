const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Nombres de las variables se actualizan y se describen según clases
const nameElem = document.querySelector('.name');
const blogElem = document.querySelector('.blog');
const locationElem = document.querySelector('.location');

// Se agregan parámetros a las funciones
function displayUser(username,nameElem,blogElem,locationElem) {
  nameElem.textContent = 'cargando...';

  // Se remueve el await y se actualiza el nombre
  const promise = fetch(`${usersEndpoint}/${username}`,{method: "GET"});

  // Se establece el comportamiento de la promesa
  promise
  .then(response => {response.json()
    .then(response => {
      console.log(response);
      nameElem.textContent = `${response.name}`;
      blogElem.textContent = `${response.blog}`;
      locationElem.textContent = `${response.location}`;
      })
      // Se captura el error en la promesa
  }).catch((error) => {handleError(error)})
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nameElem.textContent = `Algo salió mal: ${err}`
}

// Se elimina la captura de error en la llamada a la función
displayUser('stolinski',nameElem,blogElem,locationElem)