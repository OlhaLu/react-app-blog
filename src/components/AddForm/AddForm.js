import React from "react";
import style from "styled-components";

class AddForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.items);
  };

  render() {
    return (
      <Form>
        <FormBlock>
          <h4>
            <label for="title">Title</label>
          </h4>
          <input type="text" id="title" placeholder="Enter post title" />
        </FormBlock>
        <FormBlock>
          <h4>
            <label for="description">Description</label>
          </h4>
          <textarea placeholder="Enter text" id="description" />
        </FormBlock>
        <Button type="submit" onSubmit={this.onSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddForm;

const Form = style.form`
  font-size: 20px;
  max-width: 500px;
	padding: 10px 20px;
	background: #f4f7f8;
  margin: 10px auto;
	padding: 20px;
	background: #f4f7f8;
	border-radius: 8px;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const FormBlock = style.label`
  text-align: center;
  background: #ECECEC;
	color: #40a9ff;
	font-size: 0.8em;
	margin-right: 4px;
	line-height: 30px;
	text-shadow: 0 1px 0 rgba(255,255,255,0.2);
	border-radius: 15px 15px 15px 0px;`;

const Button = style.button`
    background: #ECECEC;
    font-size: 14px;
		border-radius: 15px;
		padding: 10px 20px;
		display: block;
		font-family: arial;
		font-weight: bold;
    color: #40a9ff;
		text-decoration: none;
		text-shadow:0px 1px 0px #fff;
		border:1px solid #a7a7a7;
		width: 145px;
		margin:0px auto;
		box-shadow: 0px 2px 1px white inset, 0px -2px 8px white, 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.1);
    -webkit-transition:box-shadow 0.5s;`;
