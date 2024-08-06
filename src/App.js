import { Component } from 'react'
import Allselection from '.././src/Components/AllSelection/Allselection'
import Multipleselection from '.././src/Components/MultipleSelection/Multipleselection'
import Singleselection from '.././src/Components/SingleSelection/Singleselection'
import './App.css';

class App extends Component {
  state = { mode: "mode-1" }

  onModeOne = () => {
    this.setState({ mode: "mode-1" })
  }

  onModeTwo = () => {
    this.setState({ mode: "mode-2" })
  }

  onModethree = () => {
    this.setState({ mode: "mode-3" })
  }

  render() {
    const { mode } = this.state
    return (
      <div className="App">
        <ul className='nav-items-container'>
          <li className='each-nav-item' onClick={this.onModeOne}>mode-1</li>
          <li className='each-nav-item' onClick={this.onModeTwo}>mode-2</li>
          <li className='each-nav-item' onClick={this.onModethree}>mode-3</li>
        </ul>
        {mode === "mode-1" && <Allselection />}
        {mode === "mode-2" && <Multipleselection />}
        {mode === "mode-3" && <Singleselection />}
      </div>
    )
  }
}

export default App;
