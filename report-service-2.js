const { all, get, run } = require('../db/database');

async function report2_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report2_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report2_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report2_1, report2_2, report2_3, report2_4, report2_5, report2_6, report2_7, report2_8, report2_9, report2_10, report2_11, report2_12, report2_13, report2_14, report2_15, report2_16, report2_17 };
