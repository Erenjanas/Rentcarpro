const { all, get, run } = require('../db/database');

async function report27_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report27_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report27_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report27_1, report27_2, report27_3, report27_4, report27_5, report27_6, report27_7, report27_8, report27_9, report27_10, report27_11, report27_12, report27_13, report27_14, report27_15, report27_16, report27_17 };
