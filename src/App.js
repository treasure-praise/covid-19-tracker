import { FormControl, MenuItem, Select } from "@material-ui/core";
import React,{useState} from "react";
import "./App.css";

function App() {

  const [countries, setCountries] = useState(["USA","UK "]);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* loop through all the countries */}

        {
          countries.map((country=>(
            <MenuItem value={country}>{country}</MenuItem>
          )))
        }
            {/* <MenuItem value="worldwide">World</MenuItem>
            <MenuItem value="worldwide">Cameroon</MenuItem>
            <MenuItem value="worldwide">Nigeria</MenuItem> */}
          </Select>
        </FormControl> 
      </div>
    </div>
  );
}

export default App;
