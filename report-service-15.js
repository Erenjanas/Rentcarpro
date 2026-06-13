const { all, get, run } = require('../db/database');

async function report15_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report15_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report15_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report15_1, report15_2, report15_3, report15_4, report15_5, report15_6, report15_7, report15_8, report15_9, report15_10, report15_11, report15_12, report15_13, report15_14, report15_15, report15_16, report15_17 };
