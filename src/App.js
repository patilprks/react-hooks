import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';


<Box
component="span"
sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
•
</Box>

function App() {
//  useState example 1
const [counter, setCounter] = useState(0);
const [inputValue, setInputValue] = useState('Patil');

const incrementCounter = () => {
  setCounter(counter + 1);
}

 const captureValues = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
}

  return (
    <div className="App">
    <h1>React Hooks</h1>
    <h3>1. useState()</h3>
    {/* useState example 1 */}
     <Card sx={{ minWidth: 50 }}>
     <CardContent>
     
      <div> <Chip label={counter} variant="outlined"/> <Button className="ml-15" variant="contained" onClick={incrementCounter}>Increament</Button> </div>
      </CardContent>
      </Card>
      <Divider className="mr"/>
      <Card sx={{ minWidth: 50 }}>
     <CardContent>
     <TextField id="outlined-basic" label="Text" variant="outlined" onChange={captureValues}/> 
     <div className="mt-15">{inputValue} </div>
      </CardContent>
      </Card>
    </div>
  );
}

export default App;
