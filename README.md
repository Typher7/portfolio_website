# Portfolio Website

A modern and responsive portfolio website built with React, showcasing my projects, skills, and professional experience.

🌐 **Live Website**: [https://eatuahene.com](https://eatuahene.com)

## Features

- Modern UI/UX design
- Responsive layout for all devices
- Interactive project showcase
- Contact form with EmailJS integration
- Skills and qualifications section
- Smooth scrolling and animations

## Technologies Used

- React.js
- EmailJS for contact form
- Firebase for hosting
- GitHub Pages for deployment
- Swiper.js for carousels

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository
   ```bash
   git clone [repo-url]
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run start
   ```
   The application will open in your default browser at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages

## Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json`
2. Run the deployment command:
   ```bash
   npm run deploy
   ```

### Firebase

1. Install Firebase CLI (if not already installed)
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase
   ```bash
   firebase login
   ```

3. Initialize Firebase
   ```bash
   firebase init
   ```

4. Deploy to Firebase
   ```bash
   firebase deploy
   ```

## Project Structure

```
src/
  ├── assets/        # Images and static files
  ├── components/    # React components
  │   ├── about/
  │   ├── contact/
  │   ├── home/
  │   └── ...
  ├── App.js         # Main application component
  └── index.js       # Application entry point
```

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).
