import { Box, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Resume = () => {
  const [topics, setTopics] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(50);

  useEffect(() => {
    let timer;
    if (loading && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown <= 0) {
      setLoading(false);
    }
    return () => clearInterval(timer);
  }, [loading, countdown]);

  const handleRequest = async (route) => {
    setLoading(true);
    setCountdown(50);
    setResponseMessage('');

    let input = '';
    if (route === 'create_topic') {
      input = prompt('Enter topic memo:');
    } else if (route === 'send_event') {
      const eventMessage = prompt('Enter event message:');
      const topicId = prompt('Enter topic ID:');
      if (!eventMessage || !topicId) {
        alert('Please provide both an event message and a topic ID.');
        setLoading(false);
        return;
      }
      input = { eventMessage, topicId };
    } else if (route === 'get_topic_events') {
      input = prompt('Enter topic ID:');
    }

    try {
      const response = await axios.get(`https://hedera-api-sh2l.onrender.com/${route}`, {
        params: {
          memo: route === 'create_topic' ? input : undefined,
          event_message: route === 'send_event' ? input.eventMessage : undefined,
          topic_id: route === 'send_event' ? input.topicId : route === 'get_topic_events' ? input : undefined,
        },
      });

      if (response.data.success) {
        if (route === 'get_topic_ids') {
          setTopics(response.data.data);
        }
        setResponseMessage(`Response from ${route}: ${JSON.stringify(response.data.data)}`);
      } else {
        setResponseMessage(`Error: ${response.data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error(`Error fetching from ${route}:`, error);
      setResponseMessage(`Error fetching from ${route}: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ padding: '50px 0', backgroundColor: '#eceff1' }}>
        <Container>
          <Typography variant="h2" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#263238', textAlign: 'center', marginBottom: '20px' }}>
            Hedera Blockchain API
          </Typography>
          <Typography variant="body1" sx={{ color: '#455a64', textAlign: 'center', marginBottom: '40px' }}>
            This API provides direct interaction with the Hedera Blockchain on the testnet, allowing users to create topics (identified by unique topic IDs), post events to these topics, retrieve past events for a specific topic, and view a full list of created topics. Users can verify all API inputs and interactions on the Hedera IO dashboard by visiting <a href="https://hashscan.io/testnet/dashboard" target="_blank" rel="noopener noreferrer">Hashscan</a>. Simply enter a topic ID in the search bar at Hashscan to view the complete event ledger associated with that topic.
            <br /><br />
            <strong>Note:</strong> The backend Flask application that interfaces with the Hedera Blockchain runs on Render's free tier, which may take approximately 50 seconds to boot up if inactive. Please click on "GET LIST OF TOPICS BY ID" and wait for the response to use the application.
          </Typography>

          <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <Button variant="contained" color="primary" onClick={() => handleRequest('create_topic')} sx={{ padding: '10px 20px', fontSize: '1.2rem', marginBottom: '20px' }}>
              Create Topic
            </Button>
            <Button variant="contained" color="primary" onClick={() => handleRequest('send_event')} sx={{ padding: '10px 20px', fontSize: '1.2rem', marginBottom: '20px' }}>
              Send Event
            </Button>
            <Button variant="contained" color="primary" onClick={() => handleRequest('get_topic_events')} sx={{ padding: '10px 20px', fontSize: '1.2rem' }}>
              Get Topic Events
            </Button>
            <Button variant="contained" color="primary" onClick={() => handleRequest('get_topic_ids')} sx={{ padding: '10px 20px', fontSize: '1.2rem', marginTop: '20px' }}>
              Get List Of Topics By ID
            </Button>
          </Box>

          {loading && (
            <Box sx={{ marginTop: '20px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238' }}>
                Waiting for response... Please wait {countdown} seconds
              </Typography>
            </Box>
          )}

          {topics.length > 0 && (
            <Box sx={{ marginTop: '20px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238' }}>
                Topic IDs:
              </Typography>
              {topics.map((topic, index) => (
                <Typography key={index} sx={{ color: '#455a64' }}>
                  Topic ID: {topic.topic_id} - Memo: {topic.memo}
                </Typography>
              ))}
            </Box>
          )}

          {responseMessage && (
            <Box sx={{ marginTop: '20px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#263238' }}>
                {responseMessage}
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default Resume;
