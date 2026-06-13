const { all, get, run } = require('../db/database');

async function report20_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report20_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report20_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report20_1, report20_2, report20_3, report20_4, report20_5, report20_6, report20_7, report20_8, report20_9, report20_10, report20_11, report20_12, report20_13, report20_14, report20_15, report20_16, report20_17 };
