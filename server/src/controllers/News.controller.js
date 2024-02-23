import { News } from "../modules/News.Schema.js";


// Get new section
// method: GET
export const getAllNews = async (req, res) => {
  try {
    const allNews = await News.find();

    res.json(allNews);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news articles" });
  }
};

// Add news section
// method: POST
export const addNews = async (req, res) => {
  try {
    const { title, description, category, author } = req.body;

    const existingNews = await News.findOne({ title });
    if (existingNews) {
      return res
        .status(400)
        .json({ error: "News  article with the same title alredy exists." });
    }

    const newNews = new News({
      title,
      description,
      category,
      author,
    });

    const savedNews = await newNews.save();

    res.status(201).json({ message: "News added successfully.", savedNews });
  } catch (error) {
    console.error("Error adding news:", error);
    res.status(500).json({ error: "Failed to add news article" });
  }
};


// Update news section
// method: PATCH
export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, author } = req.body;

    const existingNews = await News.findById(id);

    if (!existingNews) {
      return res.status(404).json({ error: "News article not found" });
    }

    existingNews.title = title;
    existingNews.description = description;
    existingNews.category = category;
    existingNews.author = author;

    const updatedNews = await existingNews.save();

    res.json({ message: "News Updated successfully", updatedNews });
  } catch (error) {
    console.error("Error updating news:", error);
    res.status(500).json({ error: "Failed to update news article" });
  }
};

// Delete news section
// method: DELETE
export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const existingNews = await News.findById(id);

    if (!existingNews) {
      return res.status(404).json({ error: "News article not found" });
    }

    await News.findByIdAndDelete(id);

    res.json({ message: "News article deleted successfully" });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).json({ error: "Failed to delete news article" });
  }
};
