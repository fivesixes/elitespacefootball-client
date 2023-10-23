import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import styles from './styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { createEntry } from '../../actions/entries';

const formStateObject = {
  firstName: '',
  lastName: '',
  otherNames: '',
  birthDate: '',
  height: '',
  weight: '',
  nationality: '',
  currentTeam: '',
  positions: [],
  strongerFoot: '',
  pace: '',
  about: '',
  passportPhoto: '',
  cardPhoto: '',
  otherPhotos: [],
  media: [],
  creation: { author: '', creationDate: '' }
}

export default function RosterEntryForm() {

  const dispatch = useDispatch();

  const [entryData, setEntryData] = useState(formStateObject);

  const [nationality, setNationality] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createEntry(entryData));
  }

  const handleNationalityChange = (event) => {
    const selectedNationality = event.target.value;
    setNationality(selectedNationality);
    setEntryData({...entryData, nationality: selectedNationality});
  }

  const handleHeightChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) || inputValue === '') {
      setEntryData({ ...entryData, height: inputValue });
    }
  };

  const handleWeightChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) || inputValue === '') {
      setEntryData({ ...entryData, weight: inputValue });
    }
  };

  const handlePaceChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*(\.\d*)?$/.test(inputValue) || inputValue === '') {
      setEntryData({ ...entryData, pace: inputValue });
    }
  };  
  
  const handlePositionsChange = (index, fieldName, value) => {
    const updatedPositions = [...entryData.positions];
    updatedPositions[index][fieldName] = value;
    setEntryData({ ...entryData, positions: updatedPositions });
  };

  // Function to add a new position
  const addPosition = () => {
    const updatedPositions = [...entryData.positions, { full: '', shorthand: '' }];
    setEntryData({ ...entryData, positions: updatedPositions });
  };

  // Function to remove a position by index
  const removePosition = (index) => {
    const updatedPositions = [...entryData.positions];
    updatedPositions.splice(index, 1);
    setEntryData({ ...entryData, positions: updatedPositions });
  };

  // Function to add a new media entry
  const addMediaEntry = () => {
    const updatedMedia = [...entryData.media, { videoTitle: '', videoContent: '', description: '' },];
    setEntryData({ ...entryData, media: updatedMedia });
  };

  // Function to remove a media entry by index
  const removeMediaEntry = (index) => {
    const updatedMedia = [...entryData.media];
    updatedMedia.splice(index, 1);
    setEntryData({ ...entryData, media: updatedMedia });
  };

  // Function to handle changes in media entries
  const handleMediaChange = (index, fieldName, value) => {
    const updatedMedia = [...entryData.media];
    updatedMedia[index][fieldName] = value;
    setEntryData({ ...entryData, media: updatedMedia });
  };

  return (
    <Box component="form" autoComplete="off" sx={{ flexGrow: 1 }} style={styles.main}>
      <ThemeProvider theme={theme}>
        <Grid container justifyContent="space-between" alignContent="center" rowSpacing={3} columnSpacing={5}>
          <Grid item xs={3}><TextField required variant="outlined" focused size="small" label="First Name" type="text" name="firstName" value={entryData.firstName} onChange={ (e) => setEntryData({ ...entryData, firstName:e.target.value }) } style={styles.formField} /></Grid>
          <Grid item xs={3}><TextField required variant="outlined" size="small" label="Last Name" type="text" name="lastName" value={entryData.lastName} onChange={ (e) => setEntryData({ ...entryData, lastName:e.target.value }) } style={styles.formField} /></Grid>
          <Grid item xs={3}><TextField variant="outlined" size="small" label="Other Names" type="text" name="otherNames" value={entryData.otherNames} onChange={ (e) => setEntryData({ ...entryData, otherNames:e.target.value }) } style={styles.formField} /></Grid>
          <Grid item xs={3}><TextField required variant="outlined" size="small" label="DOB" type="date" InputLabelProps={{ shrink: true }} name="birthDate" value={entryData.birthDate} onChange={ (e) => setEntryData({ ...entryData, birthDate:e.target.value }) } style={styles.formField} /></Grid>
          <Grid item xs={3}>
            <TextField required variant="outlined" size="small" label="Height" type="text" name="height" value={entryData.height} onChange={handleHeightChange} InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            }} style={styles.formField} />
          </Grid>
          <Grid item xs={3}>
            <TextField required variant="outlined" size="small" label="Weight" type="text" name="weight" value={entryData.weight} onChange={handleWeightChange} InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }} style={styles.formField} />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined" size="small" style={styles.formField}>
              <InputLabel>Nationality</InputLabel>
              <Select onChange={handleNationalityChange} name="nationality" label="Nationality">
                <MenuItem value="NG">Nigeria</MenuItem>
                <MenuItem value="SA">South Africa</MenuItem>
                {/* Add more MenuItems for different nationalities */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined" size="small" style={styles.formField}>
              <InputLabel>Stronger Foot</InputLabel>
              <Select
                value={entryData.strongerFoot}
                onChange={(e) => setEntryData({ ...entryData, strongerFoot: e.target.value })}
                label="Stronger Foot">
                <MenuItem value="right">Right</MenuItem>
                <MenuItem value="left">Left</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}><TextField variant="outlined" size="small" label="Current Team" type="text" name="currentTeam" value={entryData.currentTeam} onChange={ (e) => setEntryData({ ...entryData, currentTeam:e.target.value }) } style={styles.formField} /></Grid>
          <Grid item>
            <TextField required variant="outlined" size="small" label="Pace(Time in 100m-sprint)" type="text" name="pace" value={entryData.pace} onChange={handlePaceChange} InputProps={{
              endAdornment: <InputAdornment position="end">secs</InputAdornment>,
            }} style={styles.formField} />
          </Grid>
          <Grid item xs={12}>
            <TextField multiline rows={5} variant="outlined" fullWidth label="About" type="text" helperText="A brief description of the player" name="about" value={entryData.about} onChange={(e) => setEntryData({ ...entryData, about: e.target.value })} style={styles.formField} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Add passport image</Typography>
            <FileBase type="file" multiple={false} onDone={ ( {base64} ) => setEntryData({ ...entryData, passportPhoto: base64 }) } />
            <Typography>Add Card image</Typography>
            <FileBase type="file" multiple={false} onDone={ ( {base64} ) => setEntryData({ ...entryData, cardPhoto: base64 }) } />
            <Typography>Add other images</Typography>
            <FileBase type="file" multiple={true} onDone={ ( {base64} ) => setEntryData({ ...entryData, otherPhotos: [ ...entryData.otherPhotos, base64 ] }) } />
          </Grid>
          <Grid item fullWidth xs={6}>
            <Button variant="outlined" onClick={addMediaEntry}>
              Add Video
            </Button>
            {entryData.media.map((mediaEntry, index) => (
            <React.Fragment key={index}>
              <Grid item xs={4}>
                <TextField required variant="outlined" size="small" label={`Video Title`} helperText="Enter video title" type="text" value={mediaEntry.videoTitle} onChange={(e) => handleMediaChange(index, 'videoTitle', e.target.value)} style={styles.formField}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField required variant="outlined" size="small" label={`Video Content`} helperText="Specify video content" type="text" value={mediaEntry.videoContent} onChange={(e) => handleMediaChange(index, 'videoContent', e.target.value)} style={styles.formField}
                />
              </Grid>
              <Grid item>
                <TextField required multiline rows={5} variant="outlined" fullWidth label={`Description`} type="text" helperText="A brief description of the video" value={mediaEntry.description} onChange={(e) => handleMediaChange(index, 'description', e.target.value)} style={styles.formField}
                />
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={() => removeMediaEntry(index)}>
                  Remove Video
                </Button>
              </Grid>
            </React.Fragment>
          ))}

          </Grid>
          {/* Add a button to add a new position */}
          <Grid item fullWidth xs={3}>
            <Button variant="outlined" onClick={addPosition}>
              Add Position
            </Button>
            {entryData.positions.map((position, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <TextField required variant="outlined" size="small" label={`Full`} helperText="Enter full defined position" type="text" value={position.full} onChange={(e) => handlePositionsChange(index, 'full', e.target.value)} style={styles.formField} />
              </Grid>
              <Grid item>
                <TextField required variant="outlined" size="small" label={`Shorthand`} helperText="Enter position short form" type="text" value={position.shorthand} onChange={(e) => handlePositionsChange(index, 'shorthand', e.target.value.toUpperCase())} inputProps={ { maxLength: 3 } } style={styles.formField} />
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={() => removePosition(index)}>
                  Remove Position
                </Button>
              </Grid>
            </React.Fragment>
            ))}
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button type="submit" variant="contained" onClick={handleSubmit} style={styles.button}>
              CREATE PLAYER
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}
