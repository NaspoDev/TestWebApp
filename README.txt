Learning project for how to make a full stack web app using React and Express.js.

client/ folder contains the React app (frontend) and, server/ folder contains the Express.js app (backend).

server
1. cd into server/ folder
2. npm init
3. npm install express and any other packages your backend may need. (Ex. nodemon, ts, etc).

client
1. cd into client/ folder
2. Create your React app: npx create-vite@latest ./

server
1. Setup your server.js file.
2. Setup your routes.

client
1. Setup your proxy. (Typically create your own proxy handler for production as vite config proxy is only for development. See api.js).