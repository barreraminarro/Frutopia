const SHEETS_URL = 'https://script.google.com/macros/s/AKfycby2SHK7FkavJ7f31H38fZtk9NewlQWQbnXl2_tA2o6nKLwwEh1pJ5NHejzbgRp3A3q5Pg/exec';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
  try {
    const r = await fetch(SHEETS_URL);
    const data = await r.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ stats: {}, total: 0 });
  }
}
