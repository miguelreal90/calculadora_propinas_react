import { menuItem } from "../types"
type MenuItemProps = {
    item:menuItem
}
export default function MenuItem({item}:MenuItemProps) {
    return (
        <>
        <p>
            {item.name}
        </p>
        <p className=" font-black">
            {item.price}
        </p>
        </>

    )
}
