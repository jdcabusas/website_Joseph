// src/Resume.js
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Navbar from './Navbar'; // Import the Navbar component

const Resume = () => {
  return (
    <div>
      {/* Include the Navbar here */}
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          height: '20vh',
          backgroundColor: '#1E1E2F',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          flexDirection: 'column',
          position: 'relative',
          padding: '10px',
          borderRadius: '1px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5px', zIndex: 2, fontFamily: 'Roboto, sans-serif' }}>
          Resume of Joseph Cabusas
        </Typography>
      </Box>

      {/* Page Content */}
      <Container sx={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
        <Typography variant="h3" align="center" sx={{ marginBottom: '20px' }}>
          Summary
        </Typography>
        <Typography variant="body2" align="justify" sx={{ marginBottom: '20px' }}>
          Lead Software Engineer with over 4 years of experience in software development, specializing in system and software design. Proven expertise in leading and implementing software integrations with other systems over message brokers, HTTP/TCP/UDP, and specific port configurations. Skilled in deployment and DevOps practices, including Docker, Kubernetes clusters, and CI/CD pipelines in GitLab. Experienced in coordinating multi-million dollar technological initiatives with cross-functional stakeholders. Adept at leading project teams of 4-10 engineers, ensuring the successful execution of complex enterprise applications and technological events.
        </Typography>

        <Typography variant="h3" align="center" sx={{ marginBottom: '20px' }}>
          Skills
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '20px' }}>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="body2">- Strong Programming Skills in Python and C++</Typography>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="body2">- Software Development Life Cycle (SDLC)</Typography>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="body2">- Agile Methodologies (Scrum)</Typography>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="body2">- Team Collaboration</Typography>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="body2">- DevOps (CI/CD)</Typography>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="body2">- Microservices Architecture</Typography>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="body2">- Version Control (Git)</Typography>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="body2">- Object-Oriented Programming (OOP)</Typography>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="body2">- Data Infrastructure as Code (IaC)</Typography>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Typography variant="body2">- Data Analysis and Decision-making</Typography>
          </li>
        </ul>

        <Typography variant="h3" align="center" sx={{ marginBottom: '20px' }}>
          Work Experience
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Technical Lead
        </Typography>
        <Typography variant="body2">
          Lockheed Martin
          <br />
          March 2022 - Present
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px' }}>
          Software Engineer and Technical Lead of multiple teams of Software Engineers focusing on the quick-turn R&D software development of Prototype and Demonstrations for software internally developed to support military exercises across the USA.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Main Programming Languages and Tech Used:
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px' }}>
          Python, C++, C#, Java, Docker, Development in Linux Environment, VSCode as main text editor, GitLab for version control, AWS Cloud tools.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Main Responsibilities:
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px' }}>
          Leading R&D projects aimed at modernizing and creating critical military combat systems, restructuring complex legacy systems into scalable microservices, and ensuring high-quality deliverables through comprehensive testing and stakeholder communication.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Biggest Accomplishment:
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '20px' }}>
          Successfully led the software efforts to support an Army military exercise event, significantly increasing our organization's R&D budget from $2 million to $6 million over the year.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Real Time Software Engineer
        </Typography>
        <Typography variant="body2">
          Kapsch TrafficCom North America
          <br />
          July 2021 - March 2022
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px' }}>
          Specialized in software deployment, hardware network configuration, and automating large-scale deployments in the Tolling Industry, supporting cities across the United States.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Main Programming Languages and Tech Used:
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px' }}>
          C++, Ansible, Docker, Development in Linux Environment, VIM, GitLab for version control.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Main Responsibilities:
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px' }}>
          Led automation of large deployments, managed software deployments on national highways, and developed and executed tests to ensure high-quality software.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Biggest Accomplishment:
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '20px' }}>
          Successfully integrated our software and settings onto new hardware for a San Diego customer, solving a high-priority issue through extensive testing.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Software Engineer
        </Typography>
        <Typography variant="body2">
          ASRC Federal
          <br />
          June 2020 - July 2021
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px' }}>
          Focused on the software maintenance and development of the AEGIS weapon system for Australian and Korean deployments.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Main Programming Languages and Tech Used:
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px' }}>
          C++, IBM ClearCase, Development in Linux Environment, VIM.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Main Responsibilities:
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px' }}>
          Engineered software development and integration for the AEGIS Weapon System, collaborating with System Engineering for lab-based testing.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Biggest Accomplishment:
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '20px' }}>
          Became highest performing software engineer on my team within one year of joining measured by completing most number of CPCRs (Similar to software tickets) compared to teammates supporting Australian and Korean customers.
        </Typography>

        {/* Download Resume Button */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            href="./res_jc.pdf"
            download="Joseph_Cabusas_Resume.pdf"
            sx={{ padding: '10px 20px', fontSize: '1.2rem' }}
          >
            Download Resume
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Resume;
