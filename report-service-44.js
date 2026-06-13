const { all, get, run } = require('../db/database');

async function report44_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report44_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report44_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report44_1, report44_2, report44_3, report44_4, report44_5, report44_6, report44_7, report44_8, report44_9, report44_10, report44_11, report44_12, report44_13, report44_14, report44_15, report44_16, report44_17 };
