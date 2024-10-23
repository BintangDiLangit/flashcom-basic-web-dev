const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/ProductRoutes');


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', productRoutes);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})