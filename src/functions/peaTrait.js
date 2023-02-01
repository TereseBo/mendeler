//Translates geneletters to text to be used for css
function peaTrait(gene) {
    let trait = "pea";

    switch (gene) {
        //Color genes
        case 'GG':
        case 'Gy':
        case 'yG':
            trait = 'green';
            break;
        case 'yy':
            trait = 'yellow';
            break;
        //Shape genes
        case 'cc':
            trait='cuboid';
            break;
        case 'SS':
        case 'Sw':
        case 'wS':
            trait = 'smooth';
            break;
        case 'ww':
            trait = 'wrinkled';
            break;
    }
    return trait;
}

export { peaTrait };