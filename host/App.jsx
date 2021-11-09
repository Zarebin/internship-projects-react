import React from 'zarkit/react';
import { Button } from 'zarkit/Button'
import Timer from 'timerApp/RemoteApp'
export default class App extends React.Component{

    render(){
      return (<div>
        <div>
          timer:
          <Timer />
        </div>
        <Button type="primary"/>
        <Button type="warning"/>
      </div>)
    }
  }