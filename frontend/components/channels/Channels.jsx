import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Drawer open={true}>
          <MenuItem><h1>kn@ck</h1></MenuItem>
        </Drawer>
        <h1>test</h1>
      </div>
    );
  }
}

export default Channels;
