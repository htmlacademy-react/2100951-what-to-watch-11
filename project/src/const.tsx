export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    MyList = '/mylist',
    Film = '/films/:id',
    AddReview = '/films/:id/review',
    Player = '/player/:id'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum Nav {
    Overview = 'Overview',
    Details = 'Details',
    Reviews = 'Reviews'
}

export enum TimeValue {
    PreviewStartTimeout = 1000,
    DefaultSecondsCount = 60,
    Hundred = 100
}

export enum ErrorMessage {
    VideoSupport = 'The video tag is not supported by your browser.'
}

export const DEFAULT_GENRE = 'All genres';

export const MAX_COUNT = 8;
