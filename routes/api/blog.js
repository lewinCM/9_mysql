const { AllUser, create, getById } = require("../../models/blog");




const router = require("express").Router();

//Devuelve todos los post de la BBDD
router.get("/", async (req, res) => {
  try {
    const [result] = await AllUser();
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
