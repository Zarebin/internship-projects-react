import React from 'zarkit/react';
import { Button } from 'zarkit/Button'
import Timer from 'timerApp/RemoteApp'
import PairMatching from 'pairMatchingApp/RemoteApp';
import Calendar from 'calendarApp/RemoteApp';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div>
          <h3>timer:</h3>
          <Timer />
          <h3>Pair Matching</h3>
          <PairMatching />
          <h3>Calendar</h3>
          <Calendar />
        </div>
        <Button type="primary" />
        <Button type="warning" />
      </div>
    )
  }
}
