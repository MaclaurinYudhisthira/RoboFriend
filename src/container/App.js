import {Component} from 'react';
import Scroll from "../component/Scroll";
import CardList from "../component/CardList";
import Search from "../component/Search";
import "./App.css";

class App extends Component {
    constructor(){
        super();
        this.state={
            robots:[],
            searchField:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    }
    onSearchChange= (e) =>{
        this.setState({searchField: e.target.value})
    }
    render(){
        const filterRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc">
                <div style={{height:'25vh'}}>
                    <h1 className="f1">RoboFriends</h1>
                    <Search searchChange={this.onSearchChange}/>
                </div>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;
