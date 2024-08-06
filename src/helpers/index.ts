export function formatCurrency(quantity:number) {
    return new Intl.NumberFormat('en-Us',{
        style: 'currency', currency:'USD'
    }).format(quantity)
}//aqui formatea la modena en dolares de estados unidos, se hace en el formato de cada moneda


