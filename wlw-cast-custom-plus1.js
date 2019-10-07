javascript:var d=document;

var CAST_LIST_URL="https://wonderland-wars.net/mycast.html";
var CAST_URL="https://wonderland-wars.net/castdetail.html?cast=";

if(d.URL==CAST_LIST_URL){
	var acqci=[];
	var acqcn=[];
	if(chkrolepage()){
		if(chkpage()){
			var ptbp=d.querySelectorAll('.tab_cast');
			var tabcnt=ptbp.length;
			var pbp;
			for(var ti=-1; ti<tabcnt; ti++){
				if(ti!=-1){
					ptbp[ti].click();
					d=document;
					var ptbp=d.querySelectorAll('.tab_cast')
				}
				getCastId();
				getCastName();
				var pbp=d.querySelectorAll('.page_block_page');
				if(pbp.length!=0){
					var pagecnt=pbp.length;
					for(var i=0; i<pagecnt; i++){
						pbp[i].click();
						d=document;
						getCastId();
						getCastName();
						pbp=d.querySelectorAll('.page_block_page');
					}
				}
			}
			ptbp[0].click();
			var now=new Date().getTime();
			var day=1000*3600*24;
			var ex=new Date();
			ex.setTime(now+day*365);
			d.cookie="acqci"+"="+escape(acqci.join(":"))+";
			 expires="+ex.toUTCString();
			d.cookie="acqcn"+"="+escape(acqcn.join(":"))+";
			 expires="+ex.toUTCString();
			alert("獲得済みキャスト情報取得が完了しました。\n各キャストのページでブックマークレットを実行することで、勝率などを確認できます。\n新たなキャストを獲得した場合は、再度獲得済みキャスト情報取得を行ってください。\n獲得済みキャスト数："+acqci.length)
		}
	}
}else if(d.URL.indexOf(CAST_URL)>=0){
if(d.getElementById('wlw_custom')==null){
var ur=[];
var wc=[];
var crc=[];
var wdc=[];
var tp=[];
var wp=[];
var lp=[];
var tn=[];
var wn=[];
var ln=[];
var lc=[];
var wr=[];
var kr=[];
var q=window.location.search.substring(1);
var ci=q.split("=")[1];
var pci="p"+ci;
var err_msg;
var castimgurl=[];
var gameNode=document.createElement("div");
var CAST_IMG_URL="common/img_cast/";
var imgNode_cast=[];
var dispcastci=ci;
var proc_ci;
var awr=0;
var awc=0;
var alc=0;
var cwra=[];
var cwca=[];
var clca=[];
var dci=[];
var dcn=[];
if(d.cookie){
var c=d.cookie.split(";
");
for(var i=0;
i<c.length;
i++){
var kv=c[i].trim().split("=");
if(kv[0]=="acqci"){
dci=unescape(kv[1]).split(":")
}else if(kv[0]=="acqcn"){
dcn=unescape(kv[1]).split(":")
}
}
}if(dci.length!=0){
var err_num=0;
proc_ci=dci.indexOf(ci);
var p1=d.querySelectorAll('.block_playdata_01_text');
ur[proc_ci]=parseFloat(p1[0].innerHTML);
wc[proc_ci]=parseInt(p1[1].innerHTML);
crc[proc_ci]=parseInt(p1[2].innerHTML);
wdc[proc_ci]=parseInt(p1[3].innerHTML);
var p2=d.querySelectorAll('.block_playdata_02_text');
tp[proc_ci]=parseFloat(p2[0].innerHTML);
wp[proc_ci]=parseFloat(p2[1].innerHTML);
lp[proc_ci]=parseFloat(p2[2].innerHTML);
tn[proc_ci]=parseFloat(p2[3].innerHTML);
wn[proc_ci]=parseFloat(p2[4].innerHTML);
ln[proc_ci]=parseFloat(p2[5].innerHTML);
lc[proc_ci]=0;
if((tp[proc_ci]-lp[proc_ci])!=0){
lc[proc_ci]=parseInt(Math.round((wp[proc_ci]-tp[proc_ci])*wc[proc_ci]/(tp[proc_ci]-lp[proc_ci])))
}wr[proc_ci]=0;
if((wc[proc_ci]+lc[proc_ci])!=0){
wr[proc_ci]=Math.round(wc[proc_ci]/(wc[proc_ci]+lc[proc_ci])*100*10)/10
}kr[proc_ci]=0;
if(wdc[proc_ci]!=0){
kr[proc_ci]=Math.round(crc[proc_ci]/wdc[proc_ci]*100)/100
}var ciusplitstr=d.querySelector('.data_cast_img').innerHTML.split("\"")[1];
castimgurl[proc_ci]=ciusplitstr.split(CAST_IMG_URL)[1];
var exe_cnt=0;
for(var i=0;
i<dci.length;
i++){
if(i!=proc_ci){
create_request(CAST_URL+dci[i],i)
}
}
}else{
alert("獲得済みキャスト情報が取得できませんでした。\nマイキャスト一覧で獲得済みキャスト情報取得を実行してください。")
}
}
}else{
alert("実行するページが間違っています。\n下記のページで実行してください。\nマイキャスト一覧\n「"+CAST_LIST_URL+"」\n各キャストページ\n「"+CAST_URL+"XX」")
}function disp_proc(){
for(var i=0;
i<dci.length;
i++){
cwra[dci[i]]=0;
cwca[dci[i]]=0;
clca[dci[i]]=0
}var now=new Date().getTime();
var cd=[now,ur[proc_ci],wc[proc_ci],lc[proc_ci],wr[proc_ci],crc[proc_ci],wdc[proc_ci],kr[proc_ci],tp[proc_ci],wp[proc_ci],lp[proc_ci],tn[proc_ci],wn[proc_ci],ln[proc_ci]];
var pcd=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ppcd=pcd.concat();
var day=1000*3600*24;
var ex=new Date();
ex.setTime(now+day*365);
if(d.cookie){
var c=d.cookie.split(";
");
for(var i=0;
i<c.length;
i++){
var kv=c[i].trim().split("=");
var tpcd=unescape(kv[1]).split(":");
if(isFinite(kv[0])){
var twc=parseInt(tpcd[2]);
var tlc=parseInt(tpcd[3]);
var twr=0;
if((twc+tlc)!=0){
twr=Math.round(twc/(twc+tlc)*100*10)/10
}awc+=twc;
alc+=tlc;
cwra[kv[0]]=twr;
cwca[kv[0]]=twc;
clca[kv[0]]=tlc
}if(kv[0]==ci){
pcd=tpcd
}if(kv[0]==pci){
ppcd=unescape(kv[1]).split(":")
}
}
}awc=awc-parseInt(pcd[2])+wc[proc_ci];
alc=alc-parseInt(pcd[3])+lc[proc_ci];
if((awc+alc)!=0){
awr=Math.round(awc/(awc+alc)*100*10)/10
}cwra[ci]=wr[proc_ci];
cwca[ci]=wc[proc_ci];
clca[ci]=lc[proc_ci];
if(cd[1]!=pcd[1]||cd[2]!=pcd[2]||cd[8]!=pcd[8]||cd[9]!=pcd[9]||cd[10]!=pcd[10]){
d.cookie=ci+"="+escape(cd.join(":"))+";
 expires="+ex.toUTCString()
}var base=new Date();
base.setTime(pcd[0]);
base.setHours(23);
base.setMinutes(59);
base.setSeconds(59);
if(now>base.getTime()){
d.cookie=pci+"="+escape(pcd.join(":"))+";
 expires="+ex.toUTCString()
}else{
pcd=ppcd
}var fi=d.querySelector('.frame_inner');
var nfi=fi.cloneNode(true);
nfi.id="wlw_custom";
var p=nfi.querySelectorAll('.clearfix');
function insert(i,t1,t2){
var e=p[0].cloneNode(true);
var t=e.getElementsByTagName('div');
t[0].innerHTML=t1;
t[1].innerHTML=t2;
nfi.insertBefore(e,p[i])
}insert(2,"敗北数",lc[proc_ci]+"<span class=\"font_small\">敗</span>");
insert(2,"勝率",wr[proc_ci]+"％");
insert(4,"Kill Ratio",kr[proc_ci]);
function diff(i,t){
var iad=Math.round((cd[i]-pcd[i])*100)/100;
var pm="±";
if(iad>0){
pm="+"
}if(iad<0){
pm="-";
iad=Math.abs(iad)
}t.innerHTML=t.innerHTML+" <span style=\"color:#ff0000;
\" class=\"font_small\">("+pm+iad+")</span>"
}var np1=nfi.querySelectorAll('.block_playdata_01_text');
for(var i=0;
i<7;
i++){
diff(i+1,np1[i])
}var np2=nfi.querySelectorAll('.block_playdata_02_text');
for(var i=0;
i<6;
i++){
diff(i+8,np2[i])
}insert(6,"全キャスト勝率",awr+"％ <span class=\"font_small\">("+awc+"勝"+alc+"敗)</span>");
for(var i=0;
i<dci.length;
i++){
if((cwca[dci[i]]+clca[dci[i]])>0){
insert(6,"<span class=\"font_90\">"+dcn[i]+"</span>",cwra[dci[i]]+"% <span class=\"font_small\">("+cwca[dci[i]]+"勝"+clca[dci[i]]+"敗)</span>")
}
}fi.parentNode.replaceChild(nfi,fi);
var icon_width=0;
var icon_height=0;
var icon_margin_bot="20px";
var frame02_margin_bot="136px";
var block_p_01=d.querySelector('.block_playdata_01');
if(window.innerWidth<481){
icon_width=30;
icon_height=35
}else{
icon_width=60;
icon_height=70
}var cb_cnt=0;
for(var cnt=0;
cnt<dci.length;
cnt++){
if(wc[cnt]+lc[cnt]>0||cnt==proc_ci){
imgNode_cast[cnt]=d.createElement("img");
imgNode_cast[cnt].src=CAST_IMG_URL+castimgurl[cnt];
imgNode_cast[cnt].width=icon_width;
imgNode_cast[cnt].height=icon_height;
var linkNode=d.createElement("a");
linkNode.href="JavaScript:changedisp("+cnt.toString()+")";
linkNode.appendChild(imgNode_cast[cnt]);
gameNode.appendChild(linkNode);
if(cnt==proc_ci){
imgNode_cast[cnt].style.opacity=0.5
}cb_cnt++
}
}if(cb_cnt>9){
gameNode.setAttribute("align","left")
}block_p_01.parentNode.insertBefore(gameNode,block_p_01)
}function chkrolepage(){
var pbpo=d.querySelector('.tab_cast_on');
if(pbpo!=null){
if(pbpo.id!="fil_fig"){
alert("獲得済みキャスト情報取得はファイターのタブで実行して下さい。");
return false
}
}return true
}function chkpage(){
var pbpo=d.querySelector('.page_block_page_on');
if(pbpo!=null){
if(pbpo.textContent!="1"){
alert("獲得済みキャスト情報取得は1ページ目で実行して下さい。");
return false
}
}return true
}function getCastId(){
var urlstr;
var splitstr=[];
for(var i=0;
i<d.links.length;
i++){
urlstr=d.links[i].toString();
if(urlstr.match(/cast=/)){
splitstr=urlstr.split("cast=");
acqci.push(splitstr[1])
}
}
}function getCastName(){
var bcc=d.querySelectorAll('.block_cast_castname');
for(var i=0;
i<bcc.length;
i++){
acqcn.push(bcc[i].textContent)
}
}function savecookie(fpci,id){
var now=new Date().getTime();
var cd=[now,ur[fpci],wc[fpci],lc[fpci],wr[fpci],crc[fpci],wdc[fpci],kr[fpci],tp[fpci],wp[fpci],lp[fpci],tn[fpci],wn[fpci],ln[fpci]];
var pcd=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var pci="p"+id;
var day=1000*3600*24;
var ex=new Date();
ex.setTime(now+day*365);
if(d.cookie){
var c=d.cookie.split(";
");
for(var i=0;
i<c.length;
i++){
var kv=c[i].trim().split("=");
var tpcd=unescape(kv[1]).split(":");
if(kv[0]==id){
pcd=tpcd;
break
}
}
}if(cd[1]!=pcd[1]||cd[2]!=pcd[2]||cd[8]!=pcd[8]||cd[9]!=pcd[9]||cd[10]!=pcd[10]){
d.cookie=id+"="+escape(cd.join(":"))+";
 expires="+ex.toUTCString()
}var base=new Date();
base.setTime(pcd[0]);
base.setHours(23);
base.setMinutes(59);
base.setSeconds(59);
if(now>base.getTime()){
d.cookie=pci+"="+escape(pcd.join(":"))+";
 expires="+ex.toUTCString()
}
}function changedisp(fpci){
if(fpci!=proc_ci){
imgNode_cast[proc_ci].style.opacity=1;
proc_ci=fpci;
imgNode_cast[proc_ci].style.opacity=0.5;
if(d.cookie){
var c=d.cookie.split(";
");
var ppcd=[];
var pci="p"+dci[fpci];
for(var i=0;
i<c.length;
i++){
var kv=c[i].trim().split("=");
var tpcd=unescape(kv[1]).split(":");
if(kv[0]==pci){
ppcd=unescape(kv[1]).split(":");
break
}
}
}var p1=d.querySelectorAll('.block_playdata_01_text');
p1[0].innerHTML=ur[fpci].toFixed(1)+"％";
diff_cd(ur[fpci],ppcd[1],p1[0]);
p1[1].innerHTML=wc[fpci]+"<span class=\"font_small\">勝</span>";
diff_cd(wc[fpci],ppcd[2],p1[1]);
p1[2].innerHTML=lc[fpci]+"<span class=\"font_small\">敗</span>";
diff_cd(lc[fpci],ppcd[3],p1[2]);
p1[3].innerHTML=wr[fpci].toFixed(1)+"％";
diff_cd(wr[fpci],ppcd[4],p1[3]);
p1[4].innerHTML=crc[fpci];
diff_cd(crc[fpci],ppcd[5],p1[4]);
p1[5].innerHTML=wdc[fpci];
diff_cd(wdc[fpci],ppcd[6],p1[5]);
p1[6].innerHTML=kr[fpci];
diff_cd(kr[fpci],ppcd[7],p1[6]);
var p2=d.querySelectorAll('.block_playdata_02_text');
p2[0].innerHTML=tp[fpci].toFixed(1)+"p";
diff_cd(tp[fpci],ppcd[8],p2[0]);
p2[1].innerHTML=wp[fpci].toFixed(1)+"p";
diff_cd(wp[fpci],ppcd[9],p2[1]);
p2[2].innerHTML=lp[fpci].toFixed(1)+"p";
diff_cd(lp[fpci],ppcd[10],p2[2]);
p2[3].innerHTML=tn[fpci].toFixed(1);
diff_cd(tn[fpci],ppcd[11],p2[3]);
p2[4].innerHTML=wn[fpci].toFixed(1);
diff_cd(wn[fpci],ppcd[12],p2[4]);
p2[5].innerHTML=ln[fpci].toFixed(1);
diff_cd(ln[fpci],ppcd[13],p2[5])
}
}function diff_cd(d1,d2,t){
var iad=Math.round((d1-d2)*100)/100;
var pm="±";
if(iad>0){
pm="+"
}if(iad<0){
pm="-";
iad=Math.abs(iad)
}t.innerHTML=t.innerHTML+" <span style=\"color:#ff0000;
\" class=\"font_small\">("+pm+iad+")</span>"
}

function sorceget(src_txt,i){
	var splitstr01;
	var splitstr02;
	try{
		if(src_txt.match("ログインフォーム")){
			if(err_num==0){
				err_num=1
			}
		}else{
			splitstr01=src_txt.split("block_playdata_01_text\">");
			splitstr02=splitstr01[1].split("％<");
			ur[i]=parseFloat(splitstr02[0]);
			splitstr02=splitstr01[2].split("<");
			wc[i]=parseInt(splitstr02[0]);
			splitstr02=splitstr01[3].split("<");
			crc[i]=parseInt(splitstr02[0]);
			splitstr02=splitstr01[4].split("<");
			wdc[i]=parseInt(splitstr02[0]);
			splitstr01=src_txt.split("block_playdata_02_text\">");
			splitstr02=splitstr01[1].split("p<");
			tp[i]=parseFloat(splitstr02[0]);
			splitstr02=splitstr01[2].split("p<");
			wp[i]=parseFloat(splitstr02[0]);
			splitstr02=splitstr01[3].split("p<");
			lp[i]=parseFloat(splitstr02[0]);
			splitstr02=splitstr01[4].split("<");
			tn[i]=parseFloat(splitstr02[0]);
			splitstr02=splitstr01[5].split("<");
			wn[i]=parseFloat(splitstr02[0]);
			splitstr02=splitstr01[6].split("<");
			ln[i]=parseFloat(splitstr02[0]);
			if(isFinite(ur[i])&&isFinite(wc[i])&&isFinite(crc[i])&&isFinite(wdc[i])&&isFinite(tp[i])&&isFinite(wp[i])||isFinite(lp[i])&&isFinite(tn[i])&&isFinite(wn[i])&&isFinite(ln[i])){
				lc[i]=0;
				if((tp[i]-lp[i])!=0){
					lc[i]=parseInt(Math.round((wp[i]-tp[i])*wc[i]/(tp[i]-lp[i])))
				}
				wr[i]=0;
				if((wc[i]+lc[i])!=0){
					wr[i]=Math.round(wc[i]/(wc[i]+lc[i])*100*10)/10
				}
				kr[i]=0;
				if(wdc[i]!=0){
					kr[i]=Math.round(crc[i]/wdc[i]*100)/100
				}
				splitstr01=src_txt.split(CAST_IMG_URL);
				splitstr02=splitstr01[1].split("\">");
				castimgurl[i]=splitstr02[0];
				savecookie(i,dci[i])
			}else{
				if(err_num==0){
					err_num=2
					err = ur[i] + wc[i] + crc[i] + wdc[i] + tp[i] + wp[i] + lp[i] + tn[i] + wn[i] + ln[i];
					alert(err);
				}
			}
		}
	}catch(e){
		if(err_num==0){
			err_num=9;
			errmsg="\nキャストID:"+dci[i]+"\nエラー内容:"+e
		}
	}finally{
		exe_cnt++;
		if(exe_cnt==dci.length-1){
			if(err_num==0){
				disp_proc()
			}else if(err_num==1){
				alert("通信エラーが発生しました。\nログアウトされています。\n再度ログインして実行してください。")
			}else if(err_num==2){
				alert("通信エラーが発生しました。\nキャストページへ正常にアクセスできませんでした。\n通信が不安定になっているか、またはサーバが応答していません。")
			}else if(err_num==9){
				alert("想定外のエラーが発生しました。\n出来れば当メッセージと発生時の状況をお知らせください。"+errmsg)
			}
		}
	}
}

function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}
 


function create_request(url,index){
try{
var request=new XMLHttpRequest();
request.open("GET",url);
request.onreadystatechange=function(){
if(request.readyState==4&&request.status==200){
sorceget(request.responseText,index)
sleep(500);
}
};
request.send(null)
}catch(e){
request.abort()
}
}