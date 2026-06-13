const { all, get, run } = require('../db/database');

async function report8_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report8_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report8_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report8_1, report8_2, report8_3, report8_4, report8_5, report8_6, report8_7, report8_8, report8_9, report8_10, report8_11, report8_12, report8_13, report8_14, report8_15, report8_16, report8_17 };
