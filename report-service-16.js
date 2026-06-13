const { all, get, run } = require('../db/database');

async function report16_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report16_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report16_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report16_1, report16_2, report16_3, report16_4, report16_5, report16_6, report16_7, report16_8, report16_9, report16_10, report16_11, report16_12, report16_13, report16_14, report16_15, report16_16, report16_17 };
