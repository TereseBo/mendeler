//Returns a numeric value representing position in genestring
export default function geneType(gene) {
    let alleleType = 0;
    switch (gene) {
        //Color genes
        case 'b':
        case 'G':
        case 'K':
        case 'o':
        case 'p':
        case 'y':
            alleleType = 1;
            break;
        //Texture genes
        case 'c':
        case 'e':
        case 'S':
        case 'w':
            alleleType = 2;
            break;
        default:
            alleleType = 42;
            break;
    }
    return alleleType;
}