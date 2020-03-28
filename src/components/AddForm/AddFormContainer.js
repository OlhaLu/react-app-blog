import React from "react";
import { connect } from "react-redux";
import AddForm from "./AddForm";
import selector from "../../redux/postsSelectors";
import PostsListActions from "../../redux/postsOperations";

class AddFormContainer extends React.Component {
  componentWillMount() {
    const { createNewPost } = this.props;
    createNewPost();
  }

  render() {
    const { createNewPost } = this.props;
    return <AddForm onSubmit={createNewPost} />;
  }
}

const mapStateToProps = state => ({
  items: selector.getAllPosts(state)
});

const mapDispatchToProps = dispatch => ({
  createNewPost: value => dispatch(PostsListActions.createNewPost(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFormContainer);
