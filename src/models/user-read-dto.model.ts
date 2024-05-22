export class UserReadDTO {
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phone?: string;
    password?: string;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
    userDeletedAt: Date = new Date();
    token?: string;
}