function peaColor(){

    switch (colorGene){
        case 'GG':
        case 'Gy':
        case 'yG':
            color='green';
            break;
        case 'yy':
            color='yellow';
    }
    return color;
}