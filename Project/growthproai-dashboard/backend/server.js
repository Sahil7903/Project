const express = require("express");
const cors = require("cors");
const headlines = require("./headlines");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/business-data", (req, res) => {
  const { name, location } = req.body;
  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const reviews = Math.floor(Math.random() * 500 + 20);
  const headlineTemplate = headlines[Math.floor(Math.random() * headlines.length)];
  const headline = headlineTemplate
    .replace("{name}", name)
    .replace("{location}", location);

  res.json({
    rating: parseFloat(rating),
    reviews,
    headline
  });
});

app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  const headlineTemplate = headlines[Math.floor(Math.random() * headlines.length)];
  const headline = headlineTemplate
    .replace("{name}", name)
    .replace("{location}", location);

  res.json({ headline });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
