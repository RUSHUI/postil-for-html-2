/*!
 * @packet brooder.mobi.util.mintools;
 */


;
(function($, win, doc) {
	$.confirm = function(msg, fn) {
		var str = "<div class='mask-msg'><div class='message'><header>" + msg +
			"</header><section><div class='btn cancel'>取消</div><div class='btn ok'>确认</div></section></div></div>";
		var $elm = $(str).appendTo($("body"));
		setTimeout(function() {
			$elm.find(".message").addClass("toCenter");
		}, 50);
		$elm.find(".btn").each(function() {
			$(this).click(function(e) {
				if ($(this).hasClass("ok")) {
					fn && fn();
				}
				$elm.find(".message").removeClass("toCenter");
				setTimeout(function() {
					$elm.remove();
				}, 500);

			});
		});
		$elm.click(function() {
			$elm.find(".message").removeClass("toCenter");
			setTimeout(function() {
				$elm.remove();
			}, 500);
		});
		$elm.find(".message").click(function(e) {
			e.preventDefault();
			e.stopPropagation();
		});
	};

	$.prompt = function(msg, isArea, fn) {
		var str = "<div class='mask-msg'><div class='message'><header>" + msg +
			"</header><section><div class='inputarea'>";
			if(isArea){
				str+="<textarea style='width:100%;' class='val' placeholder='请输入...' rows='8' cols='40'></textarea>";
			}else{
				str+="<input class='val' type='text' placeholder='输入任务名'>";
			}
			str+="</div><div class='btn cancel'>取消</div><div class='btn ok'>确认</div></section></div></div>";

		var $elm = $(str).appendTo($("body"));
		setTimeout(function() {
			$elm.find(".message").addClass("toCenter");
		}, 50);
		$elm.find(".btn").each(function() {
			$(this).click(function(e) {
				if ($(this).hasClass("ok")) {
					fn && fn($elm.find(".val").val());
				}
				$elm.find(".message").removeClass("toCenter");
				setTimeout(function() {
					$elm.remove();
				}, 500);
			});
		});
		$elm.click(function(e) {
			$elm.find(".message").removeClass("toCenter");
			setTimeout(function() {
				$elm.remove();
			}, 500);
		});
		$elm.find(".message").click(function(e) {
			e.preventDefault();
			e.stopPropagation();
		});
		return $elm;
	};
	$.alert = function(msg, fn, position) {
		var str = "<div class='mask-msg'><div class='mask-msg-box'><i class='rs rs-sms' ></i> " + msg +
			"</div></div>";
		var $elm = $(str).appendTo(position || $("body"));
		setTimeout(function() {
			$elm.find(".mask-msg-box").addClass("toCenter");
		}, 50);
		setTimeout(function() {
			$elm.find(".mask-msg-box").removeClass("toCenter");
			setTimeout(function() {
				$elm.remove();
			}, 500);
		}, 1500);
		return $elm;
	};
	$.dialog = function(msg, fn) {

		var message={
			text:msg,
			ok:"确认",
			cancel:"取消"
		};
		if(typeof msg!=="string"){
			message=$.extend(message,msg,{});
		}

		var str = "<div class='mask-msg'><section class='message dialog'><div class='text'>" + message.text +
			"</div><div class='btn cancel'>"+message.cancel+"</div><div class='btn ok'>"+message.ok+"</div></section></div>";
		var $elm = $(str).appendTo($("body"));
		setTimeout(function() {
			$elm.find(".message").addClass("toCenter");
		}, 50);
		$elm.find(".message.dialog").css("margin-left","-"+($("body").find(".message.dialog").width()/2)+"px");
		$elm.find(".btn").each(function() {
			$(this).click(function(e) {
				if ($(this).hasClass("ok")) {
					fn && fn();
				}
				$elm.find(".message").removeClass("toCenter");
				setTimeout(function() {
					$elm.remove();
				}, 500);
			});
		});
		$elm.click(function() {
			$elm.find(".message").removeClass("toCenter");
			setTimeout(function() {
				$elm.remove();
			}, 500);
		});
		$elm.find(".message").click(function(e) {
			e.preventDefault();
			e.stopPropagation();
		});
	};

	$.load=function(){
		var str='<div class="mask-msg">' +
			'<div class="loader">' +
			'<div class="bar"></div>' +
			'<div class="bar"></div>' +
			'<div class="bar"></div>' +
			'</div>' +
			'</div>';
		var $elm = $(str).appendTo($("body"));
		return $elm;
	}
})(jQuery, window, document);
