const { all, get, run } = require('../db/database');

async function report41_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report41_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report41_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report41_1, report41_2, report41_3, report41_4, report41_5, report41_6, report41_7, report41_8, report41_9, report41_10, report41_11, report41_12, report41_13, report41_14, report41_15, report41_16, report41_17 };
