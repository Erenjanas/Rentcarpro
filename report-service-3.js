const { all, get, run } = require('../db/database');

async function report3_1() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_1',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_2() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_2',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_3() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_3',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_4() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_4',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_5() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_5',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_6() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_6',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_7() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_7',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_8() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_8',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_9() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_9',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_10() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_10',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_11() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_11',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_12() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_12',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_13() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_13',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_14() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_14',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_15() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_15',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_16() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_16',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

async function report3_17() {
  const cars = await all('SELECT id, title, price_daily, status FROM cars ORDER BY id DESC LIMIT 20');
  const reservations = await all('SELECT id, total, status FROM reservations ORDER BY id DESC LIMIT 20');
  return {
    name: 'report3_17',
    cars,
    reservations,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { report3_1, report3_2, report3_3, report3_4, report3_5, report3_6, report3_7, report3_8, report3_9, report3_10, report3_11, report3_12, report3_13, report3_14, report3_15, report3_16, report3_17 };
