var database = require('./database');

module.exports = {
    getVideo: function(videoId) { 
        return database.query('video', { videoId: videoId });                
    }
}