import React, { Component } from "react"
import { Link } from 'gatsby'
import '../styles/mainProblems.css'

class MainProblems extends Component {  
  render() {
    return (
      <div className="main-problem">
        <MainProblemType type="EXPORT"/>
        <MainProblemType type="IMPORT"/>
        <MainProblemType type="DISTRIBUTION"/>
        <MainProblemType type="CUSTOM AGENT"/>
        <MainProblemType type="TRANSPORT"/>
        <MainProblemType type="LEGAL"/>
      </div>
    )
  }
}

class MainProblemType extends Component {  
  constructor(props){
    super(props);   
    this.onClickProblem=this.onClickProblem.bind(this);
  }
  onClickProblem(){
    console.log(this.props.type);
  }
  render() {
    return (
      <div className="main-problem-type" onClick={this.onClickProblem}>{this.props.type}</div>
    )
  }
}


export default MainProblems
