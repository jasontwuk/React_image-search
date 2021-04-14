import React from "react";

class ImageCard extends React.Component {
  // *** accessing image height with Refs
  constructor(props) {
    super(props);

    // *** initialize spans' state value
    this.state = { spans: 0 };

    // *** create Ref
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imageRef);

    // *** use "load" event listener to call setSpans callback function when the image is loaded
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    // console.log(this.imageRef.current.clientHeight);

    // *** get the image height
    const height = this.imageRef.current.clientHeight;

    // *** span value for css "grid-row-end"
    // *** [Note: 10 is from ImageList.css grid-auto-rows: 10px]
    const spans = Math.ceil(height / 10);

    // *** update spans' state value
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      // *** add css "grid-row-end" dynamically
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
