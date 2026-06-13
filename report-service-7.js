const { all, get, run } = require('../db/database');

async function report7_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report7_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report7_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report7_1, report7_2, report7_3, report7_4, report7_5, report7_6, report7_7, report7_8, report7_9, report7_10, report7_11, report7_12, report7_13, report7_14, report7_15, report7_16, report7_17 };
