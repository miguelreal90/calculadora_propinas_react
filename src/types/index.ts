export type menuItem = {
    id:number,
    name:string,
    price:number
}
export type OrderIten= menuItem & {
    quantity: number
}