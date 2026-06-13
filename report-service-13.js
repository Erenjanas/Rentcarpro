const { all, get, run } = require('../db/database');

async function report13_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report13_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report13_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report13_1, report13_2, report13_3, report13_4, report13_5, report13_6, report13_7, report13_8, report13_9, report13_10, report13_11, report13_12, report13_13, report13_14, report13_15, report13_16, report13_17 };
