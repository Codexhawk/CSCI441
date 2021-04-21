import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access, Calculate_rank_and_position_for_posts} from './../imports/api/user_posts.js';
// import TitleBar from './../imports/ui/titlebar.js';
// import AddTopic from './../imports/ui/AddTopic.js';
// import RenderPost from './../imports/ui/RenderPost.js';
import App from './../imports/ui/App.js';


Meteor.startup(() => {
  Tracker.autorun(() => {
    const allPostsInDb = UP_Collection_Access.find({/*emty so get all posts */},
                                                  {sort: {votes: -1}}).fetch();
    let title = '441 reddit';
    let positioned_posts = Calculate_rank_and_position_for_posts(allPostsInDb);

    ReactDOM.render(<App
        passedPropTitle={title}
        passedPropModerator={'newman'}
        //passedPropAllPosts={allPostsInDb}
        passedPropAllPosts={positioned_posts}
        passedFooter={'\u00A9 441 reddit'}
      />, document.getElementById('content'));
  });

});
