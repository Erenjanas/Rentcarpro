const { all, get, run } = require('../db/database');

async function report50_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report50_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report50_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report50_1, report50_2, report50_3, report50_4, report50_5, report50_6, report50_7, report50_8, report50_9, report50_10, report50_11, report50_12, report50_13, report50_14, report50_15, report50_16, report50_17 };
