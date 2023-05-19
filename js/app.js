const beerButton = document.querySelector('#beer-button');
const beerTitle = document.querySelector('#random-beer');
const beerDescription = document.querySelector('#description');
const beerImage = document.querySelector('#beer-image');
const beerVolume = document.querySelector('#beer-volume');

function getData() {
  fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => response.json())
    .then(data => {
      const volumeUnit = data[0].volume.unit;
      const volumeValue = data[0].volume.value;

      beerTitle.textContent = data[0].name;
      beerVolume.textContent = volumeValue + ' ' + volumeUnit;
      beerDescription.textContent = data[0].description;
      if (data[0].image_url) {
        beerImage.setAttribute('src', data[0].image_url);
      } else {
        beerImage.setAttribute('src', 'images/random-beer.png');
      }
    })
    .catch(err => console.error(err));
}

getData();

beerButton.addEventListener('click', getData);
