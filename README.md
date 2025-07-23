# Next.js Project Setup and Basics
Through this project the core fundamental concepts from initial project setup to building interactive components and fetching data from external APIs were covered. 

## Project Requirements
- Node.js (v16 or later)
- npm or yarn package manager
- Basic knowledge of React and TypeScript
- Familiarity with HTML/CSS
- Git and GitHub account
- Code editor (VS Code recommended)

## Practices adheredto in this project
**1. Project Structure**
- Organize components by domain (layout, common, etc.)
- Keep interfaces in a dedicated folder
- Separate pages according to routes

**2. Component design**
- Creation of reusable, modular components
- Usage of TypeScript interfaces for props
- The single responsibility principle was followed

**3. Code Quality**
- Usage of ESLint for linting
- Maintain of consistent code style
- Addition of meaningful comments where necessary

**4. Performance**
- Optimization of API calls
- Implementation of lazy loading where appropriate
- Use of Tailwind CSS for efficient styling

**5. Documentation**
- Maintaining of a clear README.
- Documentation of component props and usage
- Keeping commit messages descriptive

## Project Structure
alx-project-0x02/ <br/>
├── components/ <br/>
│   ├── common/ <br/>
│   │   ├── Button.tsx <br/>
│   │   ├── Card.tsx <br/>
│   │   ├── PostCard.tsx <br/>
│   │   ├── PostModal.tsx <br/>
│   │   └── UserCard.tsx <br/>
│   └── layout/ <br/>
│       └── Header.tsx <br/>
├── interfaces/ <br/>
│   └── index.ts <br/>
├── pages/ <br/>
│   ├── _app.tsx <br/>
│   ├── _document.tsx <br/>
│   ├── about.tsx <br/>
│   ├── home.tsx <br/>
│   ├── index.tsx <br/>
│   ├── posts.tsx <br/>
│   └── users.tsx <br/>
├── public/ <br/>
│   └── assets/ <br/>
│       └── images/ <br/>
├── styles/ <br/>
│   └── globals.css <br/>
├── .eslintrc.json <br/>
├── next.config.js <br/>
├── package.json <br/>
├── README.md <br/>
└── tsconfig.json <br/>

## Implementation Guide
1. Start by setting up the Next.js project with TypeScript and Tailwind CSS
2. Implement basic routing with the Pages Router
3. Build reusable components one by one, starting with simple ones (Card, Button)
4. Progress to more complex components (Modal, PostCard, UserCard)
5. Implement the Header component for navigation
6. Fetch and display data from JSONPlaceholder API
7. Test each component and page as you build them
