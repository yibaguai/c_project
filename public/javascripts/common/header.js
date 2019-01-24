/*header布局*/
define(["jquery", "url", "loginModal", "registerModal", "bootstrap"],function($, url){
	class Header{
		constructor(){
			this.init();
			this.loadLoginUser();
			this.positionClick();
		}

		init(){
			$("header").html(`
				<div class="container">
				<nav class="navbar navbar-inverse">
			    <!-- Brand and toggle get grouped for better mobile display -->
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a class="navbar-brand" href="#">拉勾网管理系统</a>
			    </div>
			    <!-- Collect the nav links, forms, and other content for toggling -->
			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul class="nav navbar-nav">
			        <li class="active home"><a href="/index.html">首页 <span class="sr-only">(current)</span></a></li>
			        <li class="headerPositionBtn"><a style="cursor:pointer;" href="/html/position/position.html">职位管理</a></li>
			      </ul>
			      <ul class="nav navbar-nav navbar-right not-login">
			        <li><a href="#" data-target="#loginModal" data-toggle="modal">登录</a></li>
			        <li><a href="#" data-target="#registerModal" data-toggle="modal">注册</a></li>
			      </ul>
			      <ul class="nav navbar-nav navbar-right login-success hidden">
			        <li><a href="#">欢迎:</a></li>
			        <li><a href="#" class="logout">注销</a></li>
			      </ul>
			    </div><!-- /.navbar-collapse -->
				</nav>
			  </div><!-- /.container-fluid -->
			  `)
		}
		//事件监听
		positionClick(){
			//注销按钮
			$(".logout").click(this.logoutHandler);
		}
		//登录成功header信息改变
		loadLoginUser(){
			const user = sessionStorage.loginUser;
			if(user){
				$(".login-success").removeClass("hidden")
									.find('a:first').text("欢迎:"+ user).end()
									.siblings('.not-login').remove();
			}
		}
		//用户注销
		logoutHandler(){
			const logoutUrl = url.baseUrl + "/api/users/logout.do";
			console.log(111);
			$.get(logoutUrl, (res) => {
				sessionStorage.removeItem("loginUser");
				location.href = "/index.html";
			})

		}

	}
	return new Header();
})