
import './CartPage.css'

function OptionDiv(props) {

const {selectOp,setSelectOp}=props.value
  return (
    <div  className="switch_cart">
        <input type="radio" id="switch-radio1" name="radio"
         checked={selectOp === "Delivery"}
         onChange={() => setSelectOp("Delivery")}
        />
        <label htmlFor="switch-radio1">Delivery</label>

        <input type="radio" id="switch-radio2" name="radio"
         checked={selectOp === "Collection"}
         onChange={() => setSelectOp("Collection")}
        />
        <label htmlFor="switch-radio2">Collection</label>

      </div>
    
  )
}

export default OptionDiv