function add_photo_helper(photo){
    var clicked = parent.window.$('.current-text-box');
    if(clicked.parents('.g_googleTextBox').find('.g_wrap_photo').size() == 0){
		clicked.parents('div.g_wrap').after('<div class="g_wrap_photo"></div>');
	}
    var g_wrap_photo = clicked.parents('.g_googleTextBox').find('.g_wrap_photo');

	g_wrap_photo.append('<div id="g_wrap_photo_'+photo.id+'"></div>');
	g_wrap_photo.find('#g_wrap_photo_'+photo.id).append('<div onclick="$.closeMe(this)" class="g_close_photo_btn g_right"></div>');
	g_wrap_photo.find('#g_wrap_photo_'+photo.id).append('<img id="g_receiver_photo_'+photo.id+'" src="'+photo.file+'" style="width:300px;" />');
	
    close_dom_window();
}

function add_video_helper(video){
    var clicked = parent.window.$('.current-text-box');
    if(clicked.parents('.g_googleTextBox').find('.g_wrap_video').size() == 0){
		clicked.parents('div.g_wrap').after('<div class="g_wrap_video"></div>');
	}
        
    var g_wrap_video = clicked.parents('.g_googleTextBox').find('.g_wrap_video');
   
	g_wrap_video.append('<div id="g_wrap_video_'+video.id+'"></div>');
	g_wrap_video.find('#g_wrap_video_'+video.id).append('<div onclick="$.closeMe(this)" class="g_close_video_btn g_right"></div>');
	g_wrap_video.find('#g_wrap_video_'+video.id).append('<p class="g_video_title">'+video.title+'</p><p><img id="g_receiver_video_'+video.id+'" src="'+video.file+'" style="width:300px;" /></p><p>'+video.description+'</p>');
	
    close_dom_window();
}

function close_dom_window(){
	parent.window.$('.g_close_popup').click();
    parent.window.$('.current-text-box').removeClass('current-text-box');
    parent.window.$.closeDOMWindow(); 
}