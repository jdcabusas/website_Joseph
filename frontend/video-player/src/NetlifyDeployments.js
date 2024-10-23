import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, List, ListItem, ListItemText} from '@mui/material';

const NetlifyDeployments = () => {
  const [deployments, setDeployments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDeployments = async () => {
    const token = 'nfp_weRV97etrysW3pjeGM1bAR1E5TgKAbg5185e';
    const siteId = '3257ebd5-2c65-4a22-a3f7-bbe048b94cf1';
    try {
      const response = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/deploys`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch deployments');
      }
      const data = await response.json();
      setDeployments(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeployments();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 4, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', borderRadius: '8px' }}>
      <Typography
        variant="h5"
      align="center"
      gutterBottom
      sx={{
      fontWeight: '600', // Slightly bolder weight for a modern look
      color: '#3f51b5', // Use a primary color for emphasis
      letterSpacing: '0.5px', // Adds a little space between letters for a modern feel
      fontFamily: 'Roboto, sans-serif', // Ensure consistent font family
        }}
      >
        Netlify API CI/CD Integration
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{
          color: '#4a4a4a',
          marginBottom: '20px',
          lineHeight: '1.8',
          fontFamily: 'Roboto, sans-serif',
          maxWidth: '700px',
          margin: '0 auto',
          padding: '0 16px',
          //backgroundColor: '#fff',
          //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        }}
      >
        This API showcases the continuous integration and deployment (CI/CD) pipeline used to develop this webapp. By pulling deployment data from Netlify, it highlights how each commit triggers a new deployment, ensuring seamless updates and rapid delivery of new features.
      </Typography>

      <Box
        sx={{
          maxHeight: 400,
          overflowY: 'auto',
          border: '1px solid #ddd',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          padding: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <List>
          {deployments.map((deploy) => (
            <ListItem
              key={deploy.id}
              sx={{
                borderBottom: '1px solid #e0e0e0',
                paddingBottom: 2,
                '&:hover': {
                  backgroundColor: '#f0f4ff',
                },
                transition: 'background-color 0.3s ease',
              }}
            >
              <ListItemText
                primary={`Context: ${deploy.context}`}
                secondary={
                  <>
                    <Typography variant="body2" color="textSecondary"><strong>State:</strong> {deploy.state}</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Branch:</strong> {deploy.branch}</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Commit Ref:</strong> {deploy.commit_ref}</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Commit Message:</strong> {deploy.title}</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Author:</strong> {deploy.committer || 'N/A'}</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Deploy URL:</strong> <a href={deploy.deploy_ssl_url} target="_blank" rel="noopener noreferrer" style={{ color: '#2c387e', textDecoration: 'underline' }}>{deploy.deploy_ssl_url}</a></Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Reviewer URL:</strong> <a href={deploy.review_url} target="_blank" rel="noopener noreferrer" style={{ color: '#2c387e', textDecoration: 'underline' }}>{deploy.review_url || 'N/A'}</a></Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Published At:</strong> {deploy.published_at ? new Date(deploy.published_at).toLocaleString() : 'Not published'}</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Deploy Time:</strong> {deploy.deploy_time} seconds</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Previous Deploy:</strong> {deploy.previous_commit_ref || 'N/A'}</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Deploy Summary:</strong> {deploy.summary || 'N/A'}</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Error Logs:</strong> {deploy.error_details || 'None'}</Typography>
                    <Typography variant="body2" color="textSecondary"><strong>Error:</strong> {deploy.error_message || 'None'}</Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default NetlifyDeployments;
