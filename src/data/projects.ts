import { Project } from '../types';
import movieTicketImage from '../assets/projects/movie-ticket.jpg';
import movieStreamingImage from '../assets/projects/movie-streaming.jpg';
import bitcoinTradingImage from '../assets/projects/bitcoin-trading.png';
import lynktTeacherImage from '../assets/projects/Lynkt.jpg'; // or another local image
import lynktAdminImage from '../assets/projects/Lynkt.jpg';   // or another local image

export const projects: Project[] = [
    {
      id: '1',
      title: 'Movie Ticket Booking Application',
      category: 'Frontend',
      shortDescription: 'Online platform for booking movie tickets with real-time seat availability and reviews.',
      description: 'Developed a robust movie ticket booking application that allows users to view real-time seat availability, book tickets, and read/write reviews. The platform supports multiple devices and browsers, ensuring wide accessibility and seamless user experience.',
      imageUrl: movieTicketImage,
      technologies: ['ReactJS', 'CSS', 'NodeJS', 'ExpressJS', 'MongoDB'],
      features: [
        'Real-time seat availability and booking',
        'User authentication and profile management',
        'Movie listing with rating and reviews',
        'Responsive design for all devices',
        'Cross-browser compatibility including IE 6.0+',
      ],
      // githubUrl: 'https://github.com/username/movie-ticket-booking-app',
      // liveUrl: 'https://moviebooking-demo.example.com',
    },
    {
      id: '2',
      title: 'Movie Streaming Application',
      category: 'Full Stack',
      shortDescription: 'A platform to stream movies and TV shows directly using an internet connection.',
      description: 'Created a movie streaming web app that enables users to watch their favorite movies and TV shows with smooth playback, categorized browsing, and a modern UI. Optimized for multiple OS and browsers.',
      imageUrl: movieStreamingImage,
      technologies: ['ReactJS', 'Tailwind CSS', 'NodeJS', 'ExpressJS', 'MongoDB'],
      features: [
        'Video streaming of movies and shows',
        'Genre-based content filtering',
        'Responsive design with dark mode',
        'User-friendly interface with smooth navigation',
        'Multi-platform support (Windows/Linux, Chrome/IE 6.0+)',
      ],
      // githubUrl: 'https://github.com/username/movie-streaming-app',
      // liveUrl: 'https://moviestreaming-demo.example.com',
    },
    {
      id: '3',
      title: 'Bitcoin Trading Application',
      category: 'Full Stack',
      shortDescription: 'AI-integrated crypto platform with real-time trading and portfolio features.',
      description: 'Built a dynamic Bitcoin trading application featuring AI Chat Bot support, real-time data integration from Gemini and CoinGecko APIs, and secure portfolio management tools. Emphasized scalability, security, and a smooth user experience.',
      imageUrl: bitcoinTradingImage,
      technologies: ['React', 'Tailwind CSS', 'Spring Boot', 'MySQL', 'Spring Security', 'Java Mail Sender'],
      features: [
        'AI-powered chatbot support',
        'Real-time market data from Gemini and CoinGecko',
        'Secure crypto transactions and wallet system',
        'Portfolio tracking and transaction history',
        'Email verification and security features',
      ],
      // githubUrl: 'https://github.com/username/bitcoin-trading-app',
      // liveUrl: 'https://bitcointrading-demo.example.com',
    },
    {
      id: '4',
      title: 'Lynkt Teacher App',
      category: 'Mobile',
      shortDescription: 'Cross-platform mobile app for teachers to manage workshops and attendance.',
      description: 'Developed a React Native mobile application exclusively for teachers on the Lynkt platform. The app enables teachers to manage their workshops, bookings, attendance, and more. Built with a component-based architecture and integrated with RESTful APIs for robust functionality. (App is not deployed and the repository is private as it belongs to the organization.)',
      imageUrl: lynktTeacherImage,
      technologies: ['React Native', 'Redux', 'JavaScript', 'RESTful APIs', 'Expo'],
      features: [
        'Teacher-only access',
        'Workshop and booking management',
        'Attendance tracking',
        'Push notifications',
        'Responsive design for mobile',
        'Secure authentication',
      ],
      githubUrl: 'Private Repository',
      liveUrl: 'Not Deployed',
    },
    {
      id: '5',
      title: 'Lynkt Admin Web Application',
      category: 'Full Stack',
      shortDescription: 'Full-featured admin dashboard for managing the Lynkt platform.',
      description: 'Developed the complete admin side of the Lynkt platform, a web application for administrators. Features include a comprehensive admin dashboard, on-spot booking, workshop dashboard, QR scanner, user management, analytics, all bookings, attendance, waitlist, and contact message management. The application is live and used by the organization for all administrative tasks.',
      imageUrl: lynktAdminImage,
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      features: [
        'Admin dashboard overview',
        'On-spot booking system',
        'Workshop and user management',
        'QR code scanner integration',
        'Analytics and reporting tools',
        'Attendance and waitlist tracking',
        'Contact message management',
      ],
      githubUrl: 'Private Repository',
      liveUrl: 'https://www.lynkt.co/',
      liveDemoUrl: 'https://www.lynkt.co',
    },    

  ];
  