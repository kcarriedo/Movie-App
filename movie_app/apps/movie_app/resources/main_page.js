// ==========================================================================
// Project:   MovieApp - mainPage
// Authorkey: Kyle Carriedo 
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals MovieApp */

// This page describes the main user interface for your application.  
MovieApp.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'mainView'.w(),

	mainView: SC.View.design({
		childViews: [
			
			SC.ToolbarView.design({
				classNames: ["main_page"],
		    	layout: { top: 0, left: 0, right: 0, height: 36 },
		    	childViews: 'labelView'.w(),
		    	anchorLocation: SC.ANCHOR_TOP,
			
			labelView: SC.LabelView.design({
			    layout: { centerY: 0, height: 24, left: 8, width: 200 },
			    controlSize: SC.LARGE_CONTROL_SIZE,
			    fontWeight: SC.BOLD_WEIGHT,
			    value:   'Movie App !'
				})
		
			}),
		 	
			SC.LabelView.design({
		  		classNames: ["ref"],
	      		layout: { centerX: 0, centerY: 50, width: 300, height: 300 },
	      		escapeHTML: NO,
	      		value:"<video src=http://mirror.cessen.com/blender.org/peach/trailer/trailer_iphone.m4v width=300 height=150 autoplay controls></video>"
				}),
	
			//Used from the Sproutcore Samples.
			SC.LabelView.design({
	      		tag: 'a',
	      		classNames: 'credits',
	      		value: '(c) copyright Blender Foundation | www.bigbuckbunny.org',
	      		textAlign: SC.ALIGN_RIGHT,
	      		layout: { bottom: 0, right: 0, width: 500, height: 20 }
	    		})
			]
	  })
   })
});
