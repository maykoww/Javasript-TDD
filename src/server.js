const app = require('./app');

app.listen(process.env.APP_PORT || 3333, (err) => {
    if(err) {
        console.log(err);
    }

    console.log('Server started');
})