const { all, get, run } = require('../db/database');

async function report48_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report48_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report48_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report48_1, report48_2, report48_3, report48_4, report48_5, report48_6, report48_7, report48_8, report48_9, report48_10, report48_11, report48_12, report48_13, report48_14, report48_15, report48_16, report48_17 };
