$(document).ready(function() {
		
	// Article
	var item = $('.fw_post_area__fw_home_center .fw_article_post__fw_post_area');
	item.each(function(){
		var me = $(this);

		// Set height comment based on height of IMG
		var getIMGHeight = me.find('.img_wrap__fw_content img').height();
		var commentWrapper = me.find('.fw_comment_right__fw_article_post');
		commentWrapper.height(getIMGHeight);
		var heigthOfCommentWrapper = commentWrapper.height()
		var commentItem = commentWrapper.find(".comment__fw_comment_right");
		commentItem.height(heigthOfCommentWrapper-200)

		// Display comment button
		var displayButton = commentWrapper.find('.fw_display_comment')
		displayButton.click(function(){
			commentWrapper.toggleClass('active');
		})
	})

	// Switch Button
	var switchButton = $('.fw_switch');
	switchButton.click(function(){
		$(this).toggleClass('active');
	})

	// Notification
	var notification = $('.fw_notification__fw_home_left');
	var listItem = notification.find('.list_item__fw_notification ul.parent__list_item');
	listItem.find('> li').each(function(){
		$(this).click(function(e){
			e.preventDefault();
			$(this).toggleClass('active');
		})
	})
});