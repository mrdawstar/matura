import { readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
async function check(dir) { for (const f of await readdir(dir, {withFileTypes:true})) { const path = `${dir}/${f.name}`; if (f.isDirectory()) await check(path); else if (/\.(m?js)$/.test(path)) execFileSync(process.execPath, ['--check', path], {stdio:'inherit'}); } }
await check('src'); await check('scripts'); console.log('JavaScript syntax checks passed.');
