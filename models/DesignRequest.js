const mongoose = require('mongoose');

const DesignRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  designer: { type: mongoose.Schema.Types.ObjectId, ref: 'Designer' },
  description: { type: String, required: true },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('DesignRequest', DesignRequestSchema);
