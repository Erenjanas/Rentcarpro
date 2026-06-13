const { all, get, run } = require('../db/database');

async function report43_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report43_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report43_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report43_1, report43_2, report43_3, report43_4, report43_5, report43_6, report43_7, report43_8, report43_9, report43_10, report43_11, report43_12, report43_13, report43_14, report43_15, report43_16, report43_17 };
