const fetch = require('node-fetch');
(async ()=>{
  try{
    const res = await fetch(process.env.BASE_URL || 'http://localhost:4000/api/health');
    const j = await res.json(); console.log('smoke:', j); process.exit(0);
  }catch(e){ console.error('smoke failed',e); process.exit(2); }
})();
