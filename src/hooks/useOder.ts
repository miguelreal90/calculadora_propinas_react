import { useState } from "react"
import type { menuItem, OrderIten } from "../types"
export default function useOder() {
    const [order,setOrder]=useState<OrderIten[]>([])
    const [tip,setTip]=useState(0)
    const addIten = (item:menuItem) => { 
        const itemExist = order.find(orderItem=>orderItem.id===item.id)
        if (itemExist) {
            // Actualización inmutable del estado
            setOrder(prevOrder => prevOrder.map(orderItem => orderItem.id === item.id 
                ? { ...orderItem, quantity: orderItem.quantity + 1 } // Incrementa la cantidad
                : orderItem 
            ))}

        else {
            const newIten={...item,quantity:1}//para agregar cantidad
            setOrder([...order,newIten ])
        }

    }
    const removeItem = (id:OrderIten['id']) => {
        setOrder(order.filter(orderItem => orderItem.id !== id))
    }
    const placeOrder = () => { 
        console.log('guardando')
        
    }
    return {
        addIten,
        order,
        tip,
        setTip,
        removeItem,
        placeOrder
    }
}
/*import { useState } from "react";
import type { menuItem, OrderIten } from "../types";

export default function useOder() {
    const [order, setOrder] = useState<OrderIten[]>([]);

    const addIten = (item: menuItem) => {
        // Verificar si el elemento ya existe en la orden
        const existingItemIndex = order.findIndex((orderItem) => orderItem.id === item.id); 

        if (existingItemIndex !== -1) {
        // El elemento ya existe, actualizar la cantidad
        const updatedOrder = [...order];
        updatedOrder[existingItemIndex].quantity++;
        setOrder(updatedOrder);
        } else {
        // El elemento es nuevo, agregarlo a la orden
        const newIten = { ...item, quantity: 1 };
        setOrder([...order, newIten]);
        }
    };

    console.log(order);

    return {
        addIten,
        order // También puedes retornar el estado 'order' para acceder a la orden desde otros componentes
    };
}
**/
