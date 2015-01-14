# Change Log

All classes that I add will be namespaced with the string
`--v1`

Grepping the html of a page should reveal where these classes (or elements) were added

### TODOs


+ flash messages associated with errors on lesson page?
+ concatenation of files for production
+ add states of current lesson to needed divs
+ add action types to links in index page table

### Global

+ added glyphs from [ionicon framework](http://ionicons.com/) to header stylesheets
+ added the Lato font from [Google Fonts](http://fonts.googleapis.com/css?family=Lato)
+ removed share.js (social drawer creator)
+ remove .copyright from logo container
+ add img.logo--v1 to logo in footer
+ remove <br> tags from lesson page (their formatting will override CSS)

## BUGLIST

+ session 29 input fields won't let you edit them
+ audio says 8500 PSI, flash says 8700 psi

### [lesson page](http://ondreian.github.io/lesson.html)

+ add body.lesson--v1
+ replace br tags with div wrappers
+ add variable-containers to wrap inputs and titles in the states containers
+ covert errors HTML to a UL and class toggleable states
+ removed .btn-large class from forward button
+ add .actions class from bootstrap around input buttons on lessons
+ add .right-column--v1 and .left-column--v1 to the .span6 that wrap the lesson content and the "current problems" areas
+ add .left-column-content--v1 for padding in the .left-column--v1
+ remove < and > from buttons
+ instead of the gif that's being loaded (info, summary, question) use ionicon tags for consistent theme (examples are in all HTML)
+ convert questions to use OL tag (instead of <br> tags) so it can be formatted
+ add left-column header HTML (h6 tag) with ionicon
+ use .flash--v1 HTML structure for flash messages
+ remove br tag from Fill Rate column (precedes VPT Setpoint) and wrap VPT Setpoint in div.variable-wrapper--v1


### [login page](http://ondreian.github.io/login.html)

+ Logo moved to a div.span12 above the login form
+ added various --v1 classes
+ removed nav bar
+ removed the .pull-right class from the copyright container (so it could be centered)


### [student index page](http://ondreian.github.io/student-index.html) & [manager index page](http://ondreian.github.io/manager-index.html)
+ add body.web2py-index-page--v1
+ add div.actions wrapper to a tags at the top


### [account page](http://ondreian.github.io/account.html)
+ sessions field?
+ add body.web2py-overrides--v1

### [add student page](http://ondreian.github.io/student-add.html)
+ add body.web2py-overrides--v1

### [edit student page](http://ondreian.github.io/student-edit.html)
+ add body.web2py-overrides--v1

### [password reset](http://ondreian.github.io/password-reset.html)
+ add body.web2py-overrides--v1