
const { AllUser, create, getById } = require("../../models/autor");


const router = require("express").Router();


router.get("/", async (req, res) => {
  try {
    const [result] = await AllUser();
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const [result] = await getById(req.params.idAuthor);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const [result] = await create(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
