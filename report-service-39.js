const { all, get, run } = require('../db/database');

async function report39_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report39_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report39_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report39_1, report39_2, report39_3, report39_4, report39_5, report39_6, report39_7, report39_8, report39_9, report39_10, report39_11, report39_12, report39_13, report39_14, report39_15, report39_16, report39_17 };
