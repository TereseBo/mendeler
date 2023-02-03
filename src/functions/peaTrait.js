//Translates geneletters to text to be used for css
function peaTrait(gene) {
    let trait = "pea";

    switch (gene) {
        //Color genes
        case 'bb':
            trait = 'brown'
            break;
        case 'bo':
        case 'ob':
            trait = 'brownorange';
            break;
        case 'bp':
        case 'pb':
            trait = 'brownpurple';
            break;
        case 'by':
        case 'yb':
            trait = 'brownyellow';
            break;
        case 'GG':
        case 'Gb':
        case 'bG':
        case 'Go':
        case 'oG':
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
        case 'op':
        case 'po':
            trait = 'orangepurple';
            break;
        case 'oy':
        case 'yo':
            trait = 'orangeyellow';
            break;

        case 'pp':
            trait = 'purple'
            break;
        case 'py':
        case 'yp':
            trait = 'purpleyellow';
            break;
        case 'yy':
            trait = 'yellow';
            break;
        //Shape genes
        case 'cc':
            trait = 'cuboid';
            break;
        case 'ce':
        case 'ec':
            trait = 'cuboidelliptic'
            break;
        case 'cw':
        case 'wc':
            trait = 'cuboidwrinkled';
            break;
        case 'ee':
            trait = 'elliptic';
            break;
            case 'ew':
                case 'we':
                    trait='ellipticwrinkled';
                    break;
        case 'SS':
        case 'Sc':
        case 'Se':
        case 'eS':
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