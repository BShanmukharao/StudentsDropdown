import { Component } from 'react'
import './Multipleselection.css'

class Multipleselection extends Component {

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


    getFormData = (event) => {
        event.preventDefault()
        const {Response} = this.state
        const selectedData = Response.filter((eachItem)=>(
            document.getElementById(eachItem.CLASS_CODE).checked === true
        ))
        if(selectedData.length >= 2) {
            console.log(selectedData);
        }else {
            alert("Please select atleast two items..")
        }
    }

    onCancelFormData = () => {
        const { Response } = this.state
        Response.map((eachItem) => {
            return document.getElementById(eachItem.CLASS_CODE).checked = false;
        })
    }

    /*componentDidMount() {
        const { mode } = this.state
        if (mode === "mode-1") {
            keyList.map((eachKey) => {
                return document.getElementById(eachKey).checked = true;
            })
        }

        if (mode === "mode-3") {
            return document.getElementById("NURSARY").checked = true;
        }
    }*/

    /*getSingleItem = (event) => {
        const getSingleId = event.target.id;
        keyList.map((eachKey)=>{
            if(eachKey !== getSingleId){
                return document.getElementById(eachKey).checked = false;
            }
        })
    }*/

    render() {
        const {Response} = this.state
        return (
            <div className='main-container' >
                <form className='form-container' onSubmit={this.getFormData}>
                    <h1 className='main-heading'>Classes Selection</h1>
                    <ul className='list-of-classes'>
                        {Response.map((eachItem)=>(
                           <li className='each-check-label' key={eachItem.CLASS_CODE}>
                           <input type="checkbox" id={eachItem.CLASS_CODE} className='each-check-item'/>
                           <label htmlFor={eachItem.CLASS_CODE} className='each-label-item'>{eachItem.CLASS}</label>
                       </li>
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

export default Multipleselection