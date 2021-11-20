import React from 'zarkit/react';
import { Button } from 'zarkit/Button'
import Timer from 'timerApp/RemoteApp'
import ConverterApp from 'converterApp/RemoteApp';
export default class App extends React.Component{

    render(){
      return (<div>
        <div>
          timer:
          <Timer />
          <h3>ConverterApp</h3>
          <ConverterApp />
        </div>
        <Button type="primary"/>
        <Button type="warning"/>
      </div>)
    }
  }