const express = require("express");
const entryController = require("../controllers/entry/index.controller");
const {
  authUser,
  canEdit,
  cantVote
} = require("../middlewares/security/index.middleware");
const { userExist } = require("../middlewares/user/index.middleware");
const { entryExists } = require("../middlewares/entry/index.middleware.js");

const router = express.Router();

router.post("/entries", authUser, userExist, entryController.insert);
router.post(
  "/entries/:entryId/photos",
  authUser,
  userExist,
  entryExists,
  canEdit,
  entryController.addPhoto
);

router.delete(
  "/entries/:entryId/photos/:photoId",
  authUser,
  userExist,
  entryExists,
  canEdit,
  entryController.deletePhoto
);


router.post('/entries/:entryId/votes', authUser,
userExist,
entryExists,
cantVote,
entryController.vote)


module.exports = router;
