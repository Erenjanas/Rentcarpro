const { all, get, run } = require('../db/database');

async function report38_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report38_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report38_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report38_1, report38_2, report38_3, report38_4, report38_5, report38_6, report38_7, report38_8, report38_9, report38_10, report38_11, report38_12, report38_13, report38_14, report38_15, report38_16, report38_17 };
