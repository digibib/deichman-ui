import React, { Component } from 'react';

import './styles.css';

const iconUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9001/icons.svg'
    : 'https://cdn.jsdelivr.net/npm/@digibib/deichman-ui@latest/dist/icons.svg';

export default class IconLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconData: { __html: '' },
    };
  }

  componentDidMount() {
    var ajax = new XMLHttpRequest();
    ajax.open('GET', iconUrl, true);
    ajax.send();
    ajax.onload = e => {
      this.setState({
        iconData: { __html: ajax.responseText },
      });
    };
  }

  render() {
    return <div className="icon-loader" dangerouslySetInnerHTML={this.state.iconData} />;
  }
}
