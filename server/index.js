const mongoose = require('mongoose');
const app = require('./app')
const { API_VERSION, IP_SERVER, PORT_DB, PORT_SERVER } = require('./config')

mongoose.set("useFindAndModify", false);

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/facundovillard`, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("La conexion a la base de datos fue exitosa!")

        app.listen(PORT_SERVER, () => {
            console.log("##############################")
            console.log("##########API REST############")
            console.log("##############################")
            console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
        })
    }

})
