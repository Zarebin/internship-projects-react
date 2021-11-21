import React from "zarkit/react";
import { ReactDOM } from "zarkit/react-dom";
import TopSelection from './TopSelection';

class App extends React.Component {
    
        render () {
            return(

                <div id='whole'>
                        <TopSelection id='myselect'/> 
                </div>
        
            )
        }
    }
export default App;
