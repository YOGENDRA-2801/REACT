import express from 'express';

const notesRouter = express.Router() ;

notesRouter.get('/', (req, res) => {
    const demo = {
        shabd: "Demo notes Text" , 
        ankh: 67890
    } ;
    res.json(demo) ; 
    // Ek route mein sirf ek response bhej sakte ho. Tumne pehle res.json(demo) bhej diya, toh response complete ho gaya.
    // res.send('Notes Page') // yah wala response nahi jayega ; Dono ek saath nahi chal sakte.
})

export default notesRouter;