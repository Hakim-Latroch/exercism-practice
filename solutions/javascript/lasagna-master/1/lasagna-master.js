/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time){
  let status = '';
  if (time!=undefined){
    if (time===0){
      status ='Lasagna is done.'
    }
    else{
      status='Not done, please wait.';
    }
  }
    else{
    status = 'You forgot to set the timer.';
    }
  return status;
}



export function preparationTime(layers,time=2){

  return layers.length * time;
}


export function quantities(layers){
  let obj = {
    noodles: 0, 
    sauce: 0,
  }
  for (let layer in layers){
    if (layers[layer]  === 'noodles'){
      obj['noodles'] +=50
    }
       if (layers[layer]  === 'sauce'){
      obj['sauce'] +=0.2
    }
  }
  return obj;
}
export function addSecretIngredient(friendsList,myList ) {
  myList = myList.push(friendsList[friendsList.length -1]);
  
}

export function scaleRecipe(recipe, portions) {
  let newRecipe = {};
    for(let ingredient in recipe){
    newRecipe[ingredient] =  recipe[ingredient] * ( portions / 2 )
    }
  return newRecipe ;
}