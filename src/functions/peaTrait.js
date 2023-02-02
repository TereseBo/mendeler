//Translates geneletters to text to be used for css
function peaTrait(gene) {
    let trait = "pea";

    switch (gene) {
        //Color genes
        case 'bb':
            trait = 'brown'
            break;
        case 'GG':
        case 'Gb':
        case 'bG':
        case 'Gp':
        case 'pG':
        case 'Gy':
        case 'yG':
            trait = 'green';
            break;
        case 'KG':
        case 'GK':
            trait = 'greenkhaki'
            break;
        case 'KK':
        case 'Kb':
        case 'bK':
        case 'Kp':
        case 'pK':
        case 'Ky':
        case 'yK':
            trait = 'khaki'
            break;
        case 'oo':
            trait = 'orange'
            break;
        case 'pp':
            trait = 'purple'
            break;
        case 'yy':
            trait = 'yellow';
            break;
        //Shape genes
        case 'cc':
            trait = 'cuboid';
            break;
        case 'SS':
        case 'Sc':
        case 'cS':
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