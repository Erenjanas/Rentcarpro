const { all, get, run } = require('../db/database');

async function report12_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report12_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report12_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report12_1, report12_2, report12_3, report12_4, report12_5, report12_6, report12_7, report12_8, report12_9, report12_10, report12_11, report12_12, report12_13, report12_14, report12_15, report12_16, report12_17 };
