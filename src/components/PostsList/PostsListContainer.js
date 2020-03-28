import React from "react";
import { connect } from "react-redux";
import PostsList from "./PostsList";
import PostsListActions from "../../redux/postsOperations";

class PostsListContainer extends React.Component {
  componentWillMount() {
    const { fetchItems } = this.props;
    console.log("fetchItems in container" + fetchItems);
    fetchItems(fetchItems);
  }
  render() {
    const { fetchRemoveItem } = this.props;
    console.log(this.props.items);
    return <PostsList items={this.props.items} onRemove={fetchRemoveItem} />;
  }
}

export default connect(
  ({ posts }) => posts,
  PostsListActions
)(PostsListContainer);

// const mapDispatchToProps = dispatch => ({
//   onSave: value => dispatch(PostsListActions.fetchItems(value))
// });
