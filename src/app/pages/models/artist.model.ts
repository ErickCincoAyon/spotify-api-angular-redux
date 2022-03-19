export interface ArtistModel {
    external_urls: {
        spotify: string;
    };
    followers: IFollowers;
    genres: string[];
    href: string;
    id: string;
    images: IImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

interface IFollowers {
    href: string;
    total: number;
}

interface IImage {
    url: string;
    height: number;
    width: number;
}