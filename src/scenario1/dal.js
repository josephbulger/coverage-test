var database = require('../deps/database');

module.exports = {
    getVideo: function(videoId) { 
        return database.query('video', { videoId: videoId });                
    }
}