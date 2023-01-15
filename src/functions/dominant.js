function isDominant (genes) {
    genes=genes.split(''); // split the string into an array
    let expression;
    if((genes[0]===genes[0].toUpperCase()&&genes[1]===genes[1].toUpperCase())||(genes[0]===genes[0].toLowerCase()&&genes[1]===genes[1].toLowerCase())){
          expression='mixed';
        }else{
            expression='pure';
        }
  return expression;
}