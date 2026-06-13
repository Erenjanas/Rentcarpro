const { all, get, run } = require('../db/database');

async function report40_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report40_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report40_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report40_1, report40_2, report40_3, report40_4, report40_5, report40_6, report40_7, report40_8, report40_9, report40_10, report40_11, report40_12, report40_13, report40_14, report40_15, report40_16, report40_17 };
