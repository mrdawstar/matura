import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve(process.argv.includes('--production') ? 'dist' : 'src');
const publicRoot = resolve('public');
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2', '.ttf': 'font/ttf' };
http.createServer(async (req, res) => {
 try {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const path = pathname === '/' ? '/index.html' : pathname;
  const file = resolve(root, '.' + path);
  if (!file.startsWith(root + sep)) { res.writeHead(403); return res.end(); }
  let data;
  try { data = await readFile(file); } catch { const fallback = resolve(publicRoot, '.' + path); if (!fallback.startsWith(publicRoot + sep)) throw new Error('Invalid path'); data = await readFile(fallback); }
  res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' }); res.end(data);
 } catch { res.writeHead(404); res.end('Nie znaleziono strony.'); }
}).listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173'));
