const { all, get, run } = require('../db/database');

async function report1_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report1_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report1_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report1_1, report1_2, report1_3, report1_4, report1_5, report1_6, report1_7, report1_8, report1_9, report1_10, report1_11, report1_12, report1_13, report1_14, report1_15, report1_16, report1_17 };
