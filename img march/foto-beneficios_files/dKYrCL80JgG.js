;/*FB_PKG_DELIM*/

__d("PolarisLocationSelectors",[],(function(a,b,c,d,e,f){"use strict";function a(a){return function(b){return(b=b.locations[a])!=null?b:null}}f.getLocation=a}),66);
__d("PolarisLoginPageHelpers",["PolarisLinkBuilder","PolarisLocationSelectors","PolarisReactRedux","nullthrows","polarisUserSelectors"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return d("PolarisReactRedux").useSelector(function(b){return h(b,a)})}function h(a,b){var e={contentLink:"",displayPicUrl:"",displayName:"",type:"user"};if(b.initializing===!0)return e;if(b.locationId!=null){var f=c("nullthrows")(b.locationId),g=c("nullthrows")(d("PolarisLocationSelectors").getLocation(f)(a));e={contentLink:d("PolarisLinkBuilder").buildLocationLink({id:f}),displayPicUrl:c("nullthrows")(g.profilePictureUrl),displayName:c("nullthrows")(g.name),type:"location"}}else if(b.tagName!=null){f=c("nullthrows")(b.tagName);g=c("nullthrows")(a.tags.get(f));e={contentLink:d("PolarisLinkBuilder").buildTagLink(f),displayPicUrl:c("nullthrows")(g.profilePictureUrl),displayName:f,type:"tag"}}else if(b.highlightReelId!=null){g=c("nullthrows")(b.username);f=d("polarisUserSelectors").getUserByUsername(a,g);e={contentLink:d("PolarisLinkBuilder").buildUserLink(g),displayPicUrl:c("nullthrows")(f.profilePictureUrl),displayName:c("nullthrows")(b.highlightReelTitle)+" (@"+g+")",type:"highlight"}}else{f=c("nullthrows")(b.username);g=d("polarisUserSelectors").getUserByUsername(a,f);e={contentLink:d("PolarisLinkBuilder").buildUserLink(f),displayPicUrl:c("nullthrows")(g.profilePictureUrl),displayName:c("nullthrows")(g.username),type:"user"}}return e}g.useCommonMapStateToProps=a}),98);
__d("PolarisStoriesMediaRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisStoriesMediaRoot.react").__setRef("PolarisStoriesMediaRoot.entrypoint")};g["default"]=a}),98);