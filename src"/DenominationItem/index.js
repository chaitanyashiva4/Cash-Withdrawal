// Write your code here
import './index.css'

const DenominationItem = props => {
  const {cash, cashBtn} = props
  const {value} = cash
  const onClick = () => {
    cashBtn(value)
  }
  return (
    <li className="cash-item">
      <button className="cash-btn" type="button" onClick={onClick}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
