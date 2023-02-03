export default function caseinsort(a,b){
     a = a.toLowerCase();
     b =  b.toLowerCase();
     //console.log(a ,  b)
    let pos = 0;

    if (a === b) {
        pos = 0;
    } else if (a < b) {
        pos = -1;
    } else if (a > b) {
        pos = 1;
    }
    return pos;

}