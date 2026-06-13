const { all, get, run } = require('../db/database');

async function report17_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report17_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report17_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report17_1, report17_2, report17_3, report17_4, report17_5, report17_6, report17_7, report17_8, report17_9, report17_10, report17_11, report17_12, report17_13, report17_14, report17_15, report17_16, report17_17 };
