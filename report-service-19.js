const { all, get, run } = require('../db/database');

async function report19_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report19_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report19_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report19_1, report19_2, report19_3, report19_4, report19_5, report19_6, report19_7, report19_8, report19_9, report19_10, report19_11, report19_12, report19_13, report19_14, report19_15, report19_16, report19_17 };
