import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [funcShow, setfuncShow] = useState(true)
  const [classShow, setclassShow] = useState(true)

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={function () {
        setfuncShow(false)
      }}></input>
      <input type="button" value="remove comp" onClick={function () {
        setclassShow(false)
      }}></input>
      { funcShow ? <FuncComp initNumber={2}></FuncComp> : null }
      { classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}
var funStyle = 'color: blue';
var funId = 0
function FuncComp(props) {
  var numberState = useState(props.initNumber); 
  var number = numberState[0]
  var setNumber = numberState[1]
  // var dateState = useState((new Date()).toString()); 
  // var _date = dateState[0]
  // var setDate = dateState[1]
  var [_date, setDate] = useState((new Date()).toString())

  // side effect가 생략된 말
  useEffect(function () {
    console.log('%cfunc => useEffect number (ComponentDidMount) ' + (++funId), funStyle)
    document.title = number;
    return function () {
      console.log('%cfunc => useEffect return (ComponentWillUnMount) ' + (++funId), funStyle)
    }
  }, [])

  // side effect가 생략된 말
  useEffect(function () {
    console.log('%cfunc => useEffect number (ComponentDidMount & componentDidUpdate) ' + (++funId), funStyle)
    document.title = number;
    return function () {
      console.log('%cfunc => useEffect number return (ComponentDidMount & componentDidUpdate) ' + (++funId), funStyle)
    }
  }, [number])

  // side effect가 생략된 말
  useEffect(function () {
    console.log('%cfunc => useEffect _date (ComponentDidMount & componentDidUpdate) ' + (++funId), funStyle)
    document.title = _date;
    return function () {
      console.log('%cfunc => useEffect _date return (ComponentDidMount & componentDidUpdate) ' + (++funId), funStyle)
    }
  }, [_date])

  console.log('%cfunc => render '+(++funId), funStyle)
  return (
    <div className='container'>
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
          function () {
            setNumber(Math.random())
          }
        }></input>
      <input type="button" value="date" onClick={
          function () {
            setDate((new Date()).toString())
          }
        }></input>
    </div>
  )
}
var classStyle = 'color: red';
class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  componentWillMount() {
    console.log('%cclass => componenetWillMount', classStyle)
  }
  componentDidMount() {
    console.log('$cclass => componenetDidMount', classStyle)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('$cclass => shouldComponentUpdate', classStyle)
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('$cclass => componentWillUpdate', classStyle)
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('$cclass => componentDidUpdate', classStyle)
  }
  componentWillUnmount() {
    console.log('$cclass => componentWillUnmount', classStyle)
  }
  render() {
    console.log('%cclass => render', classStyle)
    return (
      <div className='container'>
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date :{this.state.date}</p>
        <input type="button" value="random" onClick={
          function () {
            this.setState({ number: Math.random() })
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function () {
            this.setState({ date: (new Date()).toString() })
          }.bind(this)
        }></input>
      </div>
    )
  }
}


export default App;
