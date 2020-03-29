import React from "react";
import { connect } from "react-redux";
import AddForm from "./AddForm";
import selector from "../../redux/postsSelectors";
import PostsListActions from "../../redux/postsOperations";
// import { AppStateType } from "../../redux/rootReducer";

class AddFormContainer extends React.Component {
  componentWillMount() {
    const { createNewPost } = this.props;
    createNewPost();
  }

  render() {
    const { createNewPost } = this.props;
    return <AddForm createNewPost={createNewPost} />;
  }
}

const mapStateToProps = state => ({
  items: selector.getAllPosts(state)
});

const mapDispatchToProps = dispatch => ({
  createNewPost: value => dispatch(PostsListActions.createNewPost(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFormContainer);
