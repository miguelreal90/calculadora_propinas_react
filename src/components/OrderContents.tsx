import { formatCurrency } from "../helpers"
import { menuItem, OrderIten } from "../types"

type OrderContentsProps = {
    order:OrderIten[],
    removeItem: (id:menuItem['id']) => void
}
export default function OrderContents({order,removeItem }:OrderContentsProps) {
    return (
        <div>
            <h2 className=" font-black text-4xl">Consumo</h2>
            <div className=" space-y-3 mt-10">
                {
                        order.map(item=>(
                            <div key={item.id} 
                            className="flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b">
                                <p className=" text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className=" font-black">
                                    Cantidad: {item.quantity} - {formatCurrency(item.price*item.quantity)}
                                </p>
                                <button
                                className="bg-red-600 text-white font-black rounded-full w-8 h-8 flex items-center justify-center"
                                onClick={()=>removeItem(item.id)}
                                >
                                    X
                                </button>

                            </div>
                        ))
                    
                }
            </div>
        </div>
    )
}
