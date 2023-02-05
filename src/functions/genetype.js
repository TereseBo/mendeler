//Returns a numeric value representing the traits position in genestring
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
        //Shape genes
        case 'c':
        case 'e':
        case 'R':
        case 'w':
            alleleType = 2;
            break;
        default:
            alleleType = 42;
            break;
    }
    return alleleType;
}