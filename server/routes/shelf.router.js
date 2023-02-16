const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = 'SELECT * FROM "item" ORDER by "id";';
  pool
    .query(queryText)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.log("error in GET items", err);
      res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  const queryText = `INSERT into "item" ("description","image_url", "user_id") VALUES ($1,$2,$3);`;
  pool
    .query(queryText, [req.body.description, req.body.image_url, req.user.id])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error in line 33 post", error);
    });
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  const itemId = req.params.id;

  const queryText2 = `SELECT "user_id" FROM "item" WHERE "id"=$1;`;

  pool
    .query(queryText2, [itemId])

    .then((response) => {
      const userItem = response.rows[0].user_id;

      if (userItem === req.user.id) {
        const queryText = `DELETE FROM "item" WHERE "id"=$1 AND "user_id"=$2;`;

        pool
          .query(queryText, [itemId, req.user.id])
          .then(() => {
            res.status(200);
          })
          .catch((err) => {
            console.log("error in DELETE ROUTE", err);
            res.sendStatus(500);
          });
      }
      // console.log("THIS IS RESULT", result);
    });
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put("/:id", (req, res) => {
  // endpoint functionality
  const id = req.params.id;
  const queryText = `UPDATE item SET decription = $1, image_url = $2 `;
  pool.query(queryText, [id]);
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get("/count", (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get("/:id", (req, res) => {
  // endpoint functionality
});

module.exports = router;
