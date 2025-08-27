# AllianceBook

AllianceBook is a Star Wars character explorer. It allows you to browse all characters from the Star Wars universe, with search, filtering, and pagination. Avatars are loaded from a dedicated image endpoint (https://vieraboschkova.github.io/swapi-
gallery/static/assets/img/people/${characterId}.jpg). The app is fully keyboard-accessible and responsive.

## Features

- Fetches all characters from [SWAPI](https://swapi.py4e.com/)
- Search by character name
- Filter by gender (male, female, other)
- Pagination with smooth scrolling
- Responsive grid layout
- Keyboard-accessible UI (a11y)
- Animated hover effects for character cards
- Avatar images for each character

## Stack

- Next.js (React framework)
- Tailwind CSS for styling
- TypeScript for type safety

## Folder structure

- pages/ – Next.js pages
- components/ – Reusable UI components (CharacterCard, Pagination, Filter, SearchBox)
- types/ – TypeScript types
- utils/ – Utility functions (e.g., API fetch, birth year formatting)

## Accessibility

- All interactive elements are keyboard-focusable
- aria-label and aria-live are used where appropriate
- Focus outlines and hover states are clearly visible

## Scripts

- dev – Run development server
- build – Build production bundle
- start – Start production server

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/alliancebook.git
cd alliancebook

2. Install dependencies:

npm install
# or
yarn install

3. Run the development server:

npm run dev
# or
yarn dev


4. Open http://localhost:3000 in your browser.

Notes

The app fetches all characters once and applies client-side filtering and search for smoother UX.
Pagination is purely visual and slices the filtered list.
Some characters may not have images; a placeholder is shown in such cases.

