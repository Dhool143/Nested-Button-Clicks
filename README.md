# React + Vite
# Event Propagation Assignment

This project demonstrates React Event Bubbling and how to stop propagation using `event.stopPropagation()`.

## Features
- Nested React components
- Event handlers for inner and outer elements
- Prevents parent event using stopPropagation()

## How to Run

1. Install dependencies
npm install

2. Start development server
npm run dev

3. Open the provided localhost link

## Test Cases
- Clicking the outer container triggers the outer event.
- Clicking the inner button triggers only the inner event.
- Event bubbling is stopped using stopPropagation().