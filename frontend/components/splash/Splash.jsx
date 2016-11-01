import React from 'react';
import SplashHeader from './SplashHeader';
import SplashFooter from './SplashFooter';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="splash">
        <SplashHeader />
        <main>
          <section>
            {this.props.children}
          </section>
        </main>
        <SplashFooter />
      </div>
    );
  }
}

export default Splash;
