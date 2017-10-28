$(document).ready(function() {
	
	// Library
	var defaults = {
		selector: null
	}
	$.fn.clickOutside = function(options){

		var settings = $.extend({},defaults,options);

		$(this).click(function(e){
			e.preventDefault()
			var me = $(this)
			settings.selector.stop().toggleClass('active');
			$(document).one('click',function closeIt(e){
				if(settings.selector.has(e.target).length === 0){
		            settings.selector.removeClass('active');
		        } else {
		            $(document).one('click', closeIt);
		        }
		    })
		})
	}

	// Article
	var item = $('.fw_post_area__fw_home_center .fw_article_post__fw_post_area');
	item.each(function(){
		var me = $(this);

		// Set height comment based on height of IMG
		var getIMGHeight = me.find('.img_wrap__fw_content img').height();
		var commentWrapper = me.find('.fw_comment_right__fw_article_post');
		commentWrapper.height(getIMGHeight-30);
		var heigthOfCommentWrapper = commentWrapper.height()
		var commentItem = commentWrapper.find(".comment__fw_comment_right");
		commentItem.height(heigthOfCommentWrapper-300)

		// Display comment button
		var displayButton = commentWrapper.find('.fw_display_comment')
		displayButton.clickOutside({
			selector: commentWrapper
		})
	})

	// Switch Button
	var switchButton = $('.fw_switch');
	switchButton.click(function(){
		$(this).toggleClass('active');
	})

	// Notification
	var notification = $('.fw_notification__fw_header');
	var listItem = notification.find('.list_item__fw_notification ul.parent__list_item');
	listItem.find('> li').each(function(){
		$(this).clickOutside({
			selector: $(this)
		})
	})

	// Filter
	var filterButton = $('.right_site__fw_filter_article .label_wrap__right_site');
	filterButton.clickOutside({
		selector: $('.right_site__fw_filter_article')
	})
});