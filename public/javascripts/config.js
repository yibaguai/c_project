require.config({
	baseUrl : "/",
	paths : {
		"jquery" : "lib/jquery/jquery-1.12.4.min",
		"bootstrap" : "lib/bootstrap/js/bootstrap.min",
		"swiper" : "lib/swiper/js/swiper.min",
		"header" : "javascripts/common/header",
		"loginModal" : "javascripts/common/loginModal",
		"registerModal" : "javascripts/common/registerModal",
		"url" : "javascripts/common/url",
		"template" : "lib/art-template/template-web"
	},
	shim : {
		bootstrap : {
			deps : ["jquery"]
		}
	}
});