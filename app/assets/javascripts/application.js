// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$('#blur').blurjs({
		source: 'html',			//Background to blur
		radius: 7,			//Blur Radius
		overlay: 'rgba(245,245,245,0.8)',			//Overlay Color, follow CSS3's rgba() syntax
		offset: {			//Pixel offset of background-position
			x: 0,
			y: 0
		},
		optClass: '',			//Class to add to all affected elements
		cache: false,			//If set to true, blurred image will be cached and used in the future. If image is in cache already, it will be used.
		cacheKeyPrefix: 'blurjs-',	//Prefix to the keyname in the localStorage object
		draggable: false		//Only used if jQuery UI is present. Will change background-position to fixed
	});
});