const { all, get, run } = require('../db/database');

async function report36_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report36_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report36_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report36_1, report36_2, report36_3, report36_4, report36_5, report36_6, report36_7, report36_8, report36_9, report36_10, report36_11, report36_12, report36_13, report36_14, report36_15, report36_16, report36_17 };
