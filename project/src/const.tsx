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
    VideoSupport = 'The video tag is not supported by your browser.',
    InvalidEmail = 'Please enter a valid email address',
    InvalidPassword = 'Please enter a valid password'
}

export const DEFAULT_GENRE = 'All genres';

export const MAX_COUNT = 8;
export const MAX_GENRE_COUNT = 9;
export const RELETED_COUNT = 4;
export const STARRING_COUNT = 2;

export enum ReviewValue {
    MinValue = 50,
    MaxValue = 400
}

export enum APIRoute {
    Films = '/films',
    Promo = '/promo',
    Login = '/login',
    Logout = '/logout',
    Reviews = '/comments',
    Favorite = '/favorite'
}

export enum RatingLevel {
    Bad = 'BAD',
    Normal = 'NORMAL',
    Good = 'GOOD',
    VeryGood = 'VERY_GOOD',
    Awesome = 'AWESOME',
}

export enum NameSpace {
    Data = 'DATA',
    User = 'USER',
    App = 'APP',
}
