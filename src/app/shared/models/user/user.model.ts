
export enum UserRole {
    Admin = 1,
    Owner = 2,
    Guest = 3
}

export class UserResponseModel {
    userId: number;
    token: string;
    fullName: string;
    email: string;
    phone: string;
    roles?: Array<string>;
}
