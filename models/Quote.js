var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var QuoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Quote = mongoose.model("Quote", QuoteSchema);

// Export the Article model
module.exports = Quote;
