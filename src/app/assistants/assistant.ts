export interface Assistant {
  id: string;
  email: string;
  name: string;
  age?: number;
  shirtSize?: string;
  checkin?: boolean;
  secondCheckin?: boolean;
  thirdCheckin?: boolean;
  fridayDinner?: boolean;
  saturdayBreakfast?: boolean;
  saturdayLunch?: boolean;
  saturdayDinner?: boolean;
  sundayBreakfast?: boolean;
  sundayLunch?: boolean;
  souvenirsCheckin?: boolean;
  tshirt?: boolean;
  gender?: string;
  phoneNumber?: string;
  profile?: string;
  ticket?: string;
  transferSupportURL?: string;
  visible?: boolean;
}
