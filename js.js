jQuery(window).scroll(function (event) {
  var y = jQuery(this).scrollTop(); //set position from top in pixels
  if (y > 300) {
	jQuery('#main-header').css({'height' : '95px', 'background' : 'black'});
	jQuery('#logo').css('height','56px');
	jQuery('.logo_container').css('top', '-8px');
	jQuery('#et-secondary-menu').css('top','42px');
	  jQuery('.mega-menu-wrap').css({'top' : '-78px', 'left' : '23%'});
  } else {
	jQuery('#main-header').css({'height' : '162px', 'background' : 'linear-gradient(180deg, rgba(0, 0, 0) 70%, rgba(53,53,53, 0.5) 30%)'});
	jQuery('#logo').css('height', '100%');
	jQuery('.logo_container').css('top', '10px');
	  jQuery('.mega-menu-wrap').css({'top' : '10px', 'left' : '0'});
  }
});

fc
<div id="custom_fc_button" style="visibility:hidden;">
<a id="open_fc_widget" onclick="openWidget()" style="cursor:pointer;"><span class="chatButton" style="background: #727272; padding: 3% 16%; color: white; font-family:'Raleway'; letter-spacing: 2px; font-size: smaller"> CHAT <img class="chatIcon" style="width: 9%; height: 16px; margin-bottom: -2px" src="https://whomhome.wpengine.com/wp-content/uploads/2019/02/chat_icon-copy-min.png" alt="chat"></span></a>
</div>


<script src="https://wchat.freshchat.com/js/widget.js" async></script>

<script>
  window.fcSettings = {
    token: "2f9a81ff-3951-482e-bbaa-16b700792d84",
    host: "https://wchat.freshchat.com",
	config: {
	  headerProperty: { 
		hideChatButton: true,
	  	backgroundColor: '#727272',
	  },
      content: {
        headers: {
          chat_help: 'Reach out to us if you have any questions',
        }
      }
    },
    onInit: function() {
      window.fcWidget.on("widget:loaded",function() {
        document.getElementById('custom_fc_button').style.visibility = 'visible';
        window.fcWidget.on("unreadCount:notify", function(resp) {
          console.log(resp);
          test = resp;
        });
        window.fcWidget.on("widget:closed", function() {
          document.getElementById('fc_frame').style.visibility = 'hidden';
          document.getElementById('open_fc_widget').style.visibility = 'visible';
        });
        window.fcWidget.on("widget:opened", function(resp) {
          document.getElementById('open_fc_widget').style.visibility = 'hidden';
        });
      });
    },
  };

</script>