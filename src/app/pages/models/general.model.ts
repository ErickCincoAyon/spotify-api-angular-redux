export interface GeneralModel<T> {
    albums?: {
        href: string;
        items: T;
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
    };
    artists?: {
        href: string;
        items: T;
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
    };

    href?: string;
    items?: T;
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}