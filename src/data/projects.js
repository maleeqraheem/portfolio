export const projects = [
  {
    id: 'growlytics',
    title: 'Growlytics',
    status: 'Live demo',
    summary:
      'A marketing site and interactive demo dashboard for a business analytics product, built with React and Tailwind CSS.',
    highlights: [
      'Plan-based pricing with a trial sign-up flow and a demo payment form',
      'Dashboard with light and dark mode, demo data and features locked by plan',
      'Live crypto prices from CoinGecko on the Markets page',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    live: 'https://growlytics-kappa.vercel.app',
    github: 'https://github.com/maleeqraheem/growlytics',
    gallery: [
      { src: '/images/growlytics-landing.webp', alt: 'Growlytics landing page', caption: 'Landing page with animated headline and call to action' },
      { src: '/images/growlytics-dashboard.webp', alt: 'Growlytics dashboard', caption: 'Overview dashboard in demo mode with plan-based features' },
      { src: '/images/growlytics-markets.webp', alt: 'Growlytics markets page', caption: 'Markets page with live prices and 7-day charts' },
    ],
  },
  {
    id: 'maleeq-cuisine',
    title: 'Maleeq Cuisine',
    status: 'Template project (offline)',
    summary:
      'A restaurant website and online ordering template built with WordPress, Elementor and WooCommerce during my internship at Shanks.',
    highlights: [
      'Full menu with categories, product pages and a working cart',
      'Table reservation form, blog and a founder and history page',
      'Designed as a reusable restaurant template, with 28 menu items set up in WooCommerce',
    ],
    tags: ['WordPress', 'Elementor', 'WooCommerce'],
    live: null,
    github: null,
    offlineNote: 'The live site is no longer hosted.',
    gallery: [
      { src: '/images/cuisine-home.webp', alt: 'Maleeq Cuisine home page', caption: 'Home page hero' },
      { src: '/images/cuisine-bestsellers.webp', alt: 'Best selling dishes section', caption: 'Best selling dishes with ratings and cart buttons' },
      { src: '/images/cuisine-menu.webp', alt: 'Menu page with category dropdown', caption: 'Menu categories and product cards' },
      { src: '/images/cuisine-reservation.webp', alt: 'Table reservation form', caption: 'Table reservation form' },
      { src: '/images/cuisine-about.webp', alt: 'Founder and history page', caption: 'Founder and history page' },
      { src: '/images/cuisine-admin.webp', alt: 'WooCommerce products admin', caption: 'Product setup in the WooCommerce dashboard' },
    ],
    video: {
      src: '/video/cuisine-walkthrough.mp4',
      poster: '/video/cuisine-walkthrough-poster.jpg',
      note: 'Recorded on my phone from my desktop screen while the site was live.',
    },
  },
  {
    id: 'security-camera',
    title: 'Security Camera Store',
    status: 'Practice project',
    summary:
      'A product site for security cameras built with plain HTML, CSS and JavaScript, no frameworks, to sharpen my fundamentals.',
    highlights: [
      'Product cards with a working cart, quantities and totals',
      'Newsletter sign-up with validation and a thank-you modal',
      'Video modal and a responsive layout',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://maleeq-security-camera.vercel.app',
    github: 'https://github.com/maleeqraheem/maleeq-security-camera',
    gallery: [
      { src: '/images/security-hero.webp', alt: 'Security camera site hero', caption: 'Hero section with stats and feature cards' },
      { src: '/images/security-products.webp', alt: 'Product cards and cart', caption: 'Product cards with a working cart and checkout total' },
    ],
  },
]