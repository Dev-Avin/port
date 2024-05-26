# Motion Art for Elementor - React WebGL Site Clone

## Overview

This project is a React-based clone of the "Motion Art for Elementor" website, incorporating WebGL for enhanced graphical effects. The site is designed to demonstrate the powerful features and seamless integration of the Motion Art plugin with the Elementor platform. 

## Features

- **Responsive Design**: Ensures a consistent visual experience across all devices.
- **WebGL Effects**: Utilizes WebGL for captivating animations and interactive visual elements.
- **Intuitive Interface**: Designed to be user-friendly, providing a smooth experience for both designers and visitors.
- **Browser Compatibility**: Supported by all major web browsers.
- **Lightweight**: Optimized for performance without compromising on visual appeal.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Dev-Avin/MotionEffects.git)
    ```

2. **Navigate to the project directory**:
    ```sh
    cd MotionEffects
    ```

3. **Install dependencies**:
    ```sh
    npm install
    ```

4. **Start the development server**:
    ```sh
    npm start
    ```

The application will be available at `http://localhost:5173`.

## Usage

### Key Components

- **`Features`**: Displays the key features of the Motion Art plugin with pop-in animations using Intersection Observer.
- **`Achievements`**: Showcases user reviews and ratings with animated effects.
- **`Application`**: Details how the plugin can be applied to sections or entire pages with smooth transitions.
- **`Header`**: Contains navigation and key action buttons like "Purchase Now".
- **`Footer`**: Includes copyright information and links to documentation and support.

### Intersection Observer

The components use the Intersection Observer API to add pop-in animations when elements come into view. This creates an engaging and dynamic user experience.

### CSS Animations

Custom CSS animations are defined to enhance the visual appeal. The animations include smooth transitions and scaling effects to draw the user's attention to important features.

## Customization

### Adding New Features

1. Create a new component in the `src/components` directory.
2. Define the new feature's layout and style.
3. Import and include the new component in the main application file (`App.js`).

### Modifying Animations

1. Open the `src/styles.css` file.
2. Locate the animation classes and adjust the properties as needed.
3. Save the changes and observe the updated animations on the site.

## Dependencies

This project leverages the following key dependencies:

- **React**: For building the user interface.
- **WebGL**: For creating interactive graphical effects.
- **Intersection Observer API**: For handling element visibility and triggering animations.
- **CSS3**: For styling and animations.
