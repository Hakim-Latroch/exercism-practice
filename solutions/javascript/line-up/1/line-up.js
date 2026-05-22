//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let suffix ='';
    const lastTwoD = number% 100;
    const lastOneD = number % 10;
    if (lastTwoD === 11 || lastTwoD === 12 || lastTwoD === 13){
      suffix = 'th'
    }
    else {
      if(lastOneD===1){
        suffix = 'st'
      } else if(lastOneD===2){
        suffix = 'nd'
      }
      else if(lastOneD===3){
        suffix = 'rd'
      }
      else {
        suffix='th'}
    }
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`
  };
  

