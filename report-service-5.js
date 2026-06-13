const { all, get, run } = require('../db/database');

async function report5_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report5_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report5_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report5_1, report5_2, report5_3, report5_4, report5_5, report5_6, report5_7, report5_8, report5_9, report5_10, report5_11, report5_12, report5_13, report5_14, report5_15, report5_16, report5_17 };
