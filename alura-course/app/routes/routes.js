module.exports = function(app){
    require('./produtos')(app);
    require('./static')(app);
    
}