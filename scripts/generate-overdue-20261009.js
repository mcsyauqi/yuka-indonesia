#!/usr/bin/env node
'use strict';
// Diminta oleh Syauqi (via MinTiv). Source generator for two authorized overdue articles.
const fs=require('fs'),path=require('path');const{renderArticlePage,stripTags}=require('./lib/article-page');const{imageSize}=require('./lib/article-skeleton');
const ROOT=path.resolve(__dirname,'..');const ids=process.argv.slice(2);if(!ids.length)throw Error('Pass content plan name');
for(const id of ids){const a=JSON.parse(fs.readFileSync(path.join(__dirname,'content',id+'.json')));a.bodyHtml=fs.readFileSync(path.join(__dirname,'content',a.bodyFile),'utf8');const faqpart=a.bodyHtml.match(/<h2[^>]*>Pertanyaan yang Sering Diajukan<\/h2>([\s\S]*?)(?=<h2|$)/)[1];a.faq=[...faqpart.matchAll(/<h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p>/g)].map(m=>({q:stripTags(m[1]),a:stripTags(m[2])}));const size=imageSize(path.join(ROOT,a.image.file));a.image.w=size.w;a.image.h=size.h;if(a.image.h>a.image.w)throw Error('portrait hero');a.related=a.relatedSlugs.map(slug=>{const h=fs.readFileSync(path.join(ROOT,'artikel',slug+'.html'),'utf8');return{href:slug,title:stripTags(h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]),desc:h.match(/<meta name="description" content="([^"]+)"/)[1]}});const rendered=renderArticlePage(a).replace(/[ \t]+$/gm,'');fs.writeFileSync(path.join(ROOT,'artikel',a.slug+'.html'),rendered);let blog=fs.readFileSync(path.join(ROOT,'blog.html'),'utf8');if(!blog.includes('href="artikel/'+a.slug+'"')){const card=`
                <article class="card blog-card animate-on-scroll">
                    <div class="card-image"><img src="${a.image.file}" alt="${a.image.alt}" loading="lazy"></div>
                    <div class="card-body">
                        <span class="card-category">${a.category}</span>
                        <h3 class="card-title"><a href="artikel/${a.slug}">${a.h1}</a></h3>
                        <p class="card-text">${a.metaDesc}</p>
                        <div class="card-meta"><span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>${a.dateDisplay}</span><span>${a.readTime}</span></div>
                    </div>
                </article>`;const mark='<div class="blog-grid" id="blogGrid">';if(!blog.includes(mark))throw Error('blog marker missing');blog=blog.replace(mark,mark+card);fs.writeFileSync(path.join(ROOT,'blog.html'),blog)}console.log(JSON.stringify({slug:a.slug,bodyWords:stripTags(a.bodyHtml).split(/\s+/).length,faq:a.faq.length,bodyImages:(a.bodyHtml.match(/<img /g)||[]).length,hero:a.image.file}));}
