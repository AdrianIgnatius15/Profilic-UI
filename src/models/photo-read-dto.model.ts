export class PhotoReadDto {
    id: number = 0;
    name: string = "";
    photoURL: string = "";
    albumId: number = 0;
    updatedAt: Date = new Date();
    createdAt: Date = new Date();
    photoDeletedAt: Date = new Date();
}