async function getRecipes(){
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();
    const recipes = data.recipes;

    const result = recipes.map(function(ele){
        return`
        <div class='recipe'>
        <h2>${ele.title}</h2>
        <img src = '${ele.image_url}' />
        </div>
        `;
    }).join('');

    document.querySelector('.recipes').innerHTML = result;
}

getRecipes();