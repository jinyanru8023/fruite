<script type="text/javascript">
			$(function() {
				var $a = $("#a");
				var $level01 = $("#ul"); //一级菜单
				var $level02 = $("#div"); //二级菜单

				//获取json
				$.getJSON("js/menu.json", function(json) {
					console.log(json.menu);
					var myMenu = json.menu;
					//console.log(myMenu);
					
					var myOne = myMenu.one;
					var myTwo = myMenu.two;
					//console.log(myOne);
					$.each(myOne,function(j){
						$("<li>" + myOne[j] + "</li>").appendTo("#ul");
					})
					$.each(myTwo,function(i){
						$("<div>" + myTwo[i] + "</div>").appendTo("#div");
					})
					
					$level01.mouseover(function() {
						$(this).css("display", "block");
					});
					$a.mouseover(function() {
						$level01.css("display", "block");
					});
					$("ul li").mouseover(function() {
						$level02.css("display", "block");
						$("#div div").css("display", "none").eq($(this).index()).css("display", "block");
					});
					$("#div div").mouseout(function() {
						$level01.css("display", "none");
						$level02.css("display", "none");
					});
				});

			});
		</script>