import React from 'react';
import TitleBar from './TitleBar.js';
import AddTopic from './AddTopic.js';
import TopicList from './TopicList.js';
import Footer from './Footer.js';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render() {
    return (
      <>
        <TitleBar
          title={this.props.passedPropTitle}
          moderator={this.props.passedPropModerator}/>
        <div className='wrapper'>
          <AddTopic />
          <TopicList passed_posts={this.props.passedPropAllPosts}/>
        </div>
        <Footer footerText={this.props.passedFooter}/>
      </>
    )
  }

};

App.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired
};
