import React from "react";
import FullPost from "./FullPost";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PostsListActions from "../../redux/postsOperations";

class FullPostContainer extends React.Component {
  componentDidMount() {
    // console.log("FullPostContainer");
    // console.log(PostsListActions);
    const { post, postId, fetchItem } = this.props;
    if (!post) {
      fetchItem(postId);
    }
  }
  render() {
    const { post } = this.props;
    return !post ? (
      "Loading..."
    ) : (
      <FullPost text={post && post.text} createdAt={post && post.createdAt} />
    );
  }
}

const mapStateToProps = ({ posts }, { match }) => ({
  post: posts && posts.items.filter(post => post._id === match.params.id)[0],
  postId: match.params.id
});

export default withRouter(
  connect(mapStateToProps, PostsListActions)(FullPostContainer)
);
