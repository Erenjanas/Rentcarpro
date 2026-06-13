const { all, get, run } = require('../db/database');

async function report28_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report28_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report28_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report28_1, report28_2, report28_3, report28_4, report28_5, report28_6, report28_7, report28_8, report28_9, report28_10, report28_11, report28_12, report28_13, report28_14, report28_15, report28_16, report28_17 };
