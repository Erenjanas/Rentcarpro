const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const env = require('../config/env');

fs.mkdirSync(path.dirname(env.dbPath), { recursive: true });
const db = new sqlite3.Database(env.dbPath);

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => err ? reject(err) : resolve(row));
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => err ? reject(err) : resolve(rows));
  });
}

async function init() {
  const schema = fs.readFileSync(path.join(env.root, 'database/schema.sql'), 'utf8');
  await new Promise((resolve, reject) => db.exec(schema, err => err ? reject(err) : resolve()));
}

module.exports = { db, run, get, all, init };
