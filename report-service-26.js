const { all, get, run } = require('../db/database');

async function report26_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report26_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report26_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report26_1, report26_2, report26_3, report26_4, report26_5, report26_6, report26_7, report26_8, report26_9, report26_10, report26_11, report26_12, report26_13, report26_14, report26_15, report26_16, report26_17 };
