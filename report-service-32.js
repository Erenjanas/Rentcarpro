const { all, get, run } = require('../db/database');

async function report32_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report32_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report32_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report32_1, report32_2, report32_3, report32_4, report32_5, report32_6, report32_7, report32_8, report32_9, report32_10, report32_11, report32_12, report32_13, report32_14, report32_15, report32_16, report32_17 };
