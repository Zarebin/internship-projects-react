import React from 'zarkit/react';
import { Button } from 'zarkit/Button'
import Timer from 'timerApp/RemoteApp'
import ConverterApp from 'converterApp/RemoteApp';
import PairMatching from 'pairMatchingApp/RemoteApp';

export default class App extends React.Component{

    render(){
      return (<div>
        <div>
          <h3>timer:</h3>
          <Timer />
          <h3>ConverterApp</h3>
          <ConverterApp />
          <h3>Pair Matching</h3>
          <PairMatching />
        </div>
        <Button type="primary"/>
        <Button type="warning"/>
      </div>)
    }
  }