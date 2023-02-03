//Translates geneletters to text to be used for css
function peaTrait(gene) {
    let trait = "pea";

    switch (gene) {
        //Color genes
        case 'b':
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
        case 'G':
        case 'GG':
        case 'Gb':
        case 'bG':
        case 'Go':
        case 'oG':
        case 'Gp':
        case 'pG':
        case 'Gy':
        case 'yG':
            trait = 'Green';
            break;
        case 'KG':
        case 'GK':
            trait = 'greenkhaki'
            break;
        case 'K':
        case 'KK':
        case 'Kb':
        case 'bK':
        case 'Ko':
        case 'oK':
        case 'Kp':
        case 'pK':
        case 'Ky':
        case 'yK':
            trait = 'Khaki'
            break;
        case 'o':
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
        case 'p':
        case 'pp':
            trait = 'purple'
            break;
        case 'py':
        case 'yp':
            trait = 'purpleyellow';
            break;
        case 'y':
        case 'yy':
            trait = 'yellow';
            break;
        //Shape genes
        case 'c':
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
        case 'e':
        case 'ee':
            trait = 'elliptic';
            break;
        case 'ew':
        case 'we':
            trait = 'ellipticwrinkled';
            break;
        case 'R':
        case 'RR':
        case 'Rc':
        case 'Re':
        case 'eR':
        case 'cR':
        case 'Rw':
        case 'wR':
            trait = 'Round';
            break;
        case 'w':
        case 'ww':
            trait = 'wrinkled';
            break;
    }
    return trait;
}

export { peaTrait };