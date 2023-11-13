import React from 'react';
import missionStatement from '../../static/mission-statement.txt';
import { Box, Typography } from '@mui/material';

import styles from './styles';
import quotesIcon from './quotes1.png';
import altQuotesIcon from './quotes0.png'

export default function( { responsiveThreshold } ) {

  return(
    <Box alignContent="center" justifyContent="center" style={ { ...styles.main, backgroundColor: window.innerWidth < responsiveThreshold ? '#dedede' : 'white', padding: window.innerWidth < responsiveThreshold ? '13px' : '50px', color: 'black', ...window.innerWidth < responsiveThreshold ? { marginTop: '30px' } : {} } }>
        <Typography variant={window.innerWidth < responsiveThreshold ? 'h4' : 'h3'} sx={ {margin: '30px 0px 0px 0px', fontWeight: 'bold'} }>Overview</Typography>
        <Typography variant="body1" sx={ { textAlign: 'left', fontSize: '18px', marginBottom: '70px' } }>
          <p>
            ELITE SPACE FOOTBALL LIMITED is a private establishment created and incorporated on the 29th of September, 2017 in Enugu State, Nigeria by the current 
            Chief Executive officer, Sporting Director, and President, Chiazo Paul Okolo with the following objects as stated in the establishment's document of incorporation:
            <ul>
              <li>
                To carry on the business of football trainers, sports promoters, managers, organizers and promoters of events whether or not presented live or in transmitted form, 
                and including but not limited to football matches, boxing and training tournaments.
              </li>
              <li>
                To provide consultancy services in football, athletics meeting and races, from Nigeria and any other part of the world for both Nigerian and international football clubs.
              </li>
              <li>
                To carry on business as sports managers, coaches and instructors, and as managers and agents of sports individuals; sport commentators, sports analysts, sports journal 
                proprietors and presentation or purpose whatsoever.
              </li>
              <li>
                To engage in supply, importation, exploration, distribution and dealers in all things pertaining to sports, sports equipments, fitness equipments, and wears of all kinds, 
                including but not limited to jogging thread mills, bicycles.
              </li>
              <li>
                To carry on business of personnel and grouping training, organizing of football competition, running a football club and player transfer.
              </li>
            </ul>
            In its current incarnation, it serves as an initiative responding to the need for an established channel between European football and local footballing talent in Africa, 
            with the purpose of facilitating a career transition for said local talent from the grassroot to the global professional scene. The facilitation of this career transition 
            is enabled by connections of the orginization with agencies, scouting parties, and professional club personnel in various parts of Europe, the primary target of football 
            players globally. 
          </p><br />
        </Typography>
        <Typography variant={window.innerWidth < responsiveThreshold ? 'h4' : 'h3'} sx={window.innerWidth < responsiveThreshold ? {margin: '0px 0px 20px 0px', fontWeight: 'bold'} : {...styles.sectionHeading, fontWeight: 'bold'}}>The ELITE SPACE FOOTBALL Academy</Typography>
        {
          window.innerWidth < responsiveThreshold ? 
          <Typography variant="h6" sx={ {padding: '20px', color: 'white', backgroundColor: 'green', borderRadius: '10px', fontWeight: 'light'} }>
            "We are dedicated to discovering, developing and promoting young African football talent. Our vision is to create a platform for aspiring teenage footballers to showcase 
              their skills and potential to the world. Our mission is to provide them with the best training, guidance and exposure possible, through our academy system and our network 
              of contacts in the European football industry. We are not an agency, but a partner and a mentor for our players. We believe in the value of discipline, and passion for the game. 
              We are Elite Space Football." <br /><br /> - THE ELITE SPACE FOOTBALL FAMILY
          </Typography> :
          <Box alignContent="center" justifyContent="center" sx={ { ...styles.main, padding: '70px', margin: '30px', color: 'white', transition: 'transform 1s ease', borderRadius: '20px', backgroundColor: 'green', '&:hover': { cursor: 'default', backgroundColor: 'rgba(0,128, 0, 0.9)', transform: 'scale(1.01)' } } }>
            <img src={quotesIcon} alt="Air Quotes" style={ { height: '50px', width: '50px' } }/>
            <Typography variant="h6" sx={ {fontWeight: 'bolder', lineHeight: '2', margin: '30px'} }>
              We are dedicated to discovering, developing and promoting young African football talent. Our vision is to create a platform for aspiring teenage footballers to showcase 
              their skills and potential to the world. Our mission is to provide them with the best training, guidance and exposure possible, through our academy system and our network 
              of contacts in the European football industry. We are not an agency, but a partner and a mentor for our players. We believe in the value of discipline, and passion for the game. 
              We are Elite Space Football.
            </Typography>
            <img src={quotesIcon} alt="Air Quotes" style={ { height: '70px', width: '70px', transform: 'rotate(180deg)' } }/>
            <Typography variant="h6" sx={ { marginTop: '30px', fontWeight: 'light' } }> - THE ELITE SPACE FOOTBALL FAMILY</Typography>
          </Box>
        }
        
        <Typography variant="body1" sx={ { textAlign: 'left', fontSize: '18px', marginBottom: '70px' } }>
          <p>The process begins with aspiring football players getting enrolled in the organization's academy system, after which they undergo thorough evaluation by the academy's 
            technical staff for a period of at least 6 months. Candidates for enrollment are found by two primary methods - rigorous scouting by the orgnisation's scouting parties 
            and periodic auditions held at strategic times of the year. The organisation's scouting parties are positioned in various locations all around the country, thorughly combing 
            through the local teenage talent and gradually expanding internationally as the establishment grows. This approach ensures that the number of talented local players avaliable 
            for enrollment is maximized and a solid base to begin evaluation of said talent is established. The process of evaluation occurs in two dimensions - learning ability and attitude. 
            Students in the academy are put through various courses of learning, on and off the field, with their progress in the aforementioned dimensions are closely monitored by 
            experienced and dedicated academy personnel. Students who are unable to meet certain thresholds in tests administered periodically are evicted, leaving room for new recruits. 
            This process occurs iteratively until a student is deemed ready for participation in football on a global level.
          </p><br />
          {
            window.innerWidth < responsiveThreshold ?
            <Typography variant="h6" sx={ {padding: '20px', textAlign: 'center', fontWeight: 'light'} }>
              "If you can play football we will come to the end of the world to find you." <br/><br /> - Anonymous to Chiazo Paul Okolo, C.E.O. and President
            </Typography> :
            <Box sx={ { ...styles.main, color: 'black', transition: 'transform 1s ease', '&:hover': { cursor: 'default', transform: 'scale(1.01)' } } }>
              <img src={altQuotesIcon} alt="Air Quotes" style={ { height: '50px', width: '50px' } }/>
              <Typography variant="h6" sx={ {fontWeight: 'bolder', margin: '30px'} }>
                If you can play football we will come to the end of the world to find you.
              </Typography>
              <img src={altQuotesIcon} alt="Air Quotes" style={ { height: '70px', width: '70px', transform: 'rotate(180deg)' } }/>
              <Typography variant="h6" sx={ {fontWeight: 'light', marginTop: '30px'} }> - Anonymous to Chiazo Paul Okolo, C.E.O. and President</Typography>
            </Box>
          }
          <br />
          <p>From the moment a student is enrolled in the academy they are eligible to play on the ELITE SPACE FOOTBALL Academy team in football matches, friendlies and competitive 
            games organized by the orginization and/or her affiliates, including but not limited to the National FA (The Nigerian Football Federation). These games are documented, 
            collated, and made available to interested parties and the public, through various channels, with the aim of putting the students on a stage from which their progress can 
            also be monitored by interested parties. The videos also serve to entertain and build a support base for the organization's football team(s), leveraging on the power of 
            social connectivity created by the infrastructure that is the internet (mainly through social media). All information regarding the students are collated by the organization 
            and all channels of communication with the students regarding their professional careers pass through the organization and her network of agents.
          </p><br />
          <p>
            ELITE SPACE FOOTBALL seeks to grow, like any for profit organization, and understands that the footballing industry is highly collaborative, with success heavily depending on 
            the timing and quality of connections. The organization is thus open to partnering with interested parties to enable it achieve its various goals, with the desire to find 
            lasting connections globally that drive the organization to this end, and the belief that the the world is yet to see the best that African football has to offer.
          </p>
      </Typography>        
      </Box>
  );
}