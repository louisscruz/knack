import React from 'react';
import SplashHeader from './SplashHeader';
import SplashFooter from './SplashFooter';

const Splash = ({children}) => (
  <div className="splash">
    <SplashHeader />
    <main>
      <section>
        {children}
      </section>
    </main>
    <SplashFooter />
  </div>
);

export default Splash;
