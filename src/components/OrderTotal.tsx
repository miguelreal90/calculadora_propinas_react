import {  useMemo } from "react"
import { OrderIten } from "../types"
import { formatCurrency } from "../helpers"
type OrdenTotalProps = {
    order:OrderIten[],
    tip:number
    placeOrder: () => void
}
export default function OrderTotal({order,tip,placeOrder}:OrdenTotalProps) {
    const subtotalAmount = useMemo(()=>order.reduce((total,item)=>total+(item.price * item.quantity),0),[order])
    const tipAmount = useMemo(()=>subtotalAmount*tip,[order,tip])
    const totalAmount = useMemo(()=>subtotalAmount+tipAmount,[order,tip])

    return (
        <>
            <div className=" space-y-3">
                <h2 className=" font-black text-2xl"> Total y Propinas</h2>
                <p>SubTotal a Pagar es:{' '} 
                    <span className=" font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Propina:{' '} 
                    <span className=" font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a Pagar es:{' '} 
                    <span className=" font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button
            className=" bg-black w-full p-3 uppercase text-white mt-10 disabled:opacity-50"
            disabled={totalAmount===0}
            onClick={placeOrder}
            >
                Guardar Orden
            </button>
        
        </>
    )
}
