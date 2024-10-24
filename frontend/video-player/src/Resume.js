// src/Resume.js
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import Navbar from './Navbar'; // Import the Navbar component

const Resume = () => {
  return (
    <div>
      {/* Include the Navbar here */}
      <Navbar />

      {/* Resume Section */}
      <Box sx={{ padding: '50px 0', backgroundColor: '#eceff1' }}>
        <Container>
          <Typography variant="h2" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#263238', textAlign: 'center', marginBottom: '40px' }}>
            Joseph Cabusas
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
          <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', marginBottom: '20px' }}>
            Summary
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', lineHeight: '1.6', marginBottom: '40px' }}>
            Lead Software Engineer with over four years of experience in software development, specializing in system and software design. Proven expertise in leading and implementing software integrations with other systems over message brokers, network protocols (HTTP/TCP/UDP), and specific port configurations. Skilled in deployment and DevOps practices, including Docker, Kubernetes clusters, and CI/CD pipelines in GitLab. Experienced in coordinating multi-million dollar technological initiatives with cross-functional stakeholders. Adept at leading project teams of 4-10 engineers, ensuring the successful execution of complex enterprise applications and technological events.
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', marginBottom: '20px' }}>
            Skills
          </Typography>
          <Grid container spacing={2}>
            {[
              "Strong Programming Skills in Python, C++ and infrastructure as code (IaC)",
              "Software Development Life Cycle (SDLC)",
              "Agile Methodologies (Scrum)",
              "Mentorship",
              "DevOps (CI/CD)",
              "Microservices Architecture",
              "Version Control (Git)",
              "Object-Oriented Programming (OOP)",
              "Client and Team Communication",
              "Data Analysis and Decision-making"
            ].map((skill, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper elevation={2} sx={{ padding: '10px', backgroundColor: '#fff' }}>
                  <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
                    {skill}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', marginBottom: '20px', marginTop: '40px' }}>
            Work Experience
          </Typography>

          {/* Work Experience Section */}
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
                  Software Engineer/Technical Lead
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a' }}>
                  Lockheed Martin
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
                  <strong>March 2022 - Present</strong>
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
                  Software Engineer and Technical Lead of multiple teams, driving rapid R&D efforts to develop advanced software solutions, proof-of-concept prototypes, and demonstrations in support of military exercises across the USA.
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
                  <strong>Main Programming Languages and Tech Used:</strong> Python, C++, C#, Java, Docker, Development in Linux Environment, VSCode, GitLab, AWS Cloud tools.
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
                  <strong>Main Responsibilities:</strong> Currently leading R&D projects aimed at modernizing and creating critical military combat systems, utilizing Docker, Python, and GitLab for efficient development and DevOps in a Linux environment. Restructure complex legacy systems into scalable microservices, manage the full lifecycle of projects from requirements to product demonstrations, and ensure high-quality deliverables through comprehensive testing and stakeholder communication. Additionally, mentor junior team members to help them develop their technical skills and grow professionally.
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
                  <strong>Biggest Accomplishment:</strong> Successfully led the software development efforts for an Army military exercise event, resulting in a significant increase in our organization's R&D budget from $2 million to $6 million within a year.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
                  Real Time Software Engineer
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a' }}>
                  Kapsch TrafficCom North America
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
                  <strong>July 2021 - March 2022</strong>
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
                  Software Engineer at Kapsch TrafficCom NA, specializing in software deployment, hardware network configuration, and automating large-scale deployments in the Tolling Industry.
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
                  <strong>Main Programming Languages and Tech Used:</strong> C++, Ansible, Docker, Development in Linux Environment, VIM, GitLab.
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
                  <strong>Main Responsibilities:</strong> Led automation of large deployments using Docker, Python, and Ansible, improving software delivery. Managed software deployments on national highways, enhancing traffic and operational efficiency.
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
                  <strong>Biggest Accomplishment:</strong> Successfully integrated our software and settings onto new hardware for a San Diego customer, solving a high-priority issue through extensive testing.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginBottom: '20px' }}>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
                  Software Engineer
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a' }}>
                  ASRC Federal
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
                  <strong>June 2020 - July 2021</strong>
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
                  Software Developer focusing on the software maintenance and development of AEGIS weapon system for Australian and Korean deployments.
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
                  <strong>Main Programming Languages and Tech Used:</strong> C++, IBM ClearCase, Development in Linux Environment, VIM.
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
                  <strong>Main Responsibilities:</strong> Engineered software development and integration for the AEGIS Weapon System, closely collaborated with System Engineering for lab-based testing.
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
                  <strong>Biggest Accomplishment:</strong> Became the highest performing software engineer on my team within one year of joining.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Education Section */}
          <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', marginBottom: '20px', marginTop: '40px' }}>
            Education
          </Typography>
          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginBottom: '20px' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
              B.S. in Computer Engineering
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a' }}>
              University of San Carlos
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
              October 2012 - April 2018, Cebu City, Philippines
            </Typography>
          </Paper>

          {/* Other Work Experience & Additional Information Section */}
          <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', marginBottom: '20px', marginTop: '40px' }}>
            Other Work Experience & Additional Information
          </Typography>
          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginBottom: '20px' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
              Cabs Equities Automated Trading
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
              Solo Project
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
              Suite of algorithmic trading systems for Forex and Options markets, leveraging advanced algorithms and cutting-edge technology for execution with precision.
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
              Real-time market analysis, intelligent decision-making, and optimized trading strategies.
            </Typography>
          </Paper>

          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginBottom: '20px' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
              Spanish Customer Service Rep
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a' }}>
              Ocean Home Health
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
              May 2018 - Feb 2020
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
              Managed intake of 80 - 100 calls daily addressing patient concerns, resolving problems, and effectively coordinating delivery of medical equipment. Guided and instructed patients on the operation and maintenance of oxygen equipment and CPAP use.
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
              Provided comprehensive guidance to patients on completion of medical documentation needed to provide medical equipment.
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
              Handled all Spanish patient concerns.
            </Typography>
          </Paper>

          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', marginBottom: '20px' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
              Crew Member
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#546e7a' }}>
              McDonald's
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
              June 2010 - July 2012
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f', marginTop: '10px' }}>
              Roles include: Drive-through, Food Runner, and Cashier.
            </Typography>
          </Paper>

          {/* Additional Information Section */}
          <Paper elevation={3} sx={{ padding: '1px', backgroundColor: '#fff', borderRadius: '10px', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238', marginTop: '10px' }}>
            <strong>Additional Information</strong>
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
            - Active SECRET Clearance
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: '#37474f' }}>
            - Fluent in Spanish
          </Typography>
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default Resume;
