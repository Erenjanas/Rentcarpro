const { all, get, run } = require('../db/database');

async function report18_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report18_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report18_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report18_1, report18_2, report18_3, report18_4, report18_5, report18_6, report18_7, report18_8, report18_9, report18_10, report18_11, report18_12, report18_13, report18_14, report18_15, report18_16, report18_17 };
