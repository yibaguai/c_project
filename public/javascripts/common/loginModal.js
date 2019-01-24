/*登录模态框*/
define(["jquery", "url", "header"], function($, url){
	class Login{
		constructor(){
			this.init();
			this.addListener();
		}
		init(){
			$("body").append(`
				<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 class="modal-title" id="login-Modal">用户登录</h4>
				      </div>
				      <div class="modal-body">
				      	<div class="alert alert-danger login-error hidden" role="alert">用户名或密码错误</div>
				        <form>
						  <div class="form-group">
						    <label for="login-userName">用户名</label>
						    <input type="text" class="form-control" id="login-userName" placeholder="请输入用户名">
						  </div>
						  <div class="form-group">
						    <label for="login-Psd">密码</label>
						    <input type="password" class="form-control" id="login-Psd" placeholder="输入密码">
						  </div>
						</form>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
				        <button type="button" class="btn btn-primary" id="loginBtn">登录</button>
				      </div>
				    </div>
				  </div>
				</div>
			`);
		}
		//登录按钮监听
		addListener(){
			$("#loginBtn").click(() => {
				this.loginHandler();
			});
		}
		//登录操作
		loginHandler(){
			let userName = $("#login-userName").val();
			let userPsd = $("#login-Psd").val();
			let loginUrl = url.baseUrl+"/api/users/login.do";
			$.post(loginUrl, {userName, userPsd}, function(res){
				if(res.res_body.status===0){
					$(".login-error").removeClass("hidden");
				}else{
					console.log(res.res_body.data.username);
					$("#loginModal").modal("hide");
					sessionStorage.loginUser = res.res_body.data.username;
					location.reload();
				}
			});
		}
	}
	return new Login();
});