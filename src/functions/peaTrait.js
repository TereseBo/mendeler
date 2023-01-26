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
        //Texture genes
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