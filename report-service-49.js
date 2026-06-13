const { all, get, run } = require('../db/database');

async function report49_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report49_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report49_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report49_1, report49_2, report49_3, report49_4, report49_5, report49_6, report49_7, report49_8, report49_9, report49_10, report49_11, report49_12, report49_13, report49_14, report49_15, report49_16, report49_17 };
