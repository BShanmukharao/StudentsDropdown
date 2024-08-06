import { Component } from 'react'
import Eachsingleitem from '../EachSingleItem/Eachsingleitem'
import './Singleselection.css'

class Singleselection extends Component {

    state = {
        Response: [
            {
                "CLASS_CODE": 1,
                "CLASS": "NURSERY"
            },
            {
                "CLASS_CODE": 2,
                "CLASS": "L.K.G"
            },
            {
                "CLASS_CODE": 3,
                "CLASS": "U.K.G"
            },
            {
                "CLASS_CODE": 4,
                "CLASS": "I-CLASS"
            },
            {
                "CLASS_CODE": 5,
                "CLASS": "II-CLASS"
            },
            {
                "CLASS_CODE": 6,
                "CLASS": "III-CLASS"
            },
            {
                "CLASS_CODE": 7,
                "CLASS": "IV-CLASS"
            },
            {
                "CLASS_CODE": 8,
                "CLASS": "V-CLASS"
            },
            {
                "CLASS_CODE": 9,
                "CLASS": "VI-CLASS"
            },
            {
                "CLASS_CODE": 10,
                "CLASS": "VII-CLASS"
            },
            {
                "CLASS_CODE": 11,
                "CLASS": "VIII-CLASS"
            },
            {
                "CLASS_CODE": 12,
                "CLASS": "IX-CLASS"
            },
            {
                "CLASS_CODE": 13,
                "CLASS": "X-CLASS"
            }
        ]
    }

    componentDidMount() {
        const { Response } = this.state
        const firstClassId = Response[0].CLASS_CODE
        return document.getElementById(firstClassId).checked = true
    }

    getFormData = (event) => {
        const {Response} = this.state
        event.preventDefault()
        const filterSelectedData = Response.filter((eachItem)=>(
            document.getElementById(eachItem.CLASS_CODE).checked
        ))
        if(filterSelectedData.length > 0){
            console.log(filterSelectedData);
        }else{
            alert("Please select one item..");
        }
    }

    setSingleItem = (classCode) => {
        const { Response } = this.state
        const exceptSingleFilterData = Response.filter((eachItem) => (
            eachItem.CLASS_CODE !== classCode
        ))

        exceptSingleFilterData.map((eachItem) => {
            return document.getElementById(eachItem.CLASS_CODE).checked = false;
        })
    }

    onCancelFormData = () => {
        const { Response } = this.state
        Response.map((eachItem) => {
            if(eachItem.CLASS_CODE !== 1){
                return document.getElementById(eachItem.CLASS_CODE).checked = false;
            }else {
                return document.getElementById(eachItem.CLASS_CODE).checked = true;
            }
        })
    }

    render() {
        const { Response } = this.state
        return (
            <div className='main-container' >
                <form className='form-container' onSubmit={this.getFormData}>
                    <h1 className='main-heading'>Classes Selection</h1>
                    <ul className='list-of-classes'>
                        {Response.map((eachItem) => (
                            <Eachsingleitem key={eachItem.CLASS_CODE} eachId={eachItem.CLASS_CODE} content={eachItem.CLASS} setSingleLabelItem={this.setSingleItem} />
                        ))}
                    </ul>
                </form>
                <div className='buttons-container'>
                    <div className="ok-button-container">
                        <button className="ok-button" onClick={this.getFormData}>OK</button>
                    </div>
                    <div className="cancel-button-container">
                        <button className="cancel-button" onClick={this.onCancelFormData}>CANCEL</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Singleselection
