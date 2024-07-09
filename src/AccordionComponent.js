// AccordionComponent.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComponent = () => (
  <Box mt={2}>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion 1: Overview</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This section provides an overview of the project, including its purpose and key features.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion 2: Details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Detailed information about the project's components, structure, and functionality.
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Learn More
        </Button>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion 3: Additional Resources</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Links and references to additional resources for further learning and development.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion 4: FAQ</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Frequently asked questions and their answers to help you get started with the project.
        </Typography>
        <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>
          Contact Support
        </Button>
      </AccordionDetails>
    </Accordion>
  </Box>
);

export default AccordionComponent;