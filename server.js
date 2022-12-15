require('dotenv').config();
const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');
const mongoose = require('mongoose');
const Pokemon = require("./models/pokemon");


//inputs for content function
//estiblish connection


//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//connect data === deprecation warnings
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//seed data
app.get('/seed', (req, res)=>{
});

mongoose.connection.once("open", () => {
    console.log("connected to mongodb");
});

//Index
app.get('/pokemon', (req, res)=>{
    //find all pokemon
    pokemon.find({}, (error, allPokemon) => {
     res.render('Index', {
        pokemon: allPokemon,
        });
    });
});

//NEW
app.get('/pokemon/new', (req, res)=>{
    res.render('New')
});

//create
app.get('/pokemon', (req,res)=>{
    res.send('pokemon sent')
});

app.post("/pokemon", (req, res)=> {
    Pokemon.create(req.body, (error, newPokemon)=> {
        res.redirect("/pokemon");
    });
});

app.get("/pokemon/new", (req, res)=>{
    res.render("New");
});

//Show
app.get("/pokemon/:id", (req, res)=>{
    Pokemon.findbyId(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
        pokemon: foundPokemon,  
    });
  });
});

//Delete 
app.delete('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndRemove(req.params.id, (err, deletePokemon)=>{
        res.redirecr('/pokemon')
    })
})   

//edit
app.get('/pokemon/:id/edit', (req, res)=> {
    //find my pokemon id
    // render an edit form
    //pass in the pokemon data
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('pokemon/Edit', {
            pokemon: foundPokemon
        })
    })
})


//update
app.put('pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) =>{
        res.redirect(`/pokemon/${req.params.id}`);
        //res.redirect("/pokemon");
    })
})

app.listen(5500, () => {
    console.log("Server running on 5500");
});

