import React from 'react';

import styles from './styles';
import { Box, Typography } from '@mui/material';

export default function EnrollmentDetails( { responsiveThreshold } ) {

  return (
    <Box sx={{...styles.main, backgroundColor: window.innerWidth < responsiveThreshold ? '#dedede' : 'white', padding: window.innerWidth < responsiveThreshold ? '0px' : '50px',}}>
      <Typography variant={window.innerWidth < responsiveThreshold ? 'h4' : 'h3'} sx={ { textAlign: 'center', margin: '30px 0px 30px 0px', fontWeight: 'bold' } }>
        Enrollment
      </Typography>
      <Typography variant="body1" sx={ { textAlign: 'left', fontSize: '18px', marginBottom: '70px' } }>
        <p>
          The ELITE SPACE FOOTBALL academy is open to enrollment applications from interested, eligible candidates unless otherwise stated. Applications can ONLY BE MADE IN PERSON at any of the following venues and times:
        </p>
        <ul>
          <li>The Federal College of Dental Studies, Trans-Ekulu, Enugu State, Nigeria, on Mondays between 09:00 and 10:00</li>
          <li>The Enugu Rangers Camp, Liberty Estate, Enugu State, Nigeria, on Wednesdays between 16:00 and 17:00</li>
        </ul>
      </Typography>
      <Typography variant={window.innerWidth < responsiveThreshold ? 'h4' : 'h3'} sx={ { textAlign: 'center', margin: '30px 0px 30px 0px', fontWeight: 'bold' } }>
        Eligibility
      </Typography>
      <Typography variant="body1" sx={ { textAlign: 'left', fontSize: '18px', marginBottom: '70px' } }>
        <p>
          The academy only accepts applications from male candidates at this time. Other criteria not explicitly stated for determining eligibility will vary with each application as applicants are considered based on information specific to each individual and exceptions can be made as such. Unless otherwise stated, any applications that do not meet the following requirements WILL be denied:
        </p>
        <ul>
          <li>
            Applicants must have no documented commitment to any other footballing institution. Applicantions by candidates committed institutional education, primary, secondary or tertiary will not be accepted during the duration of said commitments as complete focus on football is required from all members of the academy.
          </li>
          <li>
            Applicants must have no medical condition(s) that discourage engagement in intense physical activity. This will be corroborated using a valid document showing required medical information. 
          </li>
        </ul>
      </Typography>
      <Typography variant={window.innerWidth < responsiveThreshold ? 'h4' : 'h3'} sx={ { textAlign: 'center', margin: window.innerWidth < responsiveThreshold ? '30px 0px 0px 0px' : '30px 0px 30px 0px', fontWeight: 'bold' } }>
        Guidelines
      </Typography>
      <Typography variant="body1" sx={ { textAlign: 'left', fontSize: '18px', marginBottom: '70px' } }>
        <p>
          The success of an application is more likely when it is made by applicants adhering to the following:
        </p>
        <ul>
          <li>
            Punctuality to any application venue is highly regarded and as such it would be correct to say that the evaluation of any candidate will begin at the arrival of said candidate to any of the application venues.
          </li>
          <li>
            Applications from candidates categorized as minors are to be made with the consent of an approved guardian. In-person consent is advised, and written and verbal consent must be corroborated by trusted sources. All sources as well as all forms of consent must be verifiable.
          </li>
          <li>
            Candidates are advised to present documents with relevant personal information to serve as a dossier, including but not limited to a valid BIRTH CERTIFICATE, MEDICAL RECORD, REPORTS FROM EDUCATIONAL INSTITUTIONS (if any). Said documents are not compulsory but serve to facilitate the enrollment process (The only execption to this is a candidate's medical record and in a case in which a candidate does not have a valid document with required medical information and has passed the other criteria in the evaluation process, medical tests will be performed to get said candidate's medical information).
          </li>
        </ul>
      </Typography>
    </Box>
  )
}
