export type ReviewType = {
    id: number;
    text: string;
    rating: string;
    author: string;
    date: string;
    formatDate: string;
}

export type ReviewsType = ReviewType[];
