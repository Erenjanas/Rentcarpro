const { all, get, run } = require('../db/database');

async function report30_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report30_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report30_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report30_1, report30_2, report30_3, report30_4, report30_5, report30_6, report30_7, report30_8, report30_9, report30_10, report30_11, report30_12, report30_13, report30_14, report30_15, report30_16, report30_17 };
