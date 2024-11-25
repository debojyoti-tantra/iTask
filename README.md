# iTask : Vite + React Project

## `Clone this Repo`
```
git clone https://github.com/debojyoti-tantra/iTask.git
```

## `Resources`

### Run the command to create a React App using vite:
```
npm create vite@latest
```

### then install `node_modules`
```
npm install
```

### Use Tailwind by folllowing Steps:
```
npm install -D tailwindcss postcss autoprefixer
```

- Create files `tailwind.config.js` and `postcss.config.js`
```
npx tailwindcss init -p
```

- In tailwind.config.js paste this:
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- In `src/index.css` paste this:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### For making unique id's by UUID packege:
```
npm install uuid
```

- example:
```
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

### For using React icons:
```
npm install react-icons --save
```

- example:
```
import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
```

- For using react-icons go to this site -->
<a href="https://react-icons.github.io/react-icons/">react-icons</a>

### Use `react-router-dom` packege to navigate pages without reloding
- install the packege
```
npm install react-router-dom
```

- paste it  in main.jsx
```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />
   },
   {
      path: "/contact",
      element: <Contact />
   },
   {
      path: "/about",
      element: <About />
   }
])

createRoot(document.getElementById('root')).render(
 <>
   <RouterProvider router={router} />
 </>,
)
```

- we do not use `a` tag we use `Link` or `NavLink` tag
- import `Link` tag
```
import { Link } from "react-router-dom"
```

- use `Link` tag
```
<Link to="/about"> About </Link>
```

- we do not use classes in Link tag so we use `NavLink` tag
- import `NavLink` tag
```
import { NavLink } from "react-router-dom"
```
- use it
```
<NavLink className={(e) => {return e.isActive?"underline":""}} to="/contact" > Contact </NavLink>
```

- start the server
```
npm run dev
```
