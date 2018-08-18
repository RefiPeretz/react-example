import React from 'react'
import {Link} from 'react-router'

class HomePage extends React.Component{
    render(){
        return(<div>className="jumpbutton">
                    <h1>Pluralsight Admin</h1>
                    <p>React ,Reduc and readt bla bla</p>
                    <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
                    </div>);
    }
}

export default HomePage;