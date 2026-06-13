const { all, get, run } = require('../db/database');

async function report10_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report10_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report10_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report10_1, report10_2, report10_3, report10_4, report10_5, report10_6, report10_7, report10_8, report10_9, report10_10, report10_11, report10_12, report10_13, report10_14, report10_15, report10_16, report10_17 };
