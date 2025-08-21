export type TProducts = {

    id?: string;
    name: string;
    price: number;

}

export type apiResponse = {
    data: TProducts[];
}