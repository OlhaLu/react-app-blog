import React from "react";
import style from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        title: nextProps.title,
        body: nextProps.body,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    toast.info(
      "Congrats your post was added, scroll and check down on the main page",
      {
        autoClose: 4000,
      }
    );

    const { title, body } = this.state;
    return axios
      .post("https://simple-blog-api.crew.red/posts", {
        title,
        body,
      })
      .then(() => this.setState({ title: "", body: "" }));
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { title, body } = this.state;

    return (
      <>
        <Form>
          <FormBlock>
            <h4>
              <Label for="title">Post title</Label>
            </h4>
            <input
              onChange={(ev) => this.handleChangeField("title", ev)}
              value={title}
              type="text"
              id="title"
              placeholder="Enter post title"
            />
          </FormBlock>
          <FormBlock>
            <h4>
              <Label for="description">Description</Label>
            </h4>
            <textarea
              onChange={(ev) => this.handleChangeField("body", ev)}
              value={body}
              placeholder="Enter text"
              id="description"
            />
          </FormBlock>
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
        <ToastContainer />
      </>
    );
  }
}

export default AddForm;

const Form = style.form`
  font-size: 20px;
  max-width: 900px;
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

const Label = style.label`
  font-size: 26px;
  margin: 20px;
  `;

const Button = style.button`
    background: #ADD8E6;
    font-size: 14px;
		border-radius: 10px;
		padding: 10px 20px;
		display: block;
		font-family: arial;
		font-weight: bold;
    color: #008080;
		text-decoration: none;
		text-shadow:0px 1px 0px #fff;
		border:1px solid #a7a7a7;
		width: 145px;
		margin:0px auto;
		box-shadow: 0px 2px 1px white inset, 0px -2px 8px white, 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.1);
    -webkit-transition:box-shadow 0.5s;`;
