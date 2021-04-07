const express = require("express");
const cors = require("cors");
const sqlite = require("sqlite3").verbose();
const app = express();

app.use(cors());
app.use(express.json());
app.options("*", cors());
let db = new sqlite.Database("sqlite.db");

app.get("/", (req, res) => {
  res.send(
    "доступные api: /getrecords, /getrecord?id=x, /updaterecord, /insertrecord, /deleterecord"
  );
});

app.get("/getrecords", (req, res) => {
  db.all("SELECT * FROM todos", [], (err, rows) => {
    if (err) {
      res.send(error);
      return;
    }
    res.send({
      todos: rows,
    });
  });
});

app.get("/getrecord", (req, res) => {
  if (!req.query.id) res.send({ error: "Ошибка" });

  db.all("SELECT * FROM todos WHERE id=?", [req.query.id], (err, rows) => {
    if (err || !rows || rows.length == 0) {
      res.send(error(error));
      return;
    }
    res.send({
      todo: rows[0],
    });
  });
});

app.put("/updaterecord", (req, res) => {
  if (!req.body.id) {
    res.send(error);
    return;
  }
  db.run(
    "UPDATE todos SET name = ?, done = ?",
    [req.body.name, req.body.done],
    (err) => {
      if (err) {
        res.send(error(err));
        return;
      }
      res.send({
        error: "",
      });
    }
  );
});

app.post("/insertrecord", (req, res) => {
  if (!req.body.name) {
    res.send(error);
    return;
  }
  db.run(
    "INSERT into todos(name, done) VALUES(?, ?)",
    [req.body.name, req.body.done ? req.body.done : 0],
    (err) => {
      if (err) {
        res.send(error(err));
        return;
      }
      res.send({
        error: "",
      });
    }
  );
});

app.delete("/deleterecord", (req, res) => {
  if (!req.body.id) {
    res.send(error(err));
    return;
  }
  db.run("DELETE FROM todos WHERE id=?", [req.body.id], (err) => {
    if (err) {
      res.send(error);
      return;
    }
    res.send({
      error: "",
    });
  });
});

const error = (err = "") => {
  return {
    error: "error: " + err,
  };
};

app.listen(3000, () => {
  console.log("listening on 3000");
});
