const { all, get, run } = require('../db/database');

async function report31_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report31_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report31_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report31_1, report31_2, report31_3, report31_4, report31_5, report31_6, report31_7, report31_8, report31_9, report31_10, report31_11, report31_12, report31_13, report31_14, report31_15, report31_16, report31_17 };
