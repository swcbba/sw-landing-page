export interface Assistant {
    id: string,
    checkin?: boolean,
    secondCheckin?: boolean,
    thirdCheckin?: boolean,
    fridayDinner?: boolean,
    saturdayBreakfast?: boolean,
    saturdayLunch?: boolean,
    saturdayDinner?: boolean,
    sundayBreakfast?: boolean,
    sundayLunch?: boolean,
    age: number,
    email: string,
    gender?: string,
    name: string,
    phoneNumber?: string,
    profile?: string,
    shirtSize: string,
    ticket?: string,
    transferSupportURL?: string
    visible?: boolean
}
