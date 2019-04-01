var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name:  {type: String, unique : true, required : true, dropDups: true},
  price: {type: Number, required: true, default: 0},
  category: {type: Schema.Types.ObjectId, ref: 'categories'},
  image: {type: String, default: null},
  detail: {type: String, default: null}
});


module.exports = mongoose.model('products', productSchema);