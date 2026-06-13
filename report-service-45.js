const { all, get, run } = require('../db/database');

async function report45_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report45_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report45_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report45_1, report45_2, report45_3, report45_4, report45_5, report45_6, report45_7, report45_8, report45_9, report45_10, report45_11, report45_12, report45_13, report45_14, report45_15, report45_16, report45_17 };
