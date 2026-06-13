const { all, get, run } = require('../db/database');

async function report14_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report14_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report14_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report14_1, report14_2, report14_3, report14_4, report14_5, report14_6, report14_7, report14_8, report14_9, report14_10, report14_11, report14_12, report14_13, report14_14, report14_15, report14_16, report14_17 };
