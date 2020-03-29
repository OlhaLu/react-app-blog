import React from "react";
import { connect } from "react-redux";
import AddForm from "./AddForm";
import selector from "../../redux/postsSelectors";

class AddFormContainer extends React.Component {
  render() {
    const { createNewPost } = this.props;
    return <AddForm createNewPost={createNewPost} />;
  }
}

const mapStateToProps = state => ({
  items: selector.getAllPosts(state)
});

export default connect(mapStateToProps)(AddFormContainer);
