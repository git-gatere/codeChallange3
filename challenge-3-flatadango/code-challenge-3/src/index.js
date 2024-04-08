function displayMovieDetails (){
    
    fetch('http://localhost:3000/films/1')
    //The then() method is chained to the fetch call to handle the promise returned by the fetch function.
    .then(function(response) {
       // When the fetch operation is successful, the response is converted to JSON format using response.json().
        return response.json();
      })
      //then() method is used again to pass the movie data to the presentDetailsOfMovie() function for rendering the movie details on the frontend.
      .then(function(movie) {
       
        displayMovieDetails(movie);
      })
     // The catch() method is used to handle any errors that may occur during the fetch operation. If an error occurs, it will be logged to the console using console.error().//
      .catch(function(error) {
       
        console.error('Error fetching movie details:', error);
      });
    }
    //This event ensures that the JavaScript code inside the event listener will run after the HTML content is fully loaded.
    document.addEventListener('DOMContentLoaded',displayMovieDetails())
    
    const poster = document.getElementById('poster');
    poster.src="https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg";
    const title =document.getElementById('title')
    title.textContent="The Giant Gila Monster"
    const runtime=document.getElementById('runtime')
    runtime.textContent="Runtime: 108 minutes"
    const showtime= document.getElementById('showtime');
    showtime.textContent= "Showtime: 04:00PM";
    const tickets = document.getElementById('ticket-num');
    const ticketsRemaining = movie.capacity - movie.tickets_sold;
    tickets.textContent = AvailableTickets; `${ticketsRemaining}/${movie.capacity}`
    const baseURL = `http://localhost:3000/films`

fetch (baseURL, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }

}).then((res) => res.json())

  .then((data) => {

    const movieTitles = document.getElementById('films')
data.forEach((title) => {
        const paragraph = document.createElement('li')

        paragraph.classList.add("film", "item")

        paragraph.addEventListener("click", async () => {
            currentFilmId = title.id;
            const selectedFilm = await fetchFilmById(currentFilmId);
            updateFilmDetails(selectedFilm);
        });



        paragraph.innerText = title.title

        movieTitles.append(paragraph)}) 
        
    })

    const fetchFilmById = async(id) => {

        const response = await 

        fetch(`${baseURL}/${id}`);

        const filmData = await response.json();

        return filmData;
    }
     const updateFilmDetails = (selectedFilm) => {
         const movieTitles = document.getElementById('title')
        
                movieTitles.innerHTML = selectedFilm.title}
