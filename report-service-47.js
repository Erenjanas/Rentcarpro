const { all, get, run } = require('../db/database');

async function report47_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report47_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report47_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report47_1, report47_2, report47_3, report47_4, report47_5, report47_6, report47_7, report47_8, report47_9, report47_10, report47_11, report47_12, report47_13, report47_14, report47_15, report47_16, report47_17 };
