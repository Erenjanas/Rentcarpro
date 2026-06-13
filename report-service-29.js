const { all, get, run } = require('../db/database');

async function report29_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report29_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report29_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report29_1, report29_2, report29_3, report29_4, report29_5, report29_6, report29_7, report29_8, report29_9, report29_10, report29_11, report29_12, report29_13, report29_14, report29_15, report29_16, report29_17 };
