const { all, get, run } = require('../db/database');

async function report33_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report33_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report33_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report33_1, report33_2, report33_3, report33_4, report33_5, report33_6, report33_7, report33_8, report33_9, report33_10, report33_11, report33_12, report33_13, report33_14, report33_15, report33_16, report33_17 };
