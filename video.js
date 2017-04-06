var videoList  = [
		'http://gslb.miaopai.com/stream/RuIDpHHRSR9s~xg0jhyZa9qi2p9HRj3j.mp4?vend=miaopai&',
		'http://gslb.miaopai.com/stream/Gnx29E0u1KJZpmtS1mJwwAwS46splHb2.mp4?vend=miaopai&'
	]
	$(document).ready(function(){
		var video = $("video")[0];
		$("li").click(function(){
			$("li").removeClass("activateLi");
			$("video").attr("src",videoList[$(this).index()]);
			$(this).addClass("activateLi");
			$(".progress-bar").css('width',0);			
		});
		$("button").click(function(){
			$("video")[0].playbackRate = $(this).html();
			console.log($(this).html())
		});
		var i = setInterval(function() {
			video.addEventListener("timeupdate",function(){
				if(video.ended){
					$(".wrapper").show();
					clearInterval(i);
				} 					
				var percent = parseFloat(video.currentTime.toFixed(2))/video.duration;
				var percentString = String(percent).split('.')[1].substring(0,3)/10+'%';
				$(".progress-bar").css('width',percentString);
			})
		}, 200);		
		$(".close").click(function(){
			$(".wrapper").hide();
		})
	})