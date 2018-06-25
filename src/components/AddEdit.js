import React, { Component } from "react";
import axios from "axios";
import request from "superagent";
import Dropzone from "react-dropzone";

const CLOUDINARY_UPLOAD_PRESET = "yh3oazks";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dgoubi7uv/image/upload";

export default class AddEdit extends Component {
  constructor() {
    super();
    this.state = {
      blog: null,
      uploadedFile: "",
      image: null,
      cloudFile: "",
      content: null,
      title: null
    };
  }

  componentDidMount() {
    // console.log(this.props.id, "id");
    axios.get(`/blog${this.props.id}`).then(res => {
      this.setState({
        blog: res.data,
        content: res.data.content
      });
    });
  }

  onImageDrop(files) {
    console.log(files);
    this.setState({
      uploadedFile: files[0],
      image: files[0]
    });
  }

  imageUpload() {
    request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", this.state.uploadedFile)
      .end((err, response) => {
        //have to use .end to finish sending the request?
        console.log(response);
        if (err) {
          console.error(err);
        }

        if (response.body.secure_url !== "") {
          //.secure_url is what contains the actual url to the image
          this.setState({ cloudFile: response.body.secure_url });

          let body = {
            background: this.state.cloudFile,
            id: this.props.id,
            content: this.state.content,
            title: this.state.title
          };
          axios.post("/story", body).then(res => {
            console.log(res.data);
          });
        }
      });
  }

  updateContent(e) {
    this.setState({ content: e.target.value });
  }

  updateTitle(e) {
    // console.log("hitting setstate");
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <div id="addEdit">
        <input
          type="text"
          value={
            this.state.blog !== null &&
            (this.state.title || this.state.blog.title)
          }
          onChange={e => {
            this.updateTitle(e);
          }}
        />

        <Dropzone
          id="dropzone"
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}
          className="dropzone"
        >
          {/* {JSON.stringify(this.state.blog)} */}
          {this.state.blog !== null &&
            (this.state.image !== null ? (
              <img
                className="thumbnail"
                src={this.state.image.preview}
                alt="previewed image"
              />
            ) : (
              <img src={this.state.blog.background} className="thumbnail" />
            ))}
        </Dropzone>
        <textarea
          name="story"
          value={this.state.content}
          cols="30"
          rows="10"
          className="story-text-edit"
          onChange={e => {
            this.updateContent(e);
          }}
        />
        <button onClick={() => this.imageUpload()}> Save Story</button>
      </div>
    );
  }
}
