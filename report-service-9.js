const { all, get, run } = require('../db/database');

async function report9_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report9_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report9_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report9_1, report9_2, report9_3, report9_4, report9_5, report9_6, report9_7, report9_8, report9_9, report9_10, report9_11, report9_12, report9_13, report9_14, report9_15, report9_16, report9_17 };
