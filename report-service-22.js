const { all, get, run } = require('../db/database');

async function report22_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report22_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report22_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report22_1, report22_2, report22_3, report22_4, report22_5, report22_6, report22_7, report22_8, report22_9, report22_10, report22_11, report22_12, report22_13, report22_14, report22_15, report22_16, report22_17 };
