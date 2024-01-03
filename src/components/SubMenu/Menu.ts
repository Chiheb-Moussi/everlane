export enum LinkType {
    IMG = 'image',
    DROPDOWN = 'dropdown'
}
export type Link = {
    name: string;
    link: string
}
export type Section = {
    title: string;
    links: Link[];
    type?: LinkType;
};

export type SubCategorie = {
    name: string;
    link?: string;
    section?: Section[];
}
export type Categorie = {
    name: string;
    link?: string;
    subCategories?: SubCategorie[];
}


