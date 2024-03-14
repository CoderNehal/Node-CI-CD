const app = require('express')();

app.get('/', (req, res) => {
    console.log('Console to drop off in production');
    res.send('Hello World');
}
);


app.listen(3000, () => {
    console.log('Server is     running on port 3000');
});