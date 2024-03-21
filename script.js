document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR API KEY'; 
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=YOUR API KEY`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayApodImage(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayApodImage(data) {
    const apodImageElement = document.getElementById('apodImage');

    if (data.media_type === 'image') {
        apodImageElement.innerHTML = `<img src="${data.url}" alt="NASA APOD">`;
    } else if (data.media_type === 'video') {
        apodImageElement.innerHTML = `<iframe width="100%" height="400" src="${data.url}" frameborder="0" allowfullscreen></iframe>`;
    }

    apodImageElement.innerHTML += `<p style="font-size: 25px">${data.title}</p>`;
    apodImageElement.innerHTML += `<p>${data.explanation}</p>`;
}

/*APOD - Astronomy Picture of the Day*/
