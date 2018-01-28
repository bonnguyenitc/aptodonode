var configValues = require("./config.json");
module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${ configValues.username }:${configValues.password}@ds117158.mlab.com:17158/apptodo`;
    }
}