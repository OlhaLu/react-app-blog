import React from "react";
import { connect } from "react-redux";
import AddForm from "./AddForm";
import PostsListActions from "../../redux/postsOperations";

class AddFormContainer extends React.Component {
  render() {
    const { createNewPost } = this.props;
    return <AddForm onSubmit={createNewPost} />;
  }
}

const mapDispatchToProps = dispatch => ({
  createNewPost: value => dispatch(PostsListActions.createNewPost(value))
});

export default connect(null, mapDispatchToProps)(AddFormContainer);
