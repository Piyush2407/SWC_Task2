const API_KEY = 'api_key=f59b33706071cccc59a3265a761eaa2b';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL= 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie? '+API_KEY;

getMovies(API_URL);

function getMovies(url){
   fetch(url).then(response => response.json()).then(data => {
    console.log(data)
   showMovies(data.results);
})
}


function showMovies(data){

    data.forEach((movie) => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        
        <img src="superman.jpg" alt="image" class="mx-auto h-full">
         <div class="movie-info -my-24  flex space-x-20 mx-4 font-bold text-gray-100">
          <h3>Movie Title</h3>
          <spaan class="green  border-2 rounded-[4px]">9.8</spaan>
         </div>
         <div class="overview  text-gray-100 -my-24">
         
           <h3 >Overview</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, facilis placeat architecto a amet distinctio rerum iste asperiores magnam consequuntur.
         </div>

        `
    })
}
