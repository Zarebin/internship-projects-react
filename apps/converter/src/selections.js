import React from 'zarkit/react';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import Converterfunc from '../Components/Converterfunc';
import items from '../data/selectionitems';

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.Converterfunc = Converterfunc.bind(this);
    this.state = {
      query1: '1 ', query2: '100 ', src: 'meter', dest: 'centimeter',
    };
  }

  componentDidMount() {
    document.querySelector('#src').onchange = (e) => {
      this.setState({ src: e.target.value });
      const newState = this.Converterfunc(this.props.selectid, this.state.query1, this.state.src, this.state.dest);
      this.setState({ query2: newState });
    };
    document.querySelector('#dest').onchange = (e) => {
      this.setState({ dest: e.target.value });
      const newState = this.Converterfunc(this.props.selectid, this.state.query1, this.state.src, this.state.dest);
      this.setState({ query2: newState });
    };
  }

  oninputfunc1 = (e) => {
    this.setState({ query1: e.target.value });
    const newState = this.Converterfunc(this.props.selectid, e.target.value, this.state.src, this.state.dest);
    this.setState({ query2: newState });
  };

  oninputfunc2 = (e) => {
    this.setState({ query2: e.target.value });
    const newState = this.Converterfunc(this.props.selectid, e.target.value, this.state.dest, this.state.src);
    this.setState({ query1: newState });
  };

  renderObject() {
    let listitems = [];
    for (const [key, arr] of Object.entries(items)) {
      const listitem = arr.map((item) => (<mwc-list-item class={key} value={item.value}>{item.title}</mwc-list-item>));
      listitems = [...listitems, listitem];
    }
    return listitems;
  }

  render() {
    return (
      <div className="pic">
        <div id="left" className="bottom-selections">
          <mwc-textfield type="number" id="valuesrc" placeholder="1" value={this.state.query1} onInput={this.oninputfunc1} />

          <mwc-select id="src" type="number" selectid="selection" value={this.state.src}>
            {this.renderObject()}

          </mwc-select>

        </div>
        <div id="center">=</div>
        <div id="right" className="bottom-selections">
          <mwc-textfield type="number" id="valuedest" placeholder="100" value={this.state.query2} onInput={this.oninputfunc2} />

          <mwc-select type="number" id="dest" selectid="selection2" value={this.state.dest}>
            {this.renderObject()}
          </mwc-select>

        </div>

      </div>

    );
  }
}
export default Selection;
