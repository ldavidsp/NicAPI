const mongoose = require("mongoose");

const uri = "mongodb+srv://jonariv97:gKH4vJgamhVIUJVx@nicapi-cluster-phkkv.mongodb.net/test?retryWrites=true&w=majority";

mongoose.set('useFindAndModify', false);
mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

