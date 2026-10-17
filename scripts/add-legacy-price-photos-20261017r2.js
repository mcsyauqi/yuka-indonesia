'use strict';
const fs=require('fs'),path=require('path');
const {addPricePhotos}=require('./lib/price-photo-upgrade-20261017r2');
const root=path.resolve(__dirname,'..');
const slugs=["berapa-biaya-terapi-anak-berkebutuhan-khusus", "berapa-biaya-terapi-bicara-anak", "tempat-terapi-anak-jogja", "tes-psikolog-anak-bayar-berapa"];
for(const slug of slugs){const file=path.join(root,'artikel',slug+'.html');const before=fs.readFileSync(file,'utf8');const after=addPricePhotos(before,slug);fs.writeFileSync(file,after);console.log(slug,(after.match(/yuka-price-photo-20261017r2/g)||[]).length);}
