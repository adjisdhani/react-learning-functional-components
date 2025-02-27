# ReactJS Learning Project

This project is a simple demonstration of how to get started with React JS. It includes setting up a React app, creating functional components, and managing state using hooks. 

## Prerequisites

Before you can get started with React, you need to have **Node.js** and **npm** (Node Package Manager) installed on your machine.

### Install Node.js and npm

1. Go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
2. Download the recommended version of Node.js for your operating system.
3. Install Node.js by following the installation steps on the website.

After installation, you can check if Node.js and npm were successfully installed by running the following commands in your terminal:

```bash
node -v
npm -v
```

### Install The Project
```
npx create-react-app react-functional-components
```
### Open The Project
```
cd react-functional-components
```
### Start Project
```
npm start
```
### Structure The Project
```
my-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
```

src/App.js: This is where you write the main application component.
src/index.js: This is the entry point of the application where React connects to the DOM.
public/index.html: This is the HTML template that React will render into.

### Functional Components
In React, components are the building blocks of the application. Functional Components are simpler components that are written using JavaScript functions. Here's an example of a simple functional component.

Example: App.js

```
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;

```

Example: Greeting.js

```
import React from 'react';

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

export default Greeting;

```

How it works:
App.js imports and uses the Greeting component, passing a name prop to it.
Greeting.js renders a simple message using the name prop.

### Managing State in Functional Components

React allows you to manage state within functional components using hooks. The most common hook is useState.

Example: Adding State to Greeting.js

```
import React, { useState } from 'react';

function Greeting(props) {
  const [message, setMessage] = useState("Welcome!");

  const changeMessage = () => {
    setMessage("Message has been changed!");
  };

  return (
    <div>
      <h2>{props.name}, {message}</h2>
      <button onClick={changeMessage}>Change Message</button>
    </div>
  );
}

export default Greeting;

```

How it works:
We use the useState hook to create a message state variable and a setMessage function to update the state.
When the user clicks the "Change Message" button, the changeMessage function updates the message state, and React re-renders the component with the new state.

### Explain

---

- **Prerequisites**: Menyebutkan kebutuhan dasar untuk menjalankan React, yaitu Node.js dan npm.
- **Setting up React**: Langkah-langkah mulai dari instalasi hingga menjalankan aplikasi.
- **Project Structure**: Menjelaskan struktur folder yang dibuat oleh Create React App.
- **Functional Components**: Memberikan contoh bagaimana membuat komponen fungsional dan menjelaskan cara kerja prop dan komponen dalam React.
- **Managing State**: Menunjukkan cara menggunakan `useState` hook untuk mengelola state dalam komponen fungsional.
- **Running the Application**: Menyediakan instruksi untuk menjalankan aplikasi dan melihatnya di browser.


### Author
**Adjis Ramadhani Utomo**

### License
This project is licensed under the MIT License - see the LICENSE file for details.