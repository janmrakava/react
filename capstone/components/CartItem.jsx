import React, {useContext} from "react"
import { Context } from "../src/Context"
import PropTypes from "prop-types"
import useHover from "../useHover/useHover"



function CartItem({item}) {
    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()
    const {removeImageFromCart} = useContext(Context)

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            <i
                className={iconClassName} 
                onClick={() => removeImageFromCart(item.id)}
                ref={ref}
            >
            </i>
            
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}
CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem