const { all, get, run } = require('../db/database');

async function report25_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report25_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report25_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report25_1, report25_2, report25_3, report25_4, report25_5, report25_6, report25_7, report25_8, report25_9, report25_10, report25_11, report25_12, report25_13, report25_14, report25_15, report25_16, report25_17 };
