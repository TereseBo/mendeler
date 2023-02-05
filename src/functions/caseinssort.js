//Sorts geneletters in alphabetical order, case insensitive
export default function caseinsort(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    let pos = 0;

    if (a < b) {
        pos = -1;
    } else if (a > b) {
        pos = 1;
    }
    return pos;

}