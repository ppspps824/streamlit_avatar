import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode, CSSProperties } from "react"

class Avater extends StreamlitComponentBase {
  public clickContent = ""
  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.
    const url = this.props.args["url"]
    const size = this.props.args["size"]
    const title = this.props.args["title"]
    const caption = this.props.args["caption"]

    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.

    const container_styles: CSSProperties = {
      display: "flex",
      alignItems: "center",
    }
    const img_styles: CSSProperties = {
      width: size,
      height: size,
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: "10px",
    }
    const text_container_styles: CSSProperties = {
      display: "flex",
      flexDirection: "column",
    }
    const title_styles: CSSProperties = {
      fontWeight: "bold",
    }
    const caption_styles: CSSProperties = {
      fontSize: "12px",
      color: "gray",
      marginBottom: 0,
    }

    return (
      <div style={container_styles}>
        <img src={url} alt="avatar" style={img_styles} />
        <div style={text_container_styles}>
          <div style={title_styles}>{title}</div>
          <p style={caption_styles}>{caption}</p>
        </div>
      </div>
    )
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(Avater)
