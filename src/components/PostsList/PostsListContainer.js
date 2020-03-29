import React from "react";
import { connect } from "react-redux";
import PostsList from "./PostsList";
import PostsListActions from "../../redux/postsOperations";

class PostsListContainer extends React.Component {
  componentWillMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const { fetchRemoveItem } = this.props;
    return <PostsList onRemove={fetchRemoveItem} />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchItems: value => dispatch(PostsListActions.fetchItems(value))
});

export default connect(null, mapDispatchToProps)(PostsListContainer);
