import { useState, useEffect } from 'react'
import './Allselection.css'

const  Allselection = () => {
    
    const [apiData,setApiData] = useState([
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
    ]);

    const getApiData = async() => {
        try{
        const URL = "http://visualcampus.in/API/api/TeacherController/GETListAllClass?Clientid=1&Branchid=1&EmpId=1";
        const response = await fetch(URL);
        const data = await response.json()
        console.log(data)
        }catch(error){
            console.log("error : ", error);
        }
    }

    useEffect(() => {
         getApiData();
    },[]);

    /*getApiData = async () => {
        try{
            const gorestURL = "https://gorest.co.in/public-api/users"
            const URL = "https://visualcampus.in/API/api/TeacherController/GETListAllClass?Clientid=1&Branchid=1&EmpId=1";
            /*const options = {
                method : "GET",
                headers: {
                    'Authorization': `Bearer ${}`,
                    'Content-Type': 'application/json'
                    },
                body :JSON.stringify(data)
            }*/
    /*fetch(URL)
    .then((response) => {
        debugger;
    
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
}catch(error){
    console.log("Error :",error);
}
}

async componentDidMount() {
await this.getApiData()
}*/

    /*getFormData = (event) => {
        event.preventDefault()
        const { Response } = this.state
        const filteredData = Response.filter((eachItem)=>(
            document.getElementById(eachItem.CLASS_CODE).checked === true
        ))
        console.log(filteredData);

        /*if (mode === "mode-2") {
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
    }*/

    /*onCancelFormData = () => {
        const { Response } = this.state
        Response.map((eachItem) => {
            return document.getElementById(eachItem.CLASS_CODE).checked = false;
        })
    }*/

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
    return (
        <div className='main-container'>
            <div>
                <form className='form-container'>
                    <h1 className='main-heading'>Classes Selection</h1>
                    <ul className='list-of-classes'>
                        {apiData.map((eachItem) => (
                            <li className='each-check-label' key={eachItem.CLASS_CODE}>
                                <input type="checkbox" id={eachItem.CLASS_CODE} className='each-check-item' defaultChecked />
                                <label htmlFor={eachItem.CLASS_CODE} className='each-label-item'>{eachItem.CLASS}</label>
                            </li>
                        ))}
                    </ul>
                </form>
                <div className='buttons-container'>
                    <div className="ok-button-container">
                        <button className="ok-button">OK</button>
                    </div>
                    <div className="cancel-button-container">
                        <button className="cancel-button">CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Allselection