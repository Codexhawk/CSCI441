import {Meteor} from 'meteor/meteor';

import {UP_Collection_Access} from './../imports/api/user_posts.js';

Meteor.startup(function(){
  UP_Collection_Access.insert({
    topic: 'dog',
    votes: 9,
  });
  UP_Collection_Access.insert({
    topic: 'birds',
    votes: 11,
  });
  console.log(UP_Collection_Access.find().fetch());
});
