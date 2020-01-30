const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://felipe-omnistack:guitardr1@cluster0-sddfh.gcp.mongodb.net/noderest?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


module.exports = mongoose;