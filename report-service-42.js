const { all, get, run } = require('../db/database');

async function report42_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report42_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report42_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report42_1, report42_2, report42_3, report42_4, report42_5, report42_6, report42_7, report42_8, report42_9, report42_10, report42_11, report42_12, report42_13, report42_14, report42_15, report42_16, report42_17 };
