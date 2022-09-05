const searchFood = () =>{
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;

  // clear field
  searchField.value = '';

  // load meals data
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayLoadMeals(data.meals))
}

const displayLoadMeals = meals =>{
  const searchResult = document.getElementById('search-result');
  // clear the previous text
  searchResult.textContent = ''
  meals.forEach(meal => {
    // console.log(meal)
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div onclick="loadMealDetails(${meal.idMeal})" class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 220)}</p>
      </div>
    </div>
    `;
    searchResult.appendChild(div)
  })
}

const loadMealDetails = mealId =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetails(data.meals[0]))
}

const  displayMealDetails = meal =>{
  console.log(meal)
  const divContainer = document.getElementById('div-container')
  const div = document.createElement('div')
  div.classList.add('card')
  div.innerHTML = `
      <img src="${meal.strMealThumb}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://www.google.com/" class="btn btn-primary">Go somewhere</a>
      </div>
  `;
  divContainer.appendChild(div)
}