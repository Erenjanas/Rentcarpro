const { all, get, run } = require('../db/database');

async function report34_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report34_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report34_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report34_1, report34_2, report34_3, report34_4, report34_5, report34_6, report34_7, report34_8, report34_9, report34_10, report34_11, report34_12, report34_13, report34_14, report34_15, report34_16, report34_17 };
