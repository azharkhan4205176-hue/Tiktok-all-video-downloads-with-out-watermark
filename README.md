
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Khan TikTok Downloader</title>
<style>
*{box-sizing:border-box}
body{
margin:0;
font-family:Arial,sans-serif;
background:linear-gradient(135deg,#090909,#242424);
color:white;
text-align:center;
min-height:100vh;
padding:25px 15px;
}
.container{
max-width:480px;
margin:50px auto;
padding:28px 20px;
background:#181818;
border-radius:18px;
box-shadow:0 5px 25px #000;
}
h1{font-size:30px}
h1 span{color:#fe2c55}
p{color:#bbb;line-height:1.6}
input{
width:100%;
padding:16px;
border-radius:10px;
border:1px solid #555;
background:#292929;
color:white;
font-size:15px;
margin:15px 0;
}
button{
width:100%;
padding:15px;
background:#fe2c55;
border:0;
border-radius:10px;
color:white;
font-size:17px;
font-weight:bold;
}
button:active{background:#d91c45}
#message{margin-top:20px}
footer{color:#888;font-size:12px;margin-top:30px}
</style>
</head>
<body>
<div class="container">
<h1><span>KHAN</span> TikTok Downloader</h1>
<p>Download TikTok videos easily</p>

<input id="videoLink"
type="url"
placeholder="Paste TikTok video link here">

<button onclick="downloadVideo()">
Download Video
</button>

<div id="message"></div>

<footer>
Khan Downloader © 2026
</footer>
</div>

<script>
function downloadVideo(){
const link=document.getElementById("videoLink").value.trim();
const msg=document.getElementById("message");

if(!link || !/tiktok\.com/i.test(link)){
msg.innerText="Please enter a valid TikTok link.";
return;
}

msg.innerText="Link received. Download service API is not connected yet.";
}
</script>
</body>
</html>
