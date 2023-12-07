import React from "react";

const RecipeList = (props) => {
  const recipes = props.recipes;

  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="name" >Name</th>
            <th className="cuisine" >Cuisine</th>
            <th className="photo" >Photo</th>
            <th className="ingredients" >Ingredients</th>
            <th className="preparations" >Preparation</th>
            <th className="actions" >Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img src={recipe.photo} alt={recipe.name} height="50px" />
              </td>
              <td className="content_td"><p>{recipe.ingredients}</p></td>
              <td className="content_td"><p>{recipe.preparation}</p></td>
              <td>
                <button name="delete"onClick={() => props.deleteRecipe(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default RecipeList;

