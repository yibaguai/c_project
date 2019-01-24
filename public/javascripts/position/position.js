require(["../config"], function(){
	require(["url", "template", "jquery", "header"], function(url, template){
		class Position{
			constructor(){
				this.init();
				this.loadTable();
				this.addListener();
			}
			//头部样式改变
			init(){
				//改变页面切换后nav的样式
				$(".headerPositionBtn").addClass("active").siblings().removeClass('active');
			}
			// 点击事件监听
			addListener(){
				//翻页事件监听
				$(".pagination").on("click", "a", this.cutPage.bind(this));
				//添加职位处理按钮
				$(".addPositionHandler").click(this.addPositionHandler);
			}
			//生成表格
			loadTable(page = 1){
				const tableUrl = url.baseUrl + "api/positions/list.do?page=" + page;
				$.getJSON(tableUrl, (res)=>{
					const html = template("list-template", {list: res.res_body.data});
					$(".list-body").html(html)
					//修改按钮
					$(".alterData").on("click", this.alterData);
				});
			}
			//翻页
			cutPage(event){
				let page = $(event.target).text();
				$(event.target).parent().addClass("active").siblings().removeClass("active");
				this.loadTable(page);
			}
			//修改数据
			alterData(){
				let $tr = $(this).parent().parent();
				let _id = $tr.data("id"),
					logo = $tr.find(".logo").attr("src"),
					company = $tr.find(".company").text(),
					position = $tr.find(".position").text(),
					salary = $tr.find(".salary").text();
				//将本行数据填入修改模态框
				$(".old-logo").html(logo);
				$("#apositionId").val(_id);
				$("#acompanyName").val(company);
				$("#aPositionName").val(position);
				$("#apay").val(salary);
			}
			//添加职位操作
			addPositionHandler(){
				const addPositionUrl = url.baseUrl + "api/positions/add.do";
				const formdata = new FormData(document.querySelector(".form-addPosition"));
				console.log(document.querySelector(".form-addPosition"));
				$.ajax({
					type: "post",
					url : addPositionUrl,
					data : formdata,
					contentType: false,
					processData:false,
					success :(res) =>{
						console.log(res);
					}
				});
			}

		}
		return new Position();
	});
});