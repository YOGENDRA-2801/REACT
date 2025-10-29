Nodemon ek development tool hai jo automatically server restart karta hai jab bhi tum code change karte ho.
bash: npm install -D nodemon
package.json mein: "scripts": { "start": "nodemon index.js" }
bash: npm start

MongoDB Port (27017): Database server ka port - data store karne ke liye
Express Port (3000): Web server ka port - HTTP requests handle karne ke liye (browser/frontend se)

Connection ke ander databases ; database ke ander collections ; collection ke ander document