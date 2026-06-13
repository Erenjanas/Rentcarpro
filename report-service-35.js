const { all, get, run } = require('../db/database');

async function report35_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report35_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report35_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report35_1, report35_2, report35_3, report35_4, report35_5, report35_6, report35_7, report35_8, report35_9, report35_10, report35_11, report35_12, report35_13, report35_14, report35_15, report35_16, report35_17 };
