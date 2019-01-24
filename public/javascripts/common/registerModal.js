/*注册模态框*/
define(["jquery", "url"], function($, url){
	class Register{
		constructor(){
			this.init();
			this.addListener();
		}
		init(){
			$("body").append(`
				<div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 class="modal-title" id="register-ModalLabel">用户注册</h4>
				      </div>
				      <div class="modal-body">
				        <form>
						  <div class="form-group">
						    <label for="register-userName">用户名</label>
						    <input type="text" class="form-control" name="register-userName" id="register-userName" placeholder="请输入用户名">
						  </div>
						  <div class="form-group">
						    <label for="register-Psd">密码</label>
						    <input type="password" class="form-control" name="register-Psd" id="register-Psd" placeholder="输入密码">
						  </div>
						  <div class="form-group">
						    <label for="register-psdAgain">确认密码</label>
						    <input type="password" class="form-control" name="register-psdAgain" id="register-psdAgain" placeholder="再次输入密码">
						  </div>
						  <div class="form-group">
						    <label for="register-userEmail">邮箱</label>
						    <input type="text" class="form-control" name="register-userEmail" id="register-userEmail" placeholder="输入e-mail地址">
						  </div>
						</form>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
				        <button type="button" class="btn btn-primary" data-dismiss="modal" id="registerBtn">注册</button>
				      </div>
				    </div>
				  </div>
				</div>
				`);
		}
		//事件监听
		addListener(){
			//注册按钮事件
			$("#loginBtn").click(this.registerHandler);
			//检测用户是否存在
			$("#register-userName").blur(this.checkUserHandler);
		}
		//注册操作
		registerHandler(){
			let userName = $("#register-userName").val();
			let userPsd = $("#register-Psd").val();
			let userPsdAgain = $("#register-psdAgain").val();
			let userEmail = $("#register-userEmail").val();
		}
		//用户名查重
		checkUserHandler(){
			const checkUrl = url.baseUrl + "/api/users/check.do";
			let username = $("register-userName").val();
			$.get(checkUrl, {username}, (res) => {
				if(res.res_body.status){
					console.log("不重复");
				}else{
					console.log("重复");
				}
			})
		}

	}
	return new Register();
});