const { all, get, run } = require('../db/database');

async function report4_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report4_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report4_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report4_1, report4_2, report4_3, report4_4, report4_5, report4_6, report4_7, report4_8, report4_9, report4_10, report4_11, report4_12, report4_13, report4_14, report4_15, report4_16, report4_17 };
