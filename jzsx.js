function postingzitem(C){document.write("<ul>");for(var P=0;P<posts_itmz;P++){var D,H=C.feed.entry[P],L=H.title.$t;if(P==C.feed.entry.length){break}for(var G=0;G<H.link.length;G++){if("replies"==H.link[G].rel&&"text/html"==H.link[G].type){var J=H.link[G].title,I=H.link[G].href}if("alternate"==H.link[G].rel){D=H.link[G].href;break}}var B;try{B=H.media$thumbnail.url}catch(M){s=H.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+130),d=s.substr(b+130,c-b-130),B=-130!=a&&-130!=b&&-130!=c&&""!=d?d:"https://2.bp.blogspot.com/-C3Mo0iKKiSw/VGdK808U7rI/AAAAAAAAAmI/W7Ae_dsEVAE/s1600/no-thumb.png"}var F=H.published.$t,O=F.substring(0,4),N=F.substring(5,7),z=F.substring(8,10),x=new Array;if(x[1]="January",x[2]="February",x[3]="March",x[4]="April",x[5]="May",x[6]="June",x[7]="July",x[8]="August",x[9]="September",x[10]="October",x[11]="November",x[12]="December",document.write('<li><a href="'+D+'">'),1==posts_imgz&&document.write('<img alt="'+L+'" title="'+L+'" src="'+B+'"/>'),document.write('<h3 class="recent-post-title"><span>'+L+"</span></h3></a>"),"content" in H){var E=H.content.$t}else{if("summary" in H){var E=H.summary.$t}else{var E=""}}var K=/<\S[^>]*>/g;if(E=E.replace(K,""),1==posts_snippt){if(E.length<posts_charz){document.write(E)}else{E=E.substring(0,posts_charz);var q=E.lastIndexOf(" ");E=E.substring(0,q),document.write(E+"...")}}var Q="",j=0;document.write('<div class="recent-posts-details"><span class="dett">'),1==posts_datez&&(Q=Q+x[parseInt(N,10)]+" "+z+" "+O,j=1),1==posts_readmz&&(1==j&&(Q+=" </span>"),Q=Q+'<span class="redmore"><a href="'+D+'" class="urls" target ="_top">Selengkapnya</a></span>',j=1),1==posts_cmnt&&(1==j&&(Q+=" <br> "),"1 Comments"==J&&(J="1 Comment"),"0 Comments"==J&&(J="No Comments"),J='<a href="'+I+'" target ="_top">'+J+"</a>",Q+=J,j=1),document.write(Q),document.write("</div>"),document.write("</li>")}document.write("</ul>")};