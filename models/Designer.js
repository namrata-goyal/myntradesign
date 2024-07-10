const mongoose = require('mongoose');

const DesignerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  portfolio: { type: String, required: true },
  bio: { type: String },
});

module.exports = mongoose.model('Designer', DesignerSchema);
