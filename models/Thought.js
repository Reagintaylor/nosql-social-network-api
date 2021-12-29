const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')

const reactionSchema = new mongoose.Schema({
  reactionID: { 
      type: Schema.Types.ObjectId, 
      default: //new Object Id 
  },
  reactionBody: {
      type: String,
      require: true,
      maxlength: 280
  },
  username: {
      type: String,
      require: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }

});

const thoughtSchema = new mongoose.Schema({
  thoughtText: { 
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
 },
 createdAt: {
    type: Date,
    default: Date.now,
    timestamps: true 
    // getter method to format the timestamp on query
 },
  username: {
    type: String,
    required: true
 },
 // array of nested documents created with reaction Schema
  reactions: [{type: Schema.Types.ObjectId, ref: 'User'}],

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
});
//fix the error

//virtual
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

thoughtData = {}


const Thought = mongoose.model('Thought', thoughtSchema);
// where does the reactionSchema go?

Thought.create(
  { name: 'Shoes', thoughts: thoughtData, reactions: reactionData },
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);

module.exports = Thought;
