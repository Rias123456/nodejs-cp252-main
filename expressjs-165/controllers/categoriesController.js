const categories = [];

const getCategories = (req, res) => {
  // Check if the array is empty
  if (categories.length === 0) {
    return res.json({ categories: ['unknown'] });
  }
  
  // If it has content, return the categories
  res.json({ categories });
};

// Implement other controllers related to categories

module.exports = {
  getCategories,
  // Export other category controllers
};