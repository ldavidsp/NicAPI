const mongoose = require("mongoose");
const uridb = require("./uridb");

mongoose.set('useFindAndModify', false);
mongoose.connect(uridb, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

