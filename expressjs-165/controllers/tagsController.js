const tags = [];
let nextTagId = 0; // Counter for the next number to add

const getTags = (req, res) => {
  tags.push(nextTagId);
  nextTagId++;
  res.json({ tags });
};

// Implement other controllers related to tags

module.exports = {
  getTags,
  // Export other tag controllers
};