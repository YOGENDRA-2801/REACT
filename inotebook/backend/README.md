Nodemon ek development tool hai jo automatically server restart karta hai jab bhi tum code change karte ho.
bash: npm install -D nodemon
package.json mein: "scripts": { "start": "nodemon index.js" }
bash: npm start

MongoDB Port (27017): Database server ka port - data store karne ke liye
Express Port (3000): Web server ka port - HTTP requests handle karne ke liye (browser/frontend se)

Connection ke ander databases ; database ke ander collections ; collection ke ander document

req-body (req krte time kuch data) me kuch bhejna hai to middleware use krna padega for that use app.use(express.json()) & header me content-type set to app/json
Q1 const user = User(req.body) // aesa kese likha and work ku kiya as req-body m ek obj h and User m koi aesa appropriate method nahi h
Q1 save() method kahi define nahi kiya mene + type krte time uska suggestion bhi nahi but phir bhi kaam kya 
express validator
Q2 query v/s body while using express validator
Q2 User.save() vs User.create() 

Promise
    1. When the promise is resolved, the value passed in resolve(value) automatically becomes the argument of .then(value => ...).
    2. When the promise is rejected, the value passed in reject(error) automatically becomes the argument of .catch(error => ...).
res.json(data) - 
    1. JSON response bhejta hai client ko 
    2. Koi bhi JavaScript object/array/value as a argument le skta hai 
    3. JS obj ko JSON string mein convert karta > Content-Type: app/json header set krta> Client ko response bhej deta
    4. Usage: API responses bhejne ke liye , Frontend ko data send karna , Status ke saath bhi use kar sakte ho
    5. res.send() → Any type (HTML, text, JSON) , res.json() → Only JSON, explicitly sets content-type