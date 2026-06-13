const { all, get, run } = require('../db/database');

async function report21_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report21_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report21_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report21_1, report21_2, report21_3, report21_4, report21_5, report21_6, report21_7, report21_8, report21_9, report21_10, report21_11, report21_12, report21_13, report21_14, report21_15, report21_16, report21_17 };
