import React from "react";
import { Box, Grid } from "@mui/material";

import styles from './styles';
import InstagramCard from "./InstagramCard/InstagramCard";
import Ticktok from "./Ticktok/Ticktok";
import X from "./X/X";
import FacebookCard from "./FacebookCard/FacebookCard";
import YoutubeCard from "./YoutubeCard/YoutubeCard";
import Threads from "./Threads/Threads";

export default function SocialMediaLinks() {

  return (
    <Grid container justifyContent="center" alignContent="center" columnSpacing={3} sx={ {...styles.main, } }>
      <Grid item>
        <Threads/>
      </Grid>
      <Grid item>
        <X/>
      </Grid>
      <Grid item>
        <InstagramCard/>
      </Grid>
      <Grid item>
        <FacebookCard/>
      </Grid>
      <Grid item>
        <Ticktok/>
      </Grid>
    </Grid>
  );
}