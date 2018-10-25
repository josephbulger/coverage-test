
module.exports = {
    query: async function(collection, criteria) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ hello: "world" });
            },1500);            
        });
    }
}