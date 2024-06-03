import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode, CSSProperties } from "react"

interface DataItem {
  title: string;
  url: string;
  size: number;
  caption: string;
  key: string;
}

interface AvatarProps {
  args: {
    data_list: DataItem[];
  };
}

class Avatar extends StreamlitComponentBase<AvatarProps> {
  public render = (): ReactNode => {
    const dataList: DataItem[] = this.props.args["data_list"] || [];

    const container_styles: CSSProperties = {
      display: "flex",
      flexDirection: "column",
    };

    return (
      <div style={container_styles}>
        {dataList.map((data, index) => (
          <AvatarComponent
            key={index}
            data={data}
            onClicked={this.onClicked}
          />
        ))}
      </div>
    )
  }

  private onClicked = (title: string, caption: string, key: string): void => {
    Streamlit.setComponentValue({ "title": title, "caption": caption, "key": key })
  }
}

interface AvatarComponentProps {
  data: DataItem;
  onClicked: (title: string, caption: string, key: string) => void;
}

class AvatarComponent extends React.Component<AvatarComponentProps> {
  render() {
    const { data, onClicked } = this.props;

    const container_styles: CSSProperties = {
      display: "flex",
      alignItems: "center",
      margin: "0.5rem"
    };
    const img_styles: CSSProperties = {
      width: data.size,
      height: data.size,
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: "10px",
    };
    const text_container_styles: CSSProperties = {
      display: "flex",
      flexDirection: "column",
    };
    const title_styles: CSSProperties = {
      fontWeight: "bold",
    };
    const caption_styles: CSSProperties = {
      fontSize: "12px",
      color: "gray",
      marginBottom: 0,
    };

    return (
      <div style={container_styles} onClick={() => onClicked(data.title, data.caption, data.key)}>
        <img src={data.url} alt="avatar" style={img_styles} />
        <div style={text_container_styles}>
          <div style={title_styles}>{data.title}</div>
          <p style={caption_styles}>{data.caption}</p>
        </div>
      </div>
    )
  }
}

export default withStreamlitConnection(Avatar)
