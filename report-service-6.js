const { all, get, run } = require('../db/database');

async function report6_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report6_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report6_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report6_1, report6_2, report6_3, report6_4, report6_5, report6_6, report6_7, report6_8, report6_9, report6_10, report6_11, report6_12, report6_13, report6_14, report6_15, report6_16, report6_17 };
