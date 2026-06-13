const { all, get, run } = require('../db/database');

async function report11_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report11_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report11_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report11_1, report11_2, report11_3, report11_4, report11_5, report11_6, report11_7, report11_8, report11_9, report11_10, report11_11, report11_12, report11_13, report11_14, report11_15, report11_16, report11_17 };
