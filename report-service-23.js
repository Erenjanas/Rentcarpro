const { all, get, run } = require('../db/database');

async function report23_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report23_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report23_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report23_1, report23_2, report23_3, report23_4, report23_5, report23_6, report23_7, report23_8, report23_9, report23_10, report23_11, report23_12, report23_13, report23_14, report23_15, report23_16, report23_17 };
