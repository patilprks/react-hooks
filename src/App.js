import "./App.css";
import { useState, useReducer, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import axios from "axios";

const reducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {count: state.count + 1 , showText: state.showText}
    case 'toggleShowText':
      return {count: state.count, showText: !state.showText}
    default:
      return {state}  
  }

}

<Box
  component="span"
  sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
  •
</Box>;

function App() {
  //  useState example 1
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Patil");

  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
      setData(response.data[0].email)
      console.log("API was Called")
    });
  },[counter])
 

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const captureValues = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <p>1. useState()</p>
      {/* useState example 1 */}
      <Card sx={{ minWidth: 50 }}>
        <CardContent>
          <div>
            <Chip label={counter} variant="outlined" />
            <Button
              className="ml-15"
              variant="contained"
              onClick={incrementCounter}
            >
              Increament
            </Button>
          </div>
        </CardContent>
      </Card>
      <Divider className="mr" />
      <Card sx={{ minWidth: 50 }}>
        <CardContent>
          <TextField
            id="outlined-basic"
            label="Text"
            variant="outlined"
            onChange={captureValues}
          />
          <div className="mt-15">{inputValue} </div>
        </CardContent>
      </Card>
      <Divider className="mr" />
      <p>2. useReducer()</p>
      {/* useState example 1 */}
      <Card sx={{ minWidth: 50 }}>
        <CardContent>
          <div>
            <Chip label={state.count} variant="outlined" />
            <Button
              className="ml-15"
              variant="contained"
              onClick={()=>{
                dispatch({type: "INCREMENT"});
                dispatch({type: "toggleShowText"});
              }}
            >
              Increament
            </Button>
            {state.showText && <p>This is a text</p>}
          </div>
        </CardContent>
      </Card>

      <Divider className="mr" />
      <p>3. useEffect()</p>
      {/* useState example 1 */}
      <Card sx={{ minWidth: 50 }}>
        <CardContent>
          <div>
          <p>Hello - { data }</p>
          <Button
              className="ml-15"
              variant="contained"
              onClick={()=>{setCounter(counter + 1)}}
            >
              API Hit
            </Button>
          </div>
        </CardContent>
      </Card>
     
    </div>
  );
}

export default App;
