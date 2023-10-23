import React from 'react';
import { Grid } from '@mui/material';

import StaffProfileCard from './StaffProfileCard/StaffProfileCard';
import styles from './styles';

export default function Staff() {
  return (
  <Grid container sx={ { display: 'flex', flexDirection: 'column', ...styles.main } }>
    <Grid item>
      <StaffProfileCard name="John Doe" imageURL={''} position="Head of Shady Operations" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas sit amet neque in vestibulum. Phasellus non laoreet nulla. In a mattis mauris. Vestibulum consectetur velit ac enim tincidunt, dapibus luctus diam euismod. Vestibulum cursus imperdiet est, et eleifend quam porta a. Praesent suscipit facilisis nisi non volutpat. Suspendisse ac mauris venenatis, tristique nunc sed, pharetra massa. Mauris at molestie nisl. Nam semper mauris quis odio dictum, eget ornare nunc egestas. Nullam at elementum nisi, id sollicitudin eros. Morbi mollis aliquam porttitor. Fusce porta lorem ut ipsum ultricies, eget scelerisque magna molestie. Praesent ullamcorper ante ligula, ut varius dui rutrum a." linkedInURL={''}></StaffProfileCard>
    </Grid>
  </Grid>
  )
}
