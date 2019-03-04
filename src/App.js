import React, { Component } from 'react';
import './App.css';
import Router from "react-router-dom/es/Router";





class App extends Component {
    constructor(props){
        super(props);
        this.state={
            title : 'Phone Book',
            act:0,
            index : '',
            datas : []

        }


    }

    componentDidMount() {
        this.refs.name.focus();
    }

    fSubmit = (e) =>{
        e.preventDefault();
        console.log('try');

        let datas=this.state.datas;
        let name=this.refs.name.value;
        let number=this.refs.number.value;

        let data = {
            name,number
        }
        datas.push(data);

        this.setState({
           datas:datas
        });

        this.refs.myForm.reset();
        this.refs.name.focus();

    }

    fRemove = (i) =>{
        let datas = this.state.datas;
        datas.splice(i,1);
        this.setState({
           datas:datas
        });
        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    render() {
        let datas=this.state.datas;
        return (
     <div className="App">
         <h1>{this.state.title}</h1>
         <form ref="myForm" className="myForm">
             <input type="text" ref="name" placeholder="Name" className="formField"/>
             <input type="digits" ref="number" placeholder="Enter number" className="formField"/>
             <button onClick={(e)=>this.fSubmit(e)} className="myButton">Submit</button>
         </form>
         <pre>
             {
                 datas.map((data, i) =>
                     <li key={i} className="myList">
                         {i+1}.{data.name},{data.number}
                          <button onClick={()=>this.fRemove(i)} className="myButton">Remove</button>

                     </li>

                 )
             }
         </pre>
     </div>
    );
  }
}

export default App;
