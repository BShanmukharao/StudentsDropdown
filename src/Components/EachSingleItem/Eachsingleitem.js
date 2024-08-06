import './Eachsingleitem.css'

const Eachsingleitem = (props) => {
    const {eachId, content, setSingleLabelItem} = props

    const setSingleItem = () => {
        setSingleLabelItem(eachId)
    }
    return (
        <li className='each-check-label'>
            <input type="checkbox" id={eachId} className='each-check-item' onClick={setSingleItem}/>
            <label htmlFor={eachId} className='each-label-item'>{content}</label>
        </li>
    )
}

export default Eachsingleitem