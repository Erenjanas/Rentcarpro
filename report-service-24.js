const { all, get, run } = require('../db/database');

async function report24_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report24_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report24_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report24_1, report24_2, report24_3, report24_4, report24_5, report24_6, report24_7, report24_8, report24_9, report24_10, report24_11, report24_12, report24_13, report24_14, report24_15, report24_16, report24_17 };
