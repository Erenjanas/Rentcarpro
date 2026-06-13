const { all, get, run } = require('../db/database');

async function report46_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report46_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report46_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report46_1, report46_2, report46_3, report46_4, report46_5, report46_6, report46_7, report46_8, report46_9, report46_10, report46_11, report46_12, report46_13, report46_14, report46_15, report46_16, report46_17 };
