# LinkedIn UI/UX Rebuild

A faithful recreation of the LinkedIn interface built with React, featuring all the key components from the original design.

## Features

- **Header Navigation**: Logo, search bar, and main navigation items
- **Left Sidebar**: User profile, analytics, pages, and saved items
- **Main Feed**: Post creation interface and feed content with embedded cards
- **Right Sidebar**: LinkedIn News, puzzles, and promoted content
- **Messaging Widget**: Floating messaging interface
- **Feedback Bar**: Left-edge feedback and version information
- **Responsive Design**: Mobile-friendly layout

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── LeftSidebar.js & LeftSidebar.css
│   ├── MainFeed.js & MainFeed.css
│   ├── RightSidebar.js & RightSidebar.css
│   ├── MessagingWidget.js & MessagingWidget.css
│   └── FeedbackBar.js & FeedbackBar.css
├── App.js & App.css
├── index.js & index.css
└── ...
```

## Design Features

- **Authentic LinkedIn Colors**: Uses the official LinkedIn color palette
- **Typography**: Inter font family matching LinkedIn's design system
- **Interactive Elements**: Hover effects, transitions, and responsive behavior
- **Component Architecture**: Modular React components for easy maintenance
- **CSS Variables**: Consistent styling with CSS custom properties

## Customization

The project uses CSS custom properties for easy theming. Key variables are defined in `src/index.css`:

```css
:root {
  --linkedin-blue: #0077b5;
  --linkedin-gray: #666666;
  --linkedin-white: #ffffff;
  /* ... more variables */
}
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

This is a UI/UX rebuild project. Feel free to submit issues or enhancement requests for iterations and improvements.

