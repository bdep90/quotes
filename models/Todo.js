'use strict';
const mongoose = require('mongoose');

// ==== model ====
let todoSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date }
});

todoSchema.pre('save', () => {
  if (!this.created) this.created = new Date;
  next();
})

// ==== export module ====
module.exports = mongoose.model('Todo', todoSchema);
