const https = require('https');
const fs = require('fs');
const path = require('path');

const agentes = [
  { nome: 'alice', slug: 'alice' },
  { nome: 'anby', slug: 'anby-demara' },
  { nome: 'anby-soldier-0', slug: 'anby-demara-soldier-0' },
  { nome: 'anton', slug: 'anton' },
  { nome: 'aria', slug: 'aria' },
  { nome: 'astra-yao', slug: 'astra-yao' },
  { nome: 'banyue', slug: 'banyue' },
  { nome: 'ben', slug: 'ben' },
  { nome: 'billy', slug: 'billy-kid' },
  { nome: 'billy-starlight', slug: 'billy-starlight' },
  { nome: 'burnice', slug: 'burnice' },
  { nome: 'caesar', slug: 'caesar' },
  { nome: 'cissia', slug: 'cissia' },
  { nome: 'corin', slug: 'corin' },
  { nome: 'dialyn', slug: 'dialyn' },
  { nome: 'ellen', slug: 'ellen' },
  { nome: 'evelyn', slug: 'evelyn' },
  { nome: 'grace', slug: 'grace-howard' },
  { nome: 'harumasa', slug: 'harumasa' },
  { nome: 'hugo', slug: 'hugo' },
  { nome: 'jane-doe', slug: 'jane-doe' },
  { nome: 'ju-fufu', slug: 'ju-fufu' },
  { nome: 'koleda', slug: 'koleda' },
  { nome: 'lighter', slug: 'lighter' },
  { nome: 'lucia', slug: 'lucia' },
  { nome: 'lucy', slug: 'lucy' },
  { nome: 'lycaon', slug: 'lycaon' },
  { nome: 'manato', slug: 'manato' },
  { nome: 'miyabi', slug: 'miyabi' },
  { nome: 'nangong-yu', slug: 'nangong-yu' },
  { nome: 'nekomata', slug: 'nekomata' },
  { nome: 'nicole', slug: 'nicole-demara' },
  { nome: 'norma', slug: 'norma' },
  { nome: 'orphie-magus', slug: 'orphie-and-magus' },
  { nome: 'pan-yinhu', slug: 'pan-yinhu' },
  { nome: 'piper', slug: 'piper' },
  { nome: 'promeia', slug: 'promeia' },
  { nome: 'pulchra', slug: 'pulchra' },
  { nome: 'qingyi', slug: 'qingyi' },
  { nome: 'rina', slug: 'rina' },
  { nome: 'seed', slug: 'seed' },
  { nome: 'seth', slug: 'seth' },
  { nome: 'soldier-11', slug: 'soldier-11' },
  { nome: 'soukaku', slug: 'soukaku' },
  { nome: 'sunna', slug: 'sunna' },
  { nome: 'trigger', slug: 'trigger' },
  { nome: 'vivian', slug: 'vivian' },
  { nome: 'yanagi', slug: 'yanagi' },
  { nome: 'ye-shunguang', slug: 'ye-shunguang' },
  { nome: 'yidhari', slug: 'yidhari' },
  { nome: 'yixuan', slug: 'yixuan' },
  { nome: 'yuzuha', slug: 'ukinami-yuzuha' },
  { nome: 'zhao', slug: 'zhao' },
  { nome: 'zhu-yuan', slug: 'zhu-yuan' }
];

const outputDir = path.join(__dirname, 'src', 'assets', 'agentes');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function download(url, destino) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destino);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.prydwen.gg/' } }, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      } else {
        file.close();
        fs.unlink(destino, () => {});
        reject(`Status ${res.statusCode}`);
      }
    }).on('error', (err) => {
      fs.unlink(destino, () => {});
      reject(err.message);
    });
  });
}

async function baixarTodos() {
  for (const agente of agentes) {
    const url = `https://cdn.prydwen.gg/images/zenless-zone-zero/characters/${agente.slug}_card.webp`;
    const destino = path.join(outputDir, `${agente.nome}.webp`);
    try {
      await download(url, destino);
      console.log(`✅ ${agente.nome}`);
    } catch (err) {
      console.log(`❌ ${agente.nome}: ${err}`);
    }
  }
  console.log('\nPronto!');
}

baixarTodos();