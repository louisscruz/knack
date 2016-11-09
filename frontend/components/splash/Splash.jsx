import React from 'react';
import SplashHeader from './SplashHeader';
import SplashFooter from './SplashFooter';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false
    };
    this.toggleActivated = this.toggleActivated.bind(this);
  }

  toggleActivated() {
    this.setState({activated: !this.state.activated});
  }

  render () {
    const childrenWithProps = React.cloneElement(this.props.children, { toggleActivated: this.toggleActivated });
    console.log(childrenWithProps);
    return (
      <div className="splash">
        <SplashHeader />
        <main>
          <section>
            {childrenWithProps}
          </section>
        </main>
        <SplashFooter activated={this.state.activated}/>
      </div>
    );
  }
}

export default Splash;
