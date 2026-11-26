
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Khan TikTok Backend is Running!");
});

app.get("/api/preview", async (req, res) => {
  const videoUrl = req.query.url;

  if (!videoUrl || !/^https?:\/\/(www\.)?tiktok\.com\//i.test(videoUrl)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid TikTok URL"
    });
  }

  try {
    const response = await fetch(
      "https://www.tiktok.com/oembed?url=" +
      encodeURIComponent(videoUrl)
    );

    if (!response.ok) {
      throw new Error("TikTok preview unavailable");
    }

    const data = await response.json();

    res.json({
      success: true,
      title: data.title,
      author: data.author_name,
      thumbnail: data.thumbnail_url
    });

  } catch (error) {
    res.status(502).json({
      success: false,
      message: "Video preview is unavailable"
    });
  }
});

app.listen(PORT, () => {
  console.log("Khan TikTok Backend running on port " + PORT);
});
