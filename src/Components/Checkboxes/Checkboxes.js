import { Component } from 'react'
import './Checkboxes.css'

const keyList = ["NURSARY", "NURSARY-A", "LKG", "LKG-A", "UKG",
    "UKG-A", "CLASS-1", "CLASS-1-A", "CLASS-1-B",
    "CLASS-2", "CLASS-2-A", "CLASS-2-C", "CLASS-3",
    "CLASS-3-A", "CLASS-3-D", "CLASS-4", "CLASS-4-D",
    "CLASS-5", "CLASS-5-A", "CLASS-5-Z", "CLASS-6",
    "CLASS-6-A", "CLASS-7", "CLASS-7-C", "CLASS-7-E",
    "CLASS-8", "CLASS-8-B", "CLASS-9", "CLASS-9-C",
    "CLASS-10"]

class Checkboxes extends Component {

    state = { mode: "mode-1"}

    getFormData = (event) => {
        event.preventDefault()
        const { mode } = this.state
        if (mode === "mode-1") {
            const updatedData = keyList.map((eachKey) => {
                return document.getElementById(eachKey).value
            })
            console.log(updatedData);
        }

        if (mode === "mode-2") {
            const selectedData = []
            keyList.map((eachKey) => {
                if (document.getElementById(eachKey).checked) {
                    selectedData.push(document.getElementById(eachKey).value);
                }
            })
            console.log(selectedData);
        }

        if (mode === "mode-3") {
            const selectedOneData = []
            keyList.map((eachKey) => {
                if (document.getElementById(eachKey).checked) {
                    selectedOneData.push(document.getElementById(eachKey).value)
                }
            })
            console.log(selectedOneData);
        }
    }
    
    onCancelFormData = () => {
        keyList.map((eachKey)=>{
            return document.getElementById(eachKey).checked = false;
        })
    }

    componentDidMount() {
        const { mode } = this.state
        if (mode === "mode-1") {
            keyList.map((eachKey) => {
                return document.getElementById(eachKey).checked = true;
            })
        }

        if (mode === "mode-3") {
            return document.getElementById("NURSARY").checked = true;
        }
    }
    
    getSingleItem = (event) => {
        const getSingleId = event.target.id;
        keyList.map((eachKey)=>{
            if(eachKey !== getSingleId){
                return document.getElementById(eachKey).checked = false;
            }
        })
    }

    render() {
        return (
            <div className='main-container' >
                <form className='form-container' onSubmit={this.getFormData}>
                    <h1 className='main-heading'>Classes Selection</h1>
                    <ul className='list-of-classes'>
                        <li className='each-check-label'>
                            <input type="checkbox" id="NURSARY" className='each-check-item' value="0, NURSARY" onClick={this.getSingleItem}/>
                            <label htmlFor="NURSARY" className='each-label-item'>NURSARY</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="NURSARY-A" className='each-check-item' value="0, NURSARY, A"  onClick={this.getSingleItem}/>
                            <label htmlFor="NURSARY-A" className='each-label-item'>NURSARY -A</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="LKG" className='each-check-item' value="1, LKG"  onClick={this.getSingleItem}/>
                            <label htmlFor="LKG" className='each-label-item'>L.K.G</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="LKG-A" className='each-check-item' value="1, LKG, A"  onClick={this.getSingleItem}/>
                            <label htmlFor="LKG-A" className='each-label-item'>L.K.G -A</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="UKG" className='each-check-item' value="2, UKG"  onClick={this.getSingleItem}/>
                            <label htmlFor="UKG" className='each-label-item'>U.K.G</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="UKG-A" className='each-check-item' value="2, UKG, A"  onClick={this.getSingleItem}/>
                            <label htmlFor="UKG-A" className='each-label-item'>U.K.G -A</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-1" className='each-check-item' value="3, CLASS-1"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-1" className='each-label-item'>CLASS -1</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-1-A" className='each-check-item' value="3, CLASS-1, A"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-1-A" className='each-label-item'>CLASS -1-A</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-1-B" className='each-check-item' value="3, CLASS-1, B"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-1-B" className='each-label-item'>CLASS -1-B</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-2" className='each-check-item' value="4, CLASS-2"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-2" className='each-label-item'>CLASS -2</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-2-A" className='each-check-item' value="4, CLASS-2, A"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-2-A" className='each-label-item'>CLASS -2-A</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-2-C" className='each-check-item' value="4, CLASS-2, C"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-2-C" className='each-label-item'>CLASS -2-C</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-3" className='each-check-item' value="5, CLASS-3"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-3" className='each-label-item'>CLASS-3</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-3-A" className='each-check-item' value="5, CLASS-3, A"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-3-A" className='each-label-item'>CLASS -3-A</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-3-D" className='each-check-item' value="5, CLASS-3, D"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-3-D" className='each-label-item'>CLASS -3-D</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-4" className='each-check-item' value="6, CLASS-4"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-4" className='each-label-item'>CLASS-4</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-4-D" className='each-check-item' value="6, CLASS-4, D"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-4-D" className='each-label-item'>CLASS -4-D</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-5" className='each-check-item' value="7, CLASS-5"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-5" className='each-label-item'>CLASS-5</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-5-A" className='each-check-item' value="7, CLASS-5, A"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-5-A" className='each-label-item'>CLASS -5-A</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-5-Z" className='each-check-item' value="7, CLASS-5, Z"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-5-Z" className='each-label-item'>CLASS -5-Z</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-6" className='each-check-item' value="8, CLASS-6"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-6" className='each-label-item'>CLASS -6</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-6-A" className='each-check-item' value="8, CLASS-6, A"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-6-A" className='each-label-item'>CLASS -6-A</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-7" className='each-check-item' value="9, CLASS-7"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-7" className='each-label-item'>CLASS -7</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-7-C" className='each-check-item' value="9, CLASS-7, C"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-7-C" className='each-label-item'>CLASS -7-C</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-7-E" className='each-check-item' value="9, CLASS-7, E"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-7-E" className='each-label-item'>CLASS -7-E</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-8" className='each-check-item' value="10, CLASS-8"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-8" className='each-label-item'>CLASS -8</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-8-B" className='each-check-item' value="10, CLASS-8, B"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-8-B" className='each-label-item'>CLASS -8-B</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-9" className='each-check-item' value="11, CLASS-9"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-9" className='each-label-item'>CLASS-9</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-9-C" className='each-check-item' value="11, CLASS-9, C"  onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-9-C" className='each-label-item'>CLASS -9-C</label>
                        </li>
                        <li className='each-check-label'>
                            <input type="checkbox" id="CLASS-10" className='each-check-item' value="12, CLASS-10" onClick={this.getSingleItem}/>
                            <label htmlFor="CLASS-10" className='each-label-item'>CLASS-10</label>
                        </li>
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

export default Checkboxes