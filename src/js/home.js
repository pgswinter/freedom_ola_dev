$(document).ready(function() {
	
	var item = $('.fw_post_area__fw_home_center .fw_article_post__fw_post_area');
	item.each(function(){
		var me = $(this);

		// Set height comment based on height of IMG
		var getIMGHeight = me.find('.img_wrap__fw_content img').height();
		var commentWrapper = me.find('.fw_comment_right__fw_article_post');
		commentWrapper.height(getIMGHeight-30);
		var heigthOfCommentWrapper = commentWrapper.height()
		var commentItem = commentWrapper.find(".comment__fw_comment_right");
		commentItem.height(heigthOfCommentWrapper-200)

		// Display comment
		var displayButton = commentWrapper.find('.fw_display_comment')
		displayButton.click(function(){
			commentWrapper.toggleClass('active')
		})
	})
});