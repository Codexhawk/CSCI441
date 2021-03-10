import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

Tracker.autorun(function(){
  console.log(UP_Collection_Access.find().fetch());
})

const renderPosts = function(passed) {
  let formattedPost = passed.map(function(post){
    return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;
  });
  return formattedPost;
};

Meteor.startup(function(){
  UP_Collection_Access.insert({
    topic: 'kids',
    votes: 2000,
  });

  Tracker.autorun(function(){
    const posts = UP_Collection_Access.find().fetch();
    let title = '441 Reddit';
    let jsx = (
                <div>
                  <h1>{title}</h1>
                  {renderPosts(posts)}
                </div>
              );

              ReactDOM.render(jsx, document.getElementById('content'));
  });



});
