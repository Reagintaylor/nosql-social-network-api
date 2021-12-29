const mongoose = require('mongoose');
const moment = require('moment');
const { Schema, model } = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionID: { 
      type: Schema.Types.ObjectId, 
      default: () => new Types.ObjectId()
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
    timestamps: true,
    // getter method to format the timestamp on query
    get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
 },
 username: {
    type: String,
    required: true
 },
 // array of nested documents created with reaction Schema
  reactions: [reactionSchema],
}, 
{
 toJSON: {
    virtuals: true,
    getters: true
},
    id: false
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
