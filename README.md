# JavaScript Course - SuperSimpleDev Tutorial

This repository contains my code and exercises while following the [JavaScript Full Course (2024)](https://www.youtube.com/watch?v=EerdGm-ehJQ) by SuperSimpleDev.

## 📁 Repository Structure

The files are organized by lesson number, showing progression from basic HTML/CSS integration to advanced JavaScript concepts:

### Lesson 04: HTML, CSS & First JavaScript
- [04-website.html](04-website.html) - Basic HTML/CSS with first JavaScript alert
- [04-exercise.html](04-exercise.html) - Product page with interactive buttons

### Lesson 05: Variables & Basic Operations
- [05-variables.html](05-variables.html) - Variable declarations and operations
- [05-exercise.html](05-exercise.html) - Name and cost calculations with template literals
- [05-calculator-v1.html](05-calculator-v1.html) - Basic calculator using string concatenation
- [05-cart-quantity-v1.html](05-cart-quantity-v1.html) - Simple cart quantity tracker

### Lesson 06: Booleans & Conditionals
- [06-booleans.html](06-booleans.html) - If/else statements and conditional logic
- [06-exercise.html](06-exercise.html) - Time-based greetings and discount logic
- [06-rock-paper-scissors-v1.html](06-rock-paper-scissors-v1.html) - Rock Paper Scissors with inline logic
- [06-coin-flip-v1.html](06-coin-flip-v1.html) - Basic coin flip game
- [06-cart-quantity-v2.html](06-cart-quantity-v2.html) - Cart with validation (max 10 items)

### Lesson 07: Functions
- [07-exercises.html](07-exercises.html) - Various function exercises (temperature/length converters)
- [07-calculator-v2.html](07-calculator-v2.html) - Refactored calculator with `updateCalculation` function
- [07-cart-quantity-v3.html](07-cart-quantity-v3.html) - Cart refactored with `updateCartQuantity` function
- [07-rock-paper-scissors-v2.html](07-rock-paper-scissors-v2.html) - Game refactored with `playGame` and `pickComputerMove` functions

### Lesson 08: Objects & Local Storage
- [08-objects.html](08-objects.html) - Object creation, manipulation, and property access
- [08-exercise.html](08-exercise.html) - Object exercises with product comparisons
- [08-calculator-v3.html](08-calculator-v3.html) - Calculator with localStorage persistence
- [08-coin-flip-v2.html](08-coin-flip-v2.html) - Coin flip with score tracking using objects
- [08-rock-paper-scissors-v3.html](08-rock-paper-scissors-v3.html) - Complete game with score persistence

### Lesson 09: DOM Manipulation
- [09-exercise.html](09-exercise.html) - DOM exercises with button interaction and input handling
- [09-cart-quantity-v4.html](09-cart-quantity-v4.html) - Cart with DOM updates and live display
- [09-calculator-v4.html](09-calculator-v4.html) - Calculator with visual display element
- [09-amazon-shipping-calculator-v1.html](09-amazon-shipping-calculator-v1.html) - Basic shipping cost calculator
- [09-youtube-subscribe-v1.html](09-youtube-subscribe-v1.html) - Toggle subscribe button functionality
- [09-rock-paper-scissors-v4.html](09-rock-paper-scissors-v4.html) - Game with DOM display for results and moves

### Lesson 10: CSS Integration & Styling
- [10-exercise.html](10-exercise.html) - Styled button exercises with toggle functionality
- [10-calculator-v5.html](10-calculator-v5.html) - Professional calculator with styling
- [10-rock-paper-scissors-v5.html](10-rock-paper-scissors-v5.html) - Styled game with emoji icons
- [10-amazon-shipping-calculator-v2.html](10-amazon-shipping-calculator-v2.html) - Enhanced shipping calculator with error handling
- [10-youtube-subscribe-v2.html](10-youtube-subscribe-v2.html) - Styled subscribe button with visual states

### Lesson 11: Arrays & Loops
- [11-exercise.html](11-exercise.html) - Comprehensive array and loop exercises
- [11-todo-list.html](11-todo-list.html) - Interactive todo list application

### Lesson 12: Advanced Functions
- [12-exercise.html](12-exercise.html) - Advanced function exercises including timers and intervals
- [12-rock-paper-scissors-v6.html](12-rock-paper-scissors-v6.html) - Final game version with auto-play feature

### Lesson 18: Backend Communication & HTTP Requests
- [18-exercise.html](18-exercise.html) - HTTP request exercises with XMLHttpRequest, fetch API, and async/await

## 🎯 Key Learning Concepts

### Variables & Data Types
- `let` and `const` declarations
- String interpolation with template literals
- Number operations and calculations

### Control Flow
- Boolean logic and comparisons
- `if/else if/else` statements
- Conditional (ternary) operators

### Functions
- Function declarations and expressions
- Parameters and return values
- Code organization and reusability
- Arrow functions and function expressions
- Callback functions and higher-order functions

### Objects & Data Persistence
- Object creation and property access
- JSON serialization with `JSON.stringify()` and `JSON.parse()`
- localStorage for data persistence
- Object methods and dynamic properties

### DOM Manipulation & Events
- `document.querySelector()` for element selection
- Event handling with `onclick` and `onkeydown`
- Dynamic content updates with `innerHTML`
- CSS class manipulation with `classList`
- Input validation and form handling

### Arrays & Iteration
- Array creation and manipulation methods
- `for` loops and array iteration
- `forEach()` method for functional programming
- Array methods like `push()`, `splice()`, and `slice()`
- Complex data structures and nested arrays

### Advanced Functions & Timing
- `setTimeout()` and `setInterval()` for delayed execution
- `clearTimeout()` and `clearInterval()` for cleanup
- Function scope and closure concepts
- Event-driven programming patterns

### HTTP Requests & Backend Communication
- XMLHttpRequest for traditional AJAX requests
- Fetch API for modern HTTP requests
- Async/await for handling asynchronous operations
- Promise-based programming patterns
- Error handling with try/catch blocks
- CORS (Cross-Origin Resource Sharing) concepts
- HTTP status codes and error responses
- JSON data exchange with backend services

## 🚀 Project Evolution

### Calculator Project
1. **v1**: Basic string concatenation for building expressions
2. **v2**: Refactored with `updateCalculation()` function
3. **v3**: Added localStorage persistence to remember calculations
4. **v4**: Added DOM display for real-time calculation viewing
5. **v5**: Professional styling with color-coded buttons and responsive design

### Rock Paper Scissors Game
1. **v1**: Inline logic with repeated code for each choice
2. **v2**: Organized with `playGame()` and `pickComputerMove()` functions
3. **v3**: Complete game with score tracking, reset functionality, and localStorage
4. **v4**: DOM integration for displaying results and moves
5. **v5**: Professional styling with emoji icons and improved UX
6. **v6**: Auto-play feature with start/stop functionality using intervals

### Cart Quantity System
1. **v1**: Basic increment/decrement operations
2. **v2**: Added validation for cart limits (0-10 items)
3. **v3**: Refactored with single `updateCartQuantity()` function
4. **v4**: Live DOM updates showing cart quantity in real-time

### Todo List Application
- Complete CRUD (Create, Read, Update, Delete) functionality
- LocalStorage persistence for todo items
- Date input integration
- Dynamic list rendering with `forEach()`

## 🎮 Interactive Projects

- **Rock Paper Scissors** - Complete game with auto-play and professional styling
- **Calculator** - Fully functional calculator with persistent memory and visual feedback
- **Cart System** - Shopping cart quantity management with live updates
- **Coin Flip Game** - Probability game with win/loss tracking
- **Todo List** - Full-featured task management application
- **Amazon Shipping Calculator** - Cost calculator with validation and error handling
- **YouTube Subscribe Button** - Interactive button with state management

## 💾 Technologies Used

- HTML5
- CSS3 (responsive design, flexbox, grid)
- Vanilla JavaScript (ES6+ features)
- localStorage API
- DOM Events and Manipulation
- Timing functions (setTimeout, setInterval)
- Array methods and functional programming concepts
- HTTP Request APIs (XMLHttpRequest, Fetch)
- Async/Await and Promise handling
- Backend communication and API integration

## 📝 Notes

This repository demonstrates the progression from basic JavaScript concepts to building complex interactive web applications with backend communication capabilities. Each version shows incremental improvements in code organization, functionality, user experience, and visual design.

The exercises follow best practices for learning JavaScript fundamentals, including:
- Separation of concerns (HTML, CSS, JavaScript)
- Event-driven programming
- Functional programming concepts
- DOM manipulation and responsive design
- Data persistence and state management
- Error handling and input validation
- Asynchronous programming patterns
- Backend API integration and HTTP communication

The projects evolve from simple proof-of-concepts to production-ready applications with professional styling, robust functionality, and modern web development practices including backend integration and asynchronous data handling.