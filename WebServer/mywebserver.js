const http = require('http');

// Sunucu oluştur
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h2>Index sayfasına hoşgeldiniz</h2>');
    } else if (req.url === '/hakkimda') {
        res.statusCode = 200;
        res.end('<h2>Hakkımda sayfasına hoşgeldiniz</h2>');
    } else if (req.url === '/iletisim') {
        res.statusCode = 200;
        res.end('<h2>İletişim sayfasına hoşgeldiniz</h2>');
    } else {
        res.statusCode = 404;
        res.end('<h2>404 Sayfa Bulunamadı</h2>');
    }
});

// Sunucuyu 5000 portunda dinle
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
