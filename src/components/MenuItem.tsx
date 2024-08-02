import { menuItem } from "../types"
type MenuItemProps = {
    item:menuItem
    addIten: (item:menuItem) => void
}
export default function MenuItem({item,addIten}:MenuItemProps) {
    return (
        <button
        className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between "
        onClick={ () => addIten(item)}
        >
        <p>
            {item.name}
        </p>
        <p className=" font-black">
            {item.price}
        </p>
        </button>

    )
}
