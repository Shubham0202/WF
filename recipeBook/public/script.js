document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipeName = document.getElementById('recipe-name').value;
    const recipeInstructions = document.getElementById('recipe-instructions').value;

    const recipeList = document.getElementById('recipes');
    const listItem = document.createElement('li');
    listItem.innerHTML = `${recipeName}: ${recipeInstructions} <button onclick="deleteRecipe(this)">Delete</button>`;
    
    recipeList.appendChild(listItem);
    document.getElementById('recipe-form').reset();
});

function deleteRecipe(button) {
    button.parentElement.remove();
}