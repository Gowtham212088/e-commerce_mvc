const app = require('../index');
require('../config/db');
const PORT = 8000;

app.listen(PORT,()=>console.log(`App is running on port ${PORT}`))