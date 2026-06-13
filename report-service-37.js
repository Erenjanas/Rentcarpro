const { all, get, run } = require('../db/database');

async function report37_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report37_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report37_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report37_1, report37_2, report37_3, report37_4, report37_5, report37_6, report37_7, report37_8, report37_9, report37_10, report37_11, report37_12, report37_13, report37_14, report37_15, report37_16, report37_17 };
