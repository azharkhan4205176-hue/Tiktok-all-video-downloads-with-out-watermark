
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Khan All Video Downloader</title>
<style>
*{box-sizing:border-box}
body{
margin:0;
font-family:Arial,sans-serif;
background:linear-gradient(135deg,#090909,#252525);
color:white;
text-align:center;
padding:20px;
}
.container{
max-width:500px;
margin:55px auto;
padding:30px 20px;
background:#171717;
border-radius:20px;
box-shadow:0 5px 25px #000;
}
.logo{font-size:35px;font-weight:bold}
.logo span{color:#fe2c55}
h2{margin-top:25px}
p{color:#bbb;line-height:1.6}
input{
width:100%;
padding:16px;
border:1px solid #555;
border-radius:10px;
background:#292929;
color:white;
font-size:15px;
margin:15px 0;
}
button{
width:100%;
padding:16px;
background:#fe2c55;
color:white;
border:0;
border-radius:10px;
font-size:17px;
font-weight:bold;
cursor:pointer;
}
button:hover{background:#d91c45}
.services{
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:10px;
margin:25px 0;
}
.services span{
background:#303030;
padding:10px 15px;
border-radius:20px;
}
#message{margin-top:20px;color:#fff}
footer{color:#888;font-size:12px;margin-top:30px}
</style>
</head>
<body>
<div class="container">

<div class="logo"><span>KHAN</span> DOWNLOADER</div>

<h2>All Video Downloader</h2>
<p>Paste your video link below</p>

<div class="services">
<span>TikTok</span>
<span>Instagram</span>
<span>Facebook</span>
<span>YouTube</span>
</div>

<input id="videoLink"
type="url"
placeholder="Paste video URL here">

<button onclick="downloadVideo()">
Download Video
</button>

<div id="message"></div>

<footer>
Khan Downloader © 2026
<br><br>
Download only content you are authorized to save.
</footer>
</div>

<script>
function downloadVideo(){
const link=document.getElementById("videoLink").value.trim();
const msg=document.getElementById("message");

if(!link){
msg.innerText="Please paste a video link.";
return;
}

try{
const url=new URL(link);
if(!["http:","https:"].includes(url.protocol)){
throw new Error();
}
}catch(e){
msg.innerText="Please enter a valid URL.";
return;
}

msg.innerText="Link received. A compatible video download service must be connected to download the video.";
}
</script>
</body>
</html>
