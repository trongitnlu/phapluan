export const music1 = `<!DOCTYPE html> 
<html> 

<head>
<meta charset="UTF-8">
<style>

	/*Nhấp nháy*/
	.blink_me {
	  animation: blinker 1s linear infinite;
	}

	@keyframes blinker {
	  50% {
		opacity: 0;
	  }
	}
	.non_blink {
	}


	#center {
		min-width: 50em;
	}
	body button {
		padding: 0.8em 0.4em;
		margin: 0.1em;
		min-width: 6em;
		font-weight: bold;
		-webkit-border-radius: 1em;
	}
	
	#au_pause, #au_play {
		padding: 1.4em 1em;
	}
	
	.yellow, #bt2, #bt9, #bt20, #bt32, #bt45, #bt52 {
		color: black;
		background-color: yellow;
	}
	.red, #au_pause, #bt29, #bt36, #bt42, #bt51, #bt53 {
		color: yellow;
		background-color: red;
	}
	.green, #au_play, #bt6, #bt10, #bt13, #bt22, #bt30, #bt38, #bt55, #bt58 {
		color: white;
		background-color: green;
	}
	.blue, #bt1, #bt5, #bt7, #bt11, #bt11_1, #bt14, #bt24, #bt33, #bt39, #bt43, #bt46, #bt49, #bt59{
		color: yellow;
		background-color: blue;
	}
	.pink, #bt4, #bt12, #bt15, #bt19, #bt25, #bt25_1, #bt28, #bt40, #bt54, #bt56, #bt56_1, #bt62, #bt62_1 {
		color: black;
		background-color: pink;
	}
	.gray, #bt3, #bt26, #bt31, #bt35, #bt41, #bt50, #bt61, #bt61_1 {
		color: white;
		background-color: gray;
	}
	.orange, #bt16, #bt18, #bt23, #bt23_1, #bt34, #bt48 {
		color: black;
		background-color: orange;
	}
	.cyan, #bt8, #bt17, #bt21, #bt27, #bt44, #bt60, #bt60_1 {
		color: black;
		background-color: cyan;
	}
	
</style>

</head>
<body>
<center id="center">
<audio id="play" controls autoplay onended="au_ended()" src="" type="audio/mp3"></audio><br/><br/>

<button id="bt1" onClick='list("FILE1_PHANDAU.mp3","bt1")'>CTCB1</button>
<button id="bt2" onClick='list("FILE1_PHANHAI.mp3","bt2")'>CTCB2</button>
<button id="bt3" onClick='list("THAMHOATUDONG.mp3","bt3")'>Thảm Họa</button>
<button id="bt4" onClick='list("FILE2.mp3","bt4")'>Mục Đích</button>
<button id="bt5" onClick='list("FILE3.mp3","bt5")'>Bạn 1?</button>
<button id="bt6" onClick='list("FILE4.mp3","bt6")'>Bạn 2?</button>
<button id="bt7" onClick='list("FILE5.mp3","bt7")'>Phúc âm</button><br/>
<button id="bt8" onClick='list("FILE12.mp3","bt8")'>Gọi lại</button>
<button id="bt9" onClick='list("FILE6.mp3","bt9")'>XH hoại</button>
<button id="bt10" onClick='list("FILE7.mp3","bt10")'>3 Tui?</button>
<button id="bt11" onClick='list("FILE8.mp3","bt11")'>Niệm </button>
<button id="bt11_1" onClick='list("duchinchu.mp3","bt11_1")'>Niệm 2</button>
<button id="bt12" onClick='list("FILE9.mp3","bt12")'>Ko hiểu</button>
<button id="bt13" onClick='list("FILE10.mp3","bt13")'>Tạm biệt</button>
<button id="bt14" onClick='list("FILE11.mp3","bt14")'>DAFA H truyền</button><br/>
<button id="bt15" onClick='list("FILE15.mp3","bt15")'>3 Tui rất Q trọng</button>
<button id="bt16" onClick='list("FILE13.mp3","bt16")'>Nên Niệm</button>
<button id="bt17" onClick='list("FILE14.mp3","bt17")'>Đội?</button>
<button id="bt23" onClick='list("GIANHAPDOAN.mp3","bt23")'>Đoàn?</button>
<button id="bt18" onClick='list("FILE16.mp3","bt18")'>Là PLC?</button>
<button id="bt19" onClick='list("FILE17.mp3","bt19")'>Vào PLC</button>
<button id="bt20" onClick='list("FILE36.mp3","bt20")'>Tại sao ĐCS Đ PLC</button><br/>
<button id="bt21" onClick='list("FILE18.mp3","bt21")'>Bạn nhỏ?</button>
<button id="bt22" onClick='list("FILE20.mp3","bt22")'>3 Tui ngắn</button>
<button id="bt23_1" onClick='list("FILE19.mp3","bt23_1")'>Đảng?</button>
<button id="bt24" onClick='list("FILE21.mp3","bt24")'>Chưa nghe 3 Tui</button>
<button id="bt25" onClick='list("FILE22.mp3","bt25")'>Mở lời</button>
<button id="bt25_1" onClick='list("doivoinguoitotratquantrong.mp3","bt25_1")'>Người tốt</button>
<button id="bt26" onClick='list("FILE23.mp3","bt26")'>Nhắc đội?</button>
<button id="bt27" onClick='list("FILE24.mp3","bt27")'>Dạy bạn nhỏ</button><br/>
<button id="bt28" onClick='list("FILE26.mp3","bt28")'>Giảng theo 3 Tui</button>
<button id="bt29" onClick='list("FILE27.mp3","bt29")'>Muốn tiền</button>
<button id="bt30" onClick='list("FILE28.mp3","bt30")'>Ở N ngoài</button>
<button id="bt31" onClick='list("FILE25.mp3","bt31")'>Nông dân</button>
<button id="bt32" onClick='list("FILE29.mp3","bt32")'>Im lặng</button>
<button id="bt33" onClick='list("FILE30.mp3","bt33")'>Làm sao Tui</button>
<button id="bt34" onClick='list("FILE31.mp3","bt34")'>Để tử giúp Tui?</button><br/>
<button id="bt35" onClick='list("FILE35.mp3","bt35")'>Tự động G 3 Tui</button>
<button id="bt36" onClick='list("FILE33.mp3","bt36")'>KDụ 3Tui</button>
<button id="bt37" onClick='list("FILE38.mp3","bt37")'>Tiền hay Mạng</button>
<button id="bt38" onClick='list("FILE34.mp3","bt38")'>Nói Hào!</button>
<button id="bt39" onClick='list("FILE30.mp3","bt39")'>Được? Niệm!</button>
<button id="bt40" onClick='list("FILE37.mp3","bt40")'>Đừng làm xấu</button>
<button id="bt41" onClick='list("FILE39.mp3","bt41")'>Thiện đãi PLC</button><br/>
<button id="bt42" onClick='list("WEI.mp3","bt42")'>Alo</button>
<button id="bt42_1" onClick='list("Tuoicuatoi.mp3","bt42_1")'>Tuổi của tôi</button>
<button id="bt43" onClick='list("BAN_XINCHAO.mp3","bt43")'>Bạn, xin chào</button>
<button id="bt44" onClick='list("HOADANHTHOAI.mp3","bt44")'>Hóa Danh?</button>
<button id="bt45" onClick='list("FILE46.mp3","bt45")'>Tiền C Tượng</button>
<button id="bt46" onClick='list("HA.mp3","bt46")'>Hả</button>
<button id="bt47" onClick='list("HAOMA.mp3","bt47")'>Được không?</button>
<button id="bt48" onClick='list("haobuhao.mp3","bt48")'>Được?</button><br/>
<button id="bt49" onClick='list("FILE42.mp3","bt49")'>Phúc hay Tiền</button>
<button id="bt50" onClick='list("FILE40.mp3","bt50")'>TC trả lương</button>
<button id="bt51" onClick='list("FILE41.mp3","bt51")'>Tin Giêsu</button>
<button id="bt52" onClick='list("FILE43.mp3","bt52")'>TC là tà ác</button>
<button id="bt53" onClick='list("FILE44.mp3","bt53")'>Mổ Nội Tạng</button>
<button id="bt54" onClick='list("FILE45.mp3","bt54")'>Tai họa nhiều</button>
<button id="bt55" onClick='list("DUNGDUNG.mp3","bt55")'>Đúng/Hào</button><br/>
<button id="bt56" onClick='list("TOINOI(1).mp3","bt56")'>Tôi nói</button>
<button id="bt56_1" onClick='list("wozaiting.mp3","bt56_1")'>Tôi nghe</button>
<button id="bt57" onClick='list("bannoidi.mp3","bt57")'>Bạn nói đi</button>
<button id="bt57_1" onClick='list("BANCODANGNGHEKHONG.mp3","bt57_1")'>Bạn có nghe?</button>
<button id="bt58" onClick='list("danglamgithiculamchithoaithoi.mp3","bt58")'>làm gì cứ Tui</button>
<button id="bt59" onClick='list("bannhocodeokhanquankhong.mp3","bt59")'>Bạn nhỏ đeo</button><br/>
<button id="bt60" onClick='list("yunjing.mp3","bt60")'>Yunjing</button>
<button id="bt60_1" onClick='list("chunzhu.mp3","bt60_1")'>Chunzhu</button>
<button id="bt61" onClick='list("wenlai.mp3","bt61")'>WenLai</button>
<button id="bt61_1" onClick='list("fangliang.mp3","bt61_1")'>Fangliang</button>
<button id="bt62" onClick='list("mingqiu.mp3","bt62")'>MingQiu</button>
<button id="bt62_1" onClick='list("xinguang.mp3","bt62_1")'>XinQuang</button><br/>

<button id="au_pause" onClick='au_pause()'>PAUSE</button>
<button id="au_play" onClick='au_play()'>PLAY</button>
</center>


<div id="bt0"></div>
<script>
var file_play = document.getElementById("play");
var bt_old="bt0";

function list(file,bt) { 

	// alert(file);
	file_play.src = "file:///android_asset/mp3/"+file; // Dong dc sua
	document.getElementById(bt).className="blink_me";
	document.getElementById(bt_old).className="non_blink";
	// alert(file_play);
	bt_old=bt;
}
function au_ended() {
	document.getElementById(bt_old).className="non_blink";
}

function au_play() {
    file_play.play();
}

function au_pause() {
    file_play.pause();
}
function au_volume() {
	file_play.volume = 0.1;
}
//mặc định cho 100% volume
file_play.volume = 1;

//Xủ lý key

</script>

<br/>
<br/>
<br/>
</body> 
</html>`;
