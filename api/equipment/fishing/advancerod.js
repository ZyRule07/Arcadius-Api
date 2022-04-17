const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    Equipment: "Advance Rod",
      Image: "https://static.wikia.nocookie.net/arcadius/images/1/13/Advance_Rod.png",
      Level: "30",
      Recipe: "25 Flax + 50 Ash Log + 10.000g Crafting Fee",
      BaseImpact: "128",
      BaseDurability: "640",
      BaseTimeToCatch: "Unknown",
      Perk: "No damage taken when fishing in Lava."
  });
});

module.exports = router;