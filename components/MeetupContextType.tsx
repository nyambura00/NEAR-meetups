export interface Meetup { //defining a Meetup object
    owner:       string;
    title:       string;
    description: string;
    location:    string;
    date:        string;
    imageUrl:    string;
    id:          number;
}

export type MeetupContextType = {
    account: {};
    config: undefined;
    balance: {};
    login: () => void;
    logout: () => void;
};