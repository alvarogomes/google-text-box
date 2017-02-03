/**
 * google plus text box
*/
 
(function($){

	$.fn.googlePlusTextBox = function(options) {
		//get current text box
		var thisObject = this;
		var defaults = {}; 
		var ajaxsentgetperson = null;
		var ajaxsentgetgroup = null;
		var ajaxsentsearchperson = null;
		var ajaxsentgetpersoninfo = null;
		var ajaxsentgetpersoninfo1 = null;
		var searchPersonWord = '';
		//options
		var options = $.extend(defaults, options);
		//append some tags when load
		$(this).append('<div class="g_wrap"></div>');
		$('.g_wrap',this).append('<div class="g_wrap_box"><div class="g_enter_box g_left">Share news here...</div><div class="g_bottons_wrap g_right"></div><div class="g_clear"></div></div>');
		$('.g_wrap',this).append('<div class="g_popup_list g_popup_photo"></div><div class="g_popup_list g_popup_video"></div>');
		
		$('.g_wrap',this).append('<div class="g_person_info_popup"></div>');
		
		$('.g_bottons_wrap',this).append('<span class="g_left g_botton g_add_photo" title="Add-Photo"></span>');
		$('.g_bottons_wrap',this).append('<span class="g_left g_botton g_add_video" title="Add-Video"></span>');
		$('.g_bottons_wrap',this).append('<span class="g_left g_botton g_add_link" title="Add-Link"></span>');
		$('.g_bottons_wrap',this).append('<span class="g_left g_botton g_your_location" title="Your-Location"></span>');
		$('.g_bottons_wrap',this).append('<span class="g_clear"></span>');
		
		$('.g_popup_photo',this).append('<div class="g_popup_top"></div>');
		$('.g_popup_photo',this).append('<div class="g_popup_text"></div>');
		$('.g_popup_photo .g_popup_text',this).append('<div class="g_close_popup g_right"></div>');
		$('.g_popup_photo .g_popup_text',this).append('<div class="g_popup_wrap_liks"><ul></ul></div>');
		$('.g_popup_photo .g_popup_text .g_popup_wrap_liks ul',this).append('<li class="g_popup_liks" rel="photo_add"><span class="g_add_photo_btn"></span>Add Photo</li>');
		$('.g_popup_photo .g_popup_text .g_popup_wrap_liks ul',this).append('<li class="g_popup_liks" rel="photo_choose"><span class="g_create_album_btn"></span>From Your Album</li>');
		
		$('.g_popup_video',this).append('<div class="g_popup_top"></div>');
		$('.g_popup_video',this).append('<div class="g_popup_text"></div>');
		$('.g_popup_video .g_popup_text',this).append('<div class="g_close_popup g_right"></div>');
		$('.g_popup_video .g_popup_text',this).append('<div class="g_popup_wrap_liks"><ul></ul></div>');
		$('.g_popup_video .g_popup_text .g_popup_wrap_liks ul',this).append('<li class="g_popup_liks" rel="video_add"><span class="g_upload_video_btn"></span>Upload Video</li>');
		$('.g_popup_video .g_popup_text .g_popup_wrap_liks ul',this).append('<li class="g_popup_liks" rel="video_choose"><span class="g_video_from_phone_btn"></span>From Your Videos</li>');
		//enter text box click event
		$('.g_enter_box',this).click(function(){
			if( $('.g_enter_text',this).size() == 0 ){
				//fill some html tags we need
				enterMessage();
				$('.g_enter_text',thisObject).focus();
			}
		});
		//add photo popup click event
		$('.g_add_photo',this).click(function(){
			if( $('.g_wrap_selector',thisObject).size() == 0 ){
				$('.g_wrap_selector',thisObject).remove();
				//fill some html tags we need
				enterMessage();
				//show popup
				showPhotoPopup();
			}else{
				//show popup
				showPhotoPopup();
			}
		});
		//add video event
		$('.g_add_video',this).click(function(){
			if( $('.g_wrap_selector',thisObject).size() == 0 ){
				$('.g_wrap_selector',thisObject).remove();
				//fill some html tags we need
				enterMessage();
				//show popup
				showVideoPopup();
			}else{
				showVideoPopup();
			}
		});
		
		//add link btn click event
		$('.g_add_link',this).click(function(){
			$('.g_popup_list',thisObject).hide();
			if( $('.g_wrap_selector',thisObject).size() == 0 ){
				$('.g_wrap_selector',thisObject).remove();
				enterMessage();
				fillLinkArea();
			}else{
				fillLinkArea();
			}
			//link text box focus event
			$('.g_link_text',thisObject).focus(function(){
				$('.g_link_text',thisObject).addClass('hight_input');
				if( $('.g_link_text',thisObject).val() == $('.g_link_text',thisObject).attr('holder') ){
					$('.g_link_text',thisObject).val('');
					$('.g_link_text',thisObject).css('color','#000');
				}
			});
			//link text box blur event
			$('.g_link_text',thisObject).blur(function(){
				$('.g_link_text',thisObject).removeClass('hight_input');
				if( $('.g_link_text',thisObject).val() == '' ){
					$('.g_link_text',thisObject).css('color','#ccc');
					$('.g_link_text',thisObject).val($('.g_link_text',thisObject).attr('holder'));
				}else{
					$('.g_add_link_text_btn',thisObject).addClass('g_active_add_btn');
				}
			});
			//link text box keyup event
			$('.g_link_text',thisObject).keyup(function(){
				if( $('.g_link_text',thisObject).val().trim() != '' && $('.g_link_text',thisObject).val() != $('.g_link_text',thisObject).attr('holder')  ){
					$('.g_add_link_text_btn',thisObject).addClass('g_active_add_btn');
				}
				if( $('.g_link_text',thisObject).val().trim() == ''  ){
					$('.g_add_link_text_btn',thisObject).removeClass('g_active_add_btn');
				}
			});
			//close btn event
			$('.g_close_add_link_btn',thisObject).click(function(){
				$('.g_wrap_add_link',thisObject).remove();
				highLightButtons();
			});

		});
		//locatio btn click event
		$('.g_your_location',this).click(function(){
			
			$('.g_popup_list',thisObject).hide();
			if( $('.g_wrap_selector',thisObject).size() == 0 ){
				$('.g_wrap_selector',thisObject).remove();
				enterMessage();
				fillLocationArea();
			}else{
				fillLocationArea();
			}
			
			$('.g_location_close_btn',thisObject).click(function(){
				$('.g_wrap_location',thisObject).remove();
			});
		});
		//close btn event
		$('.g_close_popup',this).click(function(){
			$('.g_popup_list',thisObject).slideUp();
		});
        //show upload popup
        $('.g_popup_liks',this).click(function(){
            var target = $(this).attr('rel');
            $(this).addClass('current-text-box');
            $.openDOMWindow({
                height:400, 
                width:700, 
                windowSource:'iframe', 
                windowSourceURL: target+'.php', 
                windowPadding:0, 
                loader:1, 
                loaderImagePath:'images/ajax-loading.gif',
                modal:1
            }); 
            return false;
        });
		//show photo popup function
		var showPhotoPopup = function(){
			$('.g_popup_list',thisObject).hide();
			$('.g_popup_photo',thisObject).css({'top':$('.g_add_photo',thisObject).position().top+14,'left':$('.g_add_photo',thisObject).position().left-80+9});
			$('.g_popup_photo',thisObject).slideDown();
		}
		//show video popup function
		var showVideoPopup = function(){
			$('.g_popup_list',thisObject).hide();
			$('.g_popup_video',thisObject).css({'top':$('.g_add_video',thisObject).position().top+14,'left':$('.g_add_video',thisObject).position().left-80+18});
			$('.g_popup_video',thisObject).slideDown();
		}
		//fill location html tags function
		var fillLocationArea = function(){
			if( $('.g_wrap_location',thisObject).size() == 0 ){
				$('.g_wrap_location',thisObject).remove();
				$('.g_wrap',thisObject).after('<div class="g_wrap_location"></div>');
				$('.g_wrap_location',thisObject).append('<div class="g_location_close_btn g_right"></div>');
				$('.g_wrap_location',thisObject).append('<div class="g_location_info g_left" latitude="" longitude="">loading....</div>');
				$('.g_wrap_location',thisObject).append('<div class="g_clear"></div>');
				//get your location
				if (navigator.geolocation) {
					var timeoutVal = 10 * 1000 * 1000;
					navigator.geolocation.getCurrentPosition(
						displayPosition, 
						displayError,
						{ enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
					);
				}else{
					alert("Geolocation is not supported by this browser");
				}
			}
		}
		//get your location success function
		var displayPosition = function(position){
			$('.g_location_info',thisObject).empty();
			$('.g_location_info',thisObject).css('background','url(images/location.png) no-repeat 0 center');
			$('.g_location_info',thisObject).attr('latitude',position.coords.latitude);
			$('.g_location_info',thisObject).attr('longitude',position.coords.longitude);
			geocoder = new GClientGeocoder();
			//get your location address by latitude+longitude
			geocoder.getLocations(position.coords.latitude+','+position.coords.longitude, addAddressToMap);
		}
		//get location error function
		var displayError = function(error){
			var errors = {
				1: 'Permission denied',
				2: 'Position unavailable',
				3: 'Request timeout'
			};
			$('.g_location_info',thisObject).empty();
			$('.g_location_info',thisObject).css('background','url(images/location.png) no-repeat 0 center');
			$('.g_location_info',thisObject).text('Error: ' + errors[error.code]);
		}
		//get your location address by latitude+longitude function
		var addAddressToMap = function(response){
			if(!response || response.Status.code != 200){
				$('.g_location_info',thisObject).html('Sorry, we were unable to geocode that address.');
			}else{
				place = response.Placemark[0];
				//show your location address
				$('.g_location_info',thisObject).html(place.address);
			}
		}
		//fill link html tags function
		var fillLinkArea = function(){
			if( $('.g_wrap_add_link',thisObject).size() == 0 ){
				unHighLightButtons();
				$('.g_your_location',thisObject).css('background-position','0px -31px');
				$('.g_wrap',thisObject).after('<div class="g_wrap_add_link"></div>');
				$('.g_wrap_add_link',thisObject).append('<div class="g_close_add_link_btn g_right"></div>');
				$('.g_wrap_add_link',thisObject).append('<div class="g_add_link_ico g_left"></div>');
				$('.g_wrap_add_link',thisObject).append('<div class="g_add_link_text g_left"><input type="text" name="g_link_text" class="g_link_text" holder="Type or paste links" value="Type or paste links"/></div>');
				$('.g_wrap_add_link',thisObject).append('<div class="g_add_link_text_btn g_left">Add</div>');
				
				$('.g_wrap_add_link',thisObject).append('<div class="g_clear"></div>');
				$('.g_link_text',thisObject).addClass('hight_input');
				$('.g_link_text',thisObject).val('');
				$('.g_link_text',thisObject).css('color','#000');
				$('.g_link_text',thisObject).focus();
				
				//click add link btn to show link site message
				$('.g_add_link_text_btn',thisObject).click(function(){
					if( $('.g_add_link_text_btn',thisObject).hasClass('g_active_add_btn') ){
						link = {};
						link.url = $('.g_link_text',thisObject).val();
						$('.g_add_link_text_btn',thisObject).css({'border':'none','background':'url(images/ajax-loading.gif) no-repeat center center #fff','text-indent':'-999px'});
						$.post('get-link.php',link,function(data){
							$('.g_add_link_ico',thisObject).remove();
							$('.g_add_link_text',thisObject).remove();
							$('.g_add_link_text_btn',thisObject).remove();
							$('.g_close_add_link_btn',thisObject).after('<div class="g_left g_link_left"><p style="background:url(images/'+data.icon+') no-repeat 0 center;"><a class="g_share_link" href="'+data.link+'">'+data.title+'</a></p><img src="images/'+data.logo+'" alt="" /></div>');
							$('.g_link_left',thisObject).after('<div class="g_left g_link_right">'+data.desctiption+'</div>');
							$('.g_close_add_link_btn',thisObject).css('margin-top',0);
						},'json')
					}
				});
				
			}
		}
		
		//fill some html tags we need
		var enterMessage = function(){
			$('.g_enter_box',thisObject).before('<div class="g_close_enter"></div>');
			$('.g_enter_box',thisObject).empty();
			$('.g_enter_box',thisObject).css({'width':'100%','margin-top':'15px'});
			//$('.g_enter_box',thisObject).append('<textarea name="g_enter_text" class="g_enter_text"></textarea>');
			$('.g_enter_box',thisObject).append('<div contentEditable name="g_enter_text" class="g_enter_text"></div>');
			$('.g_enter_text',thisObject).after('<div class="g_wrap_ajax_persons"><div class="g_close_ajax_person_btn g_right"></div><div class="g_ajax_persons"></div></div>');
			$('.g_bottons_wrap',thisObject).css('margin-top','5px');
			highLightButtons();
			fillSelector();
			//close btn click event
			$('.g_close_enter',thisObject).click(function(){
				$('.g_close_enter',thisObject).remove();
				$('.g_enter_box',thisObject).empty();
				$('.g_enter_box',thisObject).html('Share news here...');
				$('.g_enter_box',thisObject).css({'width':'395px','margin-top':'0px'});
				$('.g_bottons_wrap',thisObject).css('margin-top','0px');
				unHighLightButtons();
				$('.g_wrap_selector',thisObject).remove();
				$('.g_popup_list',thisObject).hide();
				$('.g_wrap_add_link',thisObject).remove();
				$('.g_wrap_photo',thisObject).remove();
				$('.g_wrap_video',thisObject).remove();
				$('.g_wrap_location',thisObject).remove();
				//close person info popup
				$('.g_person_info_popup',thisObject).empty();
				$('.g_person_info_popup',thisObject).hide();
				//close person info popup
				$('.selector_person_popup',thisObject).empty();
				$('.selector_person_popup',thisObject).hide();
				
			});
			//when enter text box keyup event
			$('.g_enter_text',thisObject).keyup(function(event){
			
				if($('.g_wrap_ajax_persons').is(':visible') && (event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 13)){
					var currentPerson = null;
					$('.g_ajax_persons .g_person_list',thisObject).each(function(){
						if($(this).hasClass('eee')){
							currentPerson = $(this);
						}
					});
					switch (event.keyCode){
						
						case 38: //up
							$('.g_ajax_persons .g_person_list',thisObject).removeClass('eee')
							if(currentPerson.prev().size() == 0){
								$('.g_ajax_persons .g_person_list:last',thisObject).addClass('eee')
							}else{
								currentPerson.prev().addClass('eee')
							}
							
							break;
						case 40: //down
							$('.g_ajax_persons .g_person_list',thisObject).removeClass('eee')
							if(currentPerson == null || currentPerson.next().size() == 0){
								$('.g_ajax_persons .g_person_list:first',thisObject).addClass('eee')
							}else{
								currentPerson.next().addClass('eee')
							}
							break;
						case 13:
							currentPerson.click();
							
							break;
					}
					event.preventDefault();
					return false;
				}else{
					//when enter +str send ajax to get data
					if( $('.g_enter_text',thisObject).text().match(/\+\w*$/) != null && $('.g_enter_text',thisObject).text().match(/\+(\w*)$/)[1] != '' ){
						info = {};
						info.search = $('.g_enter_text',thisObject).text().match(/\+(\w*)$/)[1];
						searchPersonWord = info.search;
						if(ajaxsentgetperson != null){
							ajaxsentgetperson.abort();
						}
						ajaxsentgetperson = $.post('get-persons.php',info,function(data){
							$('.g_ajax_persons',thisObject).empty();
							appendPersons = '';
							for(i=0;i<data.length;i++){
								//get append data 
								appendPersons += '<div class="g_person_list" name="'+data[i].name+'" groupico="'+data[i].groupicon+'" id="person_'+data[i].id+'">';
									appendPersons += '<div class="g_person_avatar g_left"><img src="images/'+data[i].avatar+'" alt="'+data[i].name+'" /></div>';
									appendPersons += '<div class="g_person_meta g_left">';
										appendPersons += '<p class="g_person_name">'+data[i].name+'</p>';
										appendPersons += '<div class="g_persson_group_meta" style="background:url(images/'+data[i].groupicon+') no-repeat 0 center;">';
											appendPersons += data[i].group;
										appendPersons += '</div>';
									appendPersons += '</div>';
									appendPersons += '<div class="g_clear"></div>';
								appendPersons += '</div>';
							}
							//append person list we get 
							$('.g_ajax_persons',thisObject).append(appendPersons);
							$('.g_wrap_ajax_persons',thisObject).slideDown();

							//ajax person list click event
							$('.g_person_list',thisObject).click(function(){
								var person_id = this.id.replace('person_','');
								personAppend = '';
								personAppend += '<div class="g_person_tab_list receiver_person_'+person_id+'" contenteditable="false" id="receiver_person_'+person_id+'">';
									personAppend += '<div contenteditable="false" style="background:url(images/'+$(this).attr('groupico')+') no-repeat 0px center;" class="g_person_tab_icon g_left"></div>';
									personAppend += '<div contenteditable="false" class="g_person_tab_name g_left">'+$(this).attr('name')+'</div>';
									personAppend += '<div contenteditable="false" class="g_person_close_tab g_right"></div>';
									personAppend += '<div contenteditable="false" class="g_clear"></div>';
								personAppend += '</div>';
								
								//when current list click then remove
								$(this).remove();
								//when all ajax person removed close ajax show area
								if( $('.g_person_list',thisObject).size() == 0 ){
									$('.g_close_ajax_person_btn',thisObject).click();
								}
								//replace string like +str when we select 
								//console.log($('.g_enter_text',thisObject).html());
								$('.g_enter_text',thisObject).html( $('.g_enter_text',thisObject).html().replace('+'+searchPersonWord,'') );
								$('.g_enter_text',thisObject).html( $('.g_enter_text',thisObject).html().replace(/\r/,'') );
								$('.g_enter_text',thisObject).html( $('.g_enter_text',thisObject).html().replace(/\<br\>/g,'') );
								$('.g_enter_text',thisObject).html( $('.g_enter_text',thisObject).html().replace(/\<p\>/g,'') );
								$('.g_enter_text',thisObject).html( $('.g_enter_text',thisObject).html().replace(/\<\/p\>/g,'') );
								$('.g_enter_text',thisObject).html( $('.g_enter_text',thisObject).html().replace(/\<p\>\<\/p\>/g,'') );
								$('.g_enter_text',thisObject).html( $('.g_enter_text',thisObject).html().replace(/\<p\>\&nbsp\;\<\/p\>/g,'') );
								$('.g_enter_text',thisObject).html( $('.g_enter_text',thisObject).html().replace(/\<div\>\<\/div\>/g,'') );
								
								//append on text box
								$('.g_enter_text',thisObject).append(personAppend);
								if($.browser.webkit)
									$('.g_enter_text',thisObject).append('<input contenteditable="false" type="text" class="tempedit" style="border:solid 1px white;width:10px;"/>');
								//append on receiver list
								if($('.g_wrap_groups div.g_person_tab_list#receiver_person_'+person_id,thisObject).size() == 0)
									$('.g_wrap_groups',thisObject).append(personAppend);
								//when select one person close show person list area
								$('.g_close_ajax_person_btn',thisObject).click();
								
								if($.browser.webkit){
									$('.tempedit',thisObject).keydown(function(){
										$(this).remove();
									})
									$('.tempedit',thisObject).focus();
								}else{
									$('.g_enter_text',thisObject).focus();
								}
								//close btn event
								$('.g_person_close_tab',thisObject).click(function(){
									//close person info popup
									$('.g_person_info_popup',thisObject).empty();
									$('.g_person_info_popup',thisObject).hide();
									//close person info popup
									$('.selector_person_popup',thisObject).empty();
									$('.selector_person_popup',thisObject).hide();
									
									$(this).parent().parent().attr('contenteditable',true);
									$(this).parent().remove();
									//$('.g_person_detail_close_popup',thisObject).click();
									//$('.g_person_detail_close_popup1',thisObject).click();
								});
								//person tab mouseover show person popup event
								$('.g_wrap_box .g_person_tab_list',thisObject).mouseover(function(){
									currentObject = $(this);
									currentObject.parent().attr('contenteditable',false);
									person = {};
									person.id = $(this).attr('id').replace('receiver_person_','');
									if(ajaxsentgetpersoninfo != null){
										ajaxsentgetpersoninfo.abort();
									}
									ajaxsentgetpersoninfo = $.post('get-person-details.php',person,function(data){
										$('.g_person_info_popup',thisObject).empty();
										$('.selector_person_popup',thisObject).empty();
										$('.selector_person_popup',thisObject).hide();
										//$('.g_person_info_popup',thisObject).append('<div class="g_person_detail_close_popup"></div>');
										$('.g_person_info_popup',thisObject).append('<div class="g_person_popup_avatar g_left"><img src="images/avatar.jpg"/></div>');
										$('.g_person_info_popup',thisObject).append('<div class="g_person_detail_popup g_left"><p class="g_person_name_popup">'+data.name+'</p></div>');
										$('.g_person_info_popup .g_person_detail_popup',thisObject).append('<div style="background:url(images/'+data.groupicon+') no-repeat 3px center #3D9300;" class="g_person_group_popup">'+data.group+'</div>');
										$('.g_person_info_popup',thisObject).append('<div class="g_clear"></div>');
										//$('.g_person_info_popup',thisObject).css({'top':$('#receiver_person_'+person.id,thisObject).position().top+60});
										$('.g_person_info_popup',thisObject).css({'top':$(currentObject).position().top+65});
										//$('.g_person_info_popup',thisObject).css({'left':$('#receiver_person_'+person.id,thisObject).position().left+15});
										$('.g_person_info_popup',thisObject).css({'left':$(currentObject).position().left+15});
										$('.g_person_info_popup',thisObject).show();
										
										$('.g_person_detail_close_popup',thisObject).click(function(){
											$('.selector_person_popup',thisObject).empty();
											$('.selector_person_popup',thisObject).hide();
											$('.g_person_info_popup',thisObject).empty();
											$('.g_person_info_popup',thisObject).hide();
										});
								
									},'json');
								});
								//person tab mouseout close person popup event
								$('.g_wrap_box .g_person_tab_list',thisObject).mouseout(function(){
									currentObject.parent().attr('contenteditable',true);
									if(ajaxsentgetpersoninfo != null){
										ajaxsentgetpersoninfo.abort();
									}
									$('.g_person_info_popup',thisObject).empty();
									$('.g_person_info_popup',thisObject).hide();
								});
								//person tab mouseover show person popup event
								$('.g_wrap_groups .g_person_tab_list',thisObject).mouseover(function(){
									person = {};
									person.id = $(this).attr('id').replace('receiver_person_','');
									if(ajaxsentgetpersoninfo != null){
										ajaxsentgetpersoninfo.abort();
									}
									ajaxsentgetpersoninfo = $.post('get-person-details.php',person,function(data){
										$('.selector_person_popup',thisObject).empty();
										$('.g_person_info_popup',thisObject).empty();
										$('.g_person_info_popup',thisObject).hide();
										//$('.selector_person_popup',thisObject).append('<div class="g_person_detail_close_popup1"></div>');
										$('.selector_person_popup',thisObject).append('<div class="g_person_popup_avatar g_left"><img src="images/avatar.jpg"/></div>');
										$('.selector_person_popup',thisObject).append('<div class="g_person_detail_popup g_left"><p class="g_person_name_popup">'+data.name+'</p></div>');
										$('.selector_person_popup .g_person_detail_popup',thisObject).append('<div style="background:url(images/'+data.groupicon+') no-repeat 3px center #3D9300;" class="g_person_group_popup">'+data.group+'</div>');
										$('.selector_person_popup',thisObject).append('<div class="g_clear"></div>');
										//$('.selector_person_popup',thisObject).css({'top':$('.g_wrap_groups',thisObject).position().top+$('.g_wrap_groups',thisObject).height()});
										$('.selector_person_popup',thisObject).css({'top':$('.g_wrap_groups .receiver_person_'+person.id,thisObject).position().top+55});
										//$('.selector_person_popup',thisObject).css({'left':$('.g_wrap_groups',thisObject).position().left+5});
										$('.selector_person_popup',thisObject).css({'left':$('.g_wrap_groups .receiver_person_'+person.id,thisObject).position().left+15});
										$('.selector_person_popup',thisObject).show();
										
										$('.g_person_detail_close_popup1',thisObject).click(function(){
											$('.g_person_info_popup',thisObject).empty();
											$('.g_person_info_popup',thisObject).hide();
											$('.selector_person_popup',thisObject).empty();
											$('.selector_person_popup',thisObject).hide();
										});
								
									},'json');
								});
								//person tab mouseout close person popup event
								$('.g_wrap_groups .g_person_tab_list',thisObject).mouseout(function(){
									if(ajaxsentgetpersoninfo != null){
										ajaxsentgetpersoninfo.abort();
									}
									$('.selector_person_popup',thisObject).empty();
									$('.selector_person_popup',thisObject).hide();
								});
								

							});
							
						},'json');
					
					}else{
						$('.g_close_ajax_person_btn',thisObject).click();
					}
					//active/inactive share btn when enter box enter some text
					if( $('.g_enter_text',thisObject).text().trim() == ''  ){
						$('.g_share_btn a',thisObject).removeClass('g_active_share_btn');
					}else{
						$('.g_share_btn a',thisObject).addClass('g_active_share_btn');
					}
					
					if( $('.g_person_info_popup',thisObject).size() >0 ){
						$('.g_person_detail_close_popup',thisObject).click();
					}
				}
				
				
			});
			//close btn event
			$('.g_close_ajax_person_btn',thisObject).click(function(){
				$('.g_ajax_persons',thisObject).empty();
				$('.g_wrap_ajax_persons',thisObject).slideUp();
			});
		
		}
		//hight light btn behind enter box function
		var highLightButtons = function(){
			$('.g_add_photo',thisObject).css('background-position','-33px -16px');
			$('.g_add_video',thisObject).css('background-position','-17px -103px');
			$('.g_add_link',thisObject).css('background-position','0px -16px');
			$('.g_your_location',thisObject).css('background-position','0px -31px');
		}
		//when fill selector functuion
		var fillSelector = function(){
			//append some html tags
			$('.g_wrap',thisObject).after('<div class="g_wrap_selector"></div>');
			$('.g_wrap_selector',thisObject).append('<div class="selector_input"></div> ');
			
			$('.g_wrap_selector .selector_input',thisObject).append('<div class="g_selector_box g_left"></div>');
			$('.g_wrap_selector .selector_input',thisObject).append('<div class="g_wrap_groups"></div>');
			$('.g_wrap_selector .selector_input .g_wrap_groups',thisObject).after('<div class="g_clear"></div>');
			$('.g_wrap_selector .selector_input',thisObject).append('<div class="g_ajax_selector_btn g_left"><span class="g_plus_icon"></span><span>Add share object (circle or personal)...</span></div>');
			$('.g_wrap_selector .selector_input',thisObject).append('<input type="text" name="g_selector_text" class="g_selector_text g_left" value=""/>');
			$('.g_wrap_selector .selector_input',thisObject).append('<div class="g_selector_options g_right"></div>');
			
			$('.g_wrap_groups',thisObject).after('<div class="selector_person_popup"></div>');
			
			$('.g_wrap_selector .selector_input .g_selector_options',thisObject).after('<div class="g_wrap_selector_options"><ul></ul></div>');
			$('.g_wrap_selector_options ul',thisObject).append('<li class="g_selector_option g_forbit_comment_btn">Forbit Comment</li>');
			$('.g_wrap_selector_options ul',thisObject).append('<li class="g_selector_option g_lock_messahe">Lock This Message</li>');
			
			$('.g_wrap_selector .selector_input',thisObject).append('<div class="g_clear"></div>');
			
			$('.g_wrap_selector',thisObject).append('<div class="g_share_btn"><a class="sendShare" href="javascript:void(0);">Share</a></div>');
			
			$('.selector_input',thisObject).append('<div class="g_wrap_share_objects"><div class="g_close_object_btn g_right"></div><ul></ul></div>');
			$('.selector_input',thisObject).append('<div class="g_wrap_share_persons"><div class="g_close_person_btn g_right"></div><div class="g_wrap_search_persons"></div></div>');
			
			$('.sendShare',thisObject).click(function(){
				if( $('.sendShare',thisObject).hasClass('g_active_share_btn') ){
					shareInfo = {
						photos:[],
						videos:[],
						receiver:[]
					};
					//get message
					
					
					a = $('<div>'+$('.g_enter_text',thisObject).html()+'</div>')
					a.find('.g_person_tab_list').each(function(i,x){p_id = x.id.replace('receiver_person_','');$(x).replaceWith('<user id='+p_id+'>'+$(x).text()+'</user>')})
					a.find('input').remove();
					shareInfo.message = a.html();
					//get photos
					$('.g_wrap_photo>div>img',thisObject).each(function(i,x){
						shareInfo.photos.push(x.id.replace('g_receiver_photo_',''));
					});
					//get videos
					$('.g_wrap_video>div>p>img',thisObject).each(function(i,x){
						shareInfo.videos.push(x.id.replace('g_receiver_video_',''));
					});
					//get link
					if( $('.g_share_link',thisObject).size() > 0 ){
						shareInfo.link = $('.g_share_link',thisObject).attr('href');
					}else{
						shareInfo.link = '';
					}
					//get location 
					shareInfo.location = {
						longitude:$('.g_location_info',thisObject).attr('longitude'),
						latitude:$('.g_location_info',thisObject).attr('latitude')
					}
					//get receiver
					$('.g_wrap_groups>div',thisObject).each(function(i,x){
						if( $(x).hasClass('g_group_tab_list') ){
							shareInfo.receiver.push({id:x.id.replace('receiver_group_',''),type:'group'});
						}else if( $(x).hasClass('g_person_tab_list') ){
							shareInfo.receiver.push({id:x.id.replace('receiver_person_',''),type:'person'});
						}
					});
					console.log(shareInfo);
				}
			});
			
			//click arrow event
			$('.g_selector_options',thisObject).click(function(){
				$('.g_close_object_btn',thisObject).click();
				$('.g_wrap_selector_options',thisObject).css({'top':$('.g_selector_options',thisObject).position().top+22});
				$('.g_wrap_selector_options',thisObject).toggle();
			});
			//ajax get person list when selector text box entered
			$('.g_selector_text',thisObject).keyup(function(event){
			
				if($('.g_wrap_share_persons').is(':visible') && (event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 13)){
					var currentPerson1 = null;
					$('.g_wrap_search_persons .g_search_person_list',thisObject).each(function(){
						if($(this).hasClass('eee')){
							currentPerson1 = $(this);
						}
					});
					switch (event.keyCode){
						case 38: //up
							$('.g_wrap_search_persons .g_search_person_list',thisObject).removeClass('eee')
							if(currentPerson1.prev().size() == 0){
								$('.g_wrap_search_persons .g_search_person_list:last',thisObject).addClass('eee')
							}else{
								currentPerson1.prev().addClass('eee')
							}
							break;
						case 40: //down
							$('.g_wrap_search_persons .g_search_person_list',thisObject).removeClass('eee')
							if(currentPerson1 == null || currentPerson1.next().size() == 0){
								$('.g_wrap_search_persons .g_search_person_list:first',thisObject).addClass('eee')
							}else{
								currentPerson1.next().addClass('eee')
							}
							break;
						case 13:
							currentPerson1.click();
							break;
					}
					event.preventDefault();
					return false;	
				}else if( event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 ){
					var currentPerson2 = null;
					$('.g_wrap_share_objects>ul>li',thisObject).each(function(){
						if($(this).hasClass('eee')){
							currentPerson2 = $(this);
						}
					});
					switch (event.keyCode){
						case 38: //up
							$('.g_wrap_share_objects>ul>li',thisObject).removeClass('eee')
							if(currentPerson2.prev().size() == 0){
								$('.g_wrap_share_objects>ul>li:last',thisObject).addClass('eee')
							}else{
								currentPerson2.prev().addClass('eee')
							}
							
							break;
						case 40: //down
							$('.g_wrap_share_objects>ul>li',thisObject).removeClass('eee')
							if(currentPerson2 == null || currentPerson2.next().size() == 0){
								$('.g_wrap_share_objects>ul>li:first',thisObject).addClass('eee')
							}else{
								currentPerson2.next().addClass('eee')
							}
							break;
						case 13:	
							currentPerson2.click();
							break;
					}
					//event.preventDefault();
					return false;
				}else{
					info = {};
					info.search = $('.g_selector_text',thisObject).val();
					
					if(ajaxsentsearchperson != null){
						ajaxsentsearchperson.abort();
					}
					ajaxsentsearchperson = $.post('get-persons.php',info,function(data){
						
						$('.g_wrap_search_persons',thisObject).empty();
						appendSearchPersons = '';
						for(i=0;i<data.length;i++){
							if( $('.g_search_person_tab_name',thisObject).text().indexOf(data[i].name) < 0 ){
								appendSearchPersons += '<div id="person_'+data[i].id+'"class="g_search_person_list" name="'+data[i].name+'" groupico="'+data[i].groupicon+'">';
									appendSearchPersons += '<div class="g_search_person_avatar g_left"><img src="images/'+data[i].avatar+'" alt="'+data[i].name+'" /></div>';
									appendSearchPersons += '<div class="g_search_person_meta g_left">';
										appendSearchPersons += '<p class="g_search_person_name">'+data[i].name+'</p>';
										appendSearchPersons += '<div class="g_search_persson_group_meta" style="background:url(images/'+data[i].groupicon+') no-repeat 0 center;">';
											appendSearchPersons += data[i].group;
										appendSearchPersons += '</div>';
									appendSearchPersons += '</div>';
									appendSearchPersons += '<div class="g_clear"></div>';
								appendSearchPersons += '</div>';
							}
						}
						//if selector text is delete then close
						if( $('.g_selector_text',thisObject).val() == '' ){
							$('.g_close_person_btn',thisObject).click();
						}else{
							//append persons info and position show area
							$('.g_wrap_search_persons',thisObject).append(appendSearchPersons);
							$('.g_wrap_share_persons',thisObject).css({'top':$('.g_selector_options',thisObject).position().top+33});
							$('.g_wrap_share_objects',thisObject).hide();
							$('.g_wrap_share_persons',thisObject).slideDown();
						}
						//ajax person list click event
						$('.g_search_person_list',thisObject).click(function(){
							var person_id = this.id.replace('person_','');
							personAppend = '';
							personAppend += '<div class="g_person_tab_list receiver_person_'+person_id+'"  id="receiver_person_'+person_id+'">';
								personAppend += '<div style="background:url(images/'+$(this).attr('groupico')+') no-repeat 0px center;" class="g_person_tab_icon g_left"></div>';
								personAppend += '<div class="g_search_person_tab_name g_left">'+$(this).attr('name')+'</div>';
								personAppend += '<div class="g_search_person_close_tab g_right"></div>';
								personAppend += '<div class="g_clear"></div>';
							personAppend += '</div>';
							//remove current clicked person info
							$(this).remove();
							$('.g_close_person_btn',thisObject).click();
							//append to selector area
                            if($('.g_wrap_groups #receiver_person_'+person_id,thisObject).size() == 0)
                                $('.g_wrap_groups',thisObject).append(personAppend);
							//close btn event
							$('.g_search_person_close_tab',thisObject).click(function(){
								//close person info popup
								$('.g_person_info_popup',thisObject).empty();
								$('.g_person_info_popup',thisObject).hide();
								//close person info popup
								$('.selector_person_popup',thisObject).empty();
								$('.selector_person_popup',thisObject).hide();
								$(this).parent().remove();
							});
							
							$('.g_wrap_groups .g_person_tab_list',thisObject).mouseover(function(){
								person = {};
								person.id = $(this).attr('id').replace('receiver_person_','');
								person.id = person.id.replace('selector_','');

								if(ajaxsentgetpersoninfo1 != null){
									ajaxsentgetpersoninfo1.abort();
								}
								ajaxsentgetpersoninfo1 = $.post('get-person-details.php',person,function(data){
									$('.selector_person_popup',thisObject).empty();
									$('.g_person_info_popup',thisObject).empty();
									$('.g_person_info_popup',thisObject).hide();
									//$('.selector_person_popup',thisObject).append('<div class="g_person_detail_close_popup1"></div>');
									$('.selector_person_popup',thisObject).append('<div class="g_person_popup_avatar g_left"><img src="images/avatar.jpg"/></div>');
									$('.selector_person_popup',thisObject).append('<div class="g_person_detail_popup g_left"><p class="g_person_name_popup">'+data.name+'</p></div>');
									$('.selector_person_popup .g_person_detail_popup',thisObject).append('<div style="background:url(images/'+data.groupicon+') no-repeat 3px center #3D9300;" class="g_person_group_popup">'+data.group+'</div>');
									$('.selector_person_popup',thisObject).append('<div class="g_clear"></div>');
									//$('.selector_person_popup',thisObject).css({'top':$('.g_wrap_groups',thisObject).position().top+$('.g_wrap_groups',thisObject).height()});
									$('.selector_person_popup',thisObject).css({'top':$('.g_wrap_groups .receiver_person_'+person.id,thisObject).position().top+55});
									//$('.selector_person_popup',thisObject).css({'left':$('.g_wrap_groups',thisObject).position().left+5});
									$('.selector_person_popup',thisObject).css({'left':$('.g_wrap_groups .receiver_person_'+person.id,thisObject).position().left+15});
									//$('.selector_person_popup',thisObject).css({'left':$(this).position().left+15});
									
									$('.selector_person_popup',thisObject).show();
									
									$('.g_person_detail_close_popup1',thisObject).click(function(){
										$('.g_person_info_popup',thisObject).empty();
										$('.g_person_info_popup',thisObject).hide();
										$('.selector_person_popup',thisObject).empty();
										$('.selector_person_popup',thisObject).hide();
									});
							
								},'json');	
							});
							$('.g_wrap_groups .g_person_tab_list',thisObject).mouseout(function(){
								if(ajaxsentgetpersoninfo1 != null){
									ajaxsentgetpersoninfo1.abort();
								}
								$('.selector_person_popup',thisObject).empty();
								$('.selector_person_popup',thisObject).hide();
							});
						});	
					},'json');	
				}
			});
			
			//close btn event
			$('.g_close_person_btn',thisObject).click(function(){
				$('.g_wrap_search_persons',thisObject).empty();
				$('.g_wrap_share_persons').slideUp();
				
				$('.g_wrap_share_objects ul').empty();
				$('.g_wrap_share_objects',thisObject).hide();
				$('.g_ajax_selector_btn',thisObject).show();
				$('.g_selector_text',thisObject).hide();
				
			});
			
			$('.g_ajax_selector_btn',thisObject).click(function(){
				var info = {groups:[]};
                $('.g_wrap_groups>div.g_group_tab_list',thisObject).each(function(i,x){
                    info.groups.push(x.id.replace('receiver_group_',''))
                })
				if(ajaxsentgetgroup != null){
					ajaxsentgetgroup.abort();
				}
				ajaxsentgetgroup = $.post('get-groups.php',info,function(data){
                    
                    //here we build the group list
                    appendObjects = '';
                    for(i=0;i<data.length;i++){
                        if( $('.g_wrap_groups #receiver_group_'+data[i].id,thisObject).size() == 0 ){
                            appendObjects += '<li name="'+data[i].name+'" icon="'+data[i].icon+'" style="background:url(images/'+data[i].icon+') no-repeat 10px center;" id="group_'+data[i].id+'">'+data[i].name+' ('+data[i].sum+')</li>';
                        }
                    }
                    $('.g_wrap_share_objects ul',thisObject).empty().append(appendObjects);
                    $('.g_wrap_share_objects',thisObject).css({'top':$('.g_selector_options',thisObject).position().top+33});
                    $('.g_ajax_selector_btn',thisObject).hide();
                    $('.g_selector_text',thisObject).val('');
                    $('.g_selector_text',thisObject).show();
                    $('.g_selector_text',thisObject).focus();
                    $('.g_wrap_share_objects',thisObject).slideDown();
                    
					//define the group list item event
					$('.g_wrap_share_objects ul li',thisObject).click(function(){
                    
                        var group_id = $(this).attr('id').replace('group_','');
						groupTab = '';
						groupTab += '<div class="g_group_tab_list g_left" id="receiver_group_'+group_id+'">';
						groupTab += '<div class="g_group_tab_icon g_left" style="background:url(images/'+$(this).attr('icon')+') no-repeat 0 center;"></div>';
						groupTab += '<div class="g_group_tab_name g_left">'+$(this).attr('name')+'</div>';
						groupTab += '<div class="g_group_close_tab g_right"></div>';
						groupTab += '<div class="g_clear"></div>';
						groupTab += '</div>';
                        
                        //remove current item and move list up
						$(this).remove();
						$('.g_wrap_share_objects',thisObject).css({'top':$('.g_selector_options',thisObject).position().top+33});
                        
                        //add receiver group
                        if($('.g_wrap_groups div.g_group_tab_list#receiver_group_'+group_id,thisObject).size() == 0)
                            $('.g_wrap_groups',thisObject).append(groupTab);
						$('.g_selector_text',thisObject).focus();
						
                        //close the group auto complete list
                        //$('.g_close_object_btn',thisObject).click();
                        
                        //close btn event
                        $('.g_group_close_tab',thisObject).click(function(){
							$(this).parent().remove();
						});
						
						$('.g_person_detail_close_popup',thisObject).click();
						$('.g_person_detail_close_popup1',thisObject).click();

					});
					
				},'json');	
			});
			 //close btn event
			$('.g_close_object_btn',thisObject).click(function(){
				$('.g_wrap_share_objects ul',thisObject).empty();
				$('.g_wrap_share_objects',thisObject).slideUp();
				$('.g_ajax_selector_btn',thisObject).show();
				$('.g_selector_text',thisObject).hide();
				
			});
		}
		//change btns(behind enter box) background
		var unHighLightButtons = function(){
			$('.g_add_photo',thisObject).css('background-position','0px 0px');
			$('.g_add_video',thisObject).css('background-position','-18px 0px');
			$('.g_add_link',thisObject).css('background-position','-34px -86px');
			$('.g_your_location',thisObject).css('background-position','-43px -31px');
		}
		//close btn event
		$('.g_close_photo_btn',thisObject).click(function(){
			alert('aaaa');
		});
		
		return this;
	};
    
    $.closeMe = function(e){
        if($(e).parent().parent().children().size() == 1){
			$(e).parent().parent().remove();
		}else{
			$(e).parent().remove();
		}
    }
	
})(jQuery);