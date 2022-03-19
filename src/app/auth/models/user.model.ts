export interface UserModel {
    country: string;
    display_name: string;
    email: string;
    explicit_content: IExplicitContent;
    external_urls: IExternalUrls;
    followers: IFollowers;
    href: string;
    id: string;
    images: IImage[];
    product: string;
    type: string;
    uri: string;
}

interface IExplicitContent {
    filter_enabled: boolean;
    filter_locked: boolean;
}

interface IExternalUrls {
    spotify: string;
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