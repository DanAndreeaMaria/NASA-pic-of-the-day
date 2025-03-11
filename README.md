# NASA-pic-of-the-day #

This project is a simple web application that fetches and displays NASA's Astronomy Picture of the Day (APOD). The app uses NASA API to retrieve the daily image or video, its title and an explanation then displays them to the user. The API response is handled in a JavaScript file and the frontend uses HTML and CSS to display the data.

## Features

  * Fetches NASA's Astronomy Picture of the Day (APOD) using the NASA API
  * Displays the image or video of the day
  * Includes a title and explanation of the image or video
  * Responsive design using CSS

## Technologies used

  * **HTML5**
  * **CSS3**
  * **JavaScript**
  * **NASA API** ```(https://api.nasa.gov/)```

## Requirements

  * A text editor to edit the code (VSCode)
  * An Internet browser to run the web application
  * A valid NASA API key

## Usage

  1. Once you have the app set up:
      * The image or video of the day
      * The title of the image/video
      * A brief explanation of the image/video
   
  2. The content will update daily based on the APOD provided by NASA's API

## File structure

  ```index.html```
  * This file contains the HTML structure for the webpage. It includes:
    * A header ```h1``` to display the title "NASA Picture of the Day."
    * A div ```#apodImage``` where the APOD image or video, title, and explanation are inserted.

  ```style.css```
  * This file contains styles for the app:
    * The ```body``` element uses the Poppins font
    * The ```.container``` class centers the content and applies padding
    * The ```h1``` and ```#apodImage``` styles control the layout and appeareance of the page

  ```script.js```
  * This JavaScript file handles the following
    * **Fetches Data:** It makes a GET request to the NASA API using ```fetch()``` to retrieve the APOD data
    * **Handles response:** If the API request is successfull, it calls the ```displayApodImage()``` function, passing the response data.
    * **Displays content:** The ```displayApodImage()``` function inserts the image or video, title and explanation into the HTML DOM
    * **Error handling:** If an error occurs during the API call, it logs an error message in the console
