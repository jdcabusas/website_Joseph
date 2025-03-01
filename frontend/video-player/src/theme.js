import { createTheme } from '@mui/material/styles';

// Create a modern theme with consistent design tokens
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Modern blue that's more vibrant
      light: '#60a5fa',
      dark: '#1e40af',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8b5cf6', // Purple for accents
      light: '#a78bfa',
      dark: '#7c3aed',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc', // Lighter background
      paper: '#ffffff',
      dark: '#0f172a', // Darker navy for contrast
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', // Deeper, more modern gradient
      accent: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', // Accent gradient for highlights
    },
    text: {
      primary: '#1e293b', // Darker for better readability
      secondary: '#64748b', // Muted blue-gray
      light: '#f8fafc',
    },
    divider: 'rgba(100, 116, 139, 0.12)',
    success: {
      main: '#10b981', // Modern green
      light: '#34d399',
      dark: '#059669',
    },
    warning: {
      main: '#f59e0b', // Modern amber
      light: '#fbbf24',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444', // Modern red
      light: '#f87171',
      dark: '#dc2626',
    },
    info: {
      main: '#3b82f6', // Modern sky blue
      light: '#60a5fa',
      dark: '#2563eb',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Poppins, system-ui, sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h2: {
      fontFamily: 'Poppins, system-ui, sans-serif',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.875rem',
      },
    },
    h3: {
      fontFamily: 'Poppins, system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: 'Poppins, system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontFamily: 'Poppins, system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: 'Poppins, system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },
    subtitle1: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.5,
      letterSpacing: '0.015em',
    },
    subtitle2: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    body1: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      textTransform: 'none',
      lineHeight: 1.75,
      letterSpacing: '0.015em',
    },
    caption: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: '0.75rem',
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
    overline: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(15, 23, 42, 0.04)',
    '0px 4px 8px rgba(15, 23, 42, 0.05)',
    '0px 6px 12px rgba(15, 23, 42, 0.06)',
    '0px 8px 16px rgba(15, 23, 42, 0.07)',
    '0px 10px 20px rgba(15, 23, 42, 0.08)',
    '0px 12px 24px rgba(15, 23, 42, 0.09)',
    '0px 14px 28px rgba(15, 23, 42, 0.10)',
    '0px 16px 32px rgba(15, 23, 42, 0.11)',
    '0px 18px 36px rgba(15, 23, 42, 0.12)',
    '0px 20px 40px rgba(15, 23, 42, 0.13)',
    '0px 22px 44px rgba(15, 23, 42, 0.14)',
    '0px 24px 48px rgba(15, 23, 42, 0.15)',
    '0px 26px 52px rgba(15, 23, 42, 0.16)',
    '0px 28px 56px rgba(15, 23, 42, 0.17)',
    '0px 30px 60px rgba(15, 23, 42, 0.18)',
    '0px 32px 64px rgba(15, 23, 42, 0.19)',
    '0px 34px 68px rgba(15, 23, 42, 0.20)',
    '0px 36px 72px rgba(15, 23, 42, 0.21)',
    '0px 38px 76px rgba(15, 23, 42, 0.22)',
    '0px 40px 80px rgba(15, 23, 42, 0.23)',
    '0px 42px 84px rgba(15, 23, 42, 0.24)',
    '0px 44px 88px rgba(15, 23, 42, 0.25)',
    '0px 46px 92px rgba(15, 23, 42, 0.26)',
    '0px 48px 96px rgba(15, 23, 42, 0.27)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          overflowX: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '10px 24px',
          transition: 'all 0.3s ease',
          fontWeight: 600,
          textTransform: 'none',
          fontFamily: 'Inter, system-ui, sans-serif',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(15, 23, 42, 0.16)',
          },
        },
        contained: {
          boxShadow: '0 4px 10px rgba(15, 23, 42, 0.12)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1e40af 0%, #4338ca 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        outlinedPrimary: {
          borderColor: '#2563eb',
          '&:hover': {
            borderColor: '#1e40af',
          },
        },
        outlinedSecondary: {
          borderColor: '#8b5cf6',
          '&:hover': {
            borderColor: '#7c3aed',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
          },
        },
        textPrimary: {
          color: '#2563eb',
          '&:hover': {
            color: '#1e40af',
          },
        },
        textSecondary: {
          color: '#8b5cf6',
          '&:hover': {
            color: '#7c3aed',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
            transform: 'translateY(-5px)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '80px',
          '@media (min-width: 600px)': {
            minHeight: '80px',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            '& fieldset': {
              borderColor: 'rgba(100, 116, 139, 0.2)',
              transition: 'all 0.2s ease',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(37, 99, 235, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#2563eb',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          fontWeight: 500,
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 2px 6px rgba(15, 23, 42, 0.1)',
          },
        },
        colorPrimary: {
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          color: '#2563eb',
          '&:hover': {
            backgroundColor: 'rgba(37, 99, 235, 0.15)',
          },
        },
        colorSecondary: {
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          color: '#8b5cf6',
          '&:hover': {
            backgroundColor: 'rgba(139, 92, 246, 0.15)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(100, 116, 139, 0.12)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
  },
});

export default theme;