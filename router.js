module.exports = function (app) {
    /*
    * REST Routes begins here 
    */
    app.use('/notes', require('./EndPoints')());
  };
  