# streamlit-avatar

Component to display avatar icon in Streamlit

![alt text](assets/image.png)

## Installation instructions

```sh
pip install streamlit-avatar
```

## Usage instructions

### Simple Usage

```python
import streamlit as st
from streamlit_avatar import avatar

result = avatar(
    [
        {
            "url": "https://picsum.photos/id/237/300/300",
            "size": 40,
            "title": "Sam",
            "caption": "hello",
            "key": "avatar1",
        },
        {
            "url": "https://picsum.photos/id/238/300/300",
            "size": 40,
            "title": "Bob",
            "caption": "happy",
            "key": "avatar2",
        },
        {
            "url": "https://picsum.photos/id/23/300/300",
            "size": 40,
            "title": "Rick",
            "caption": "Bye",
            "key": "avatar3",
        },
    ]
)
st.write(result)

""" Return
{
"title":"Sam"
"cption":"hello"
"key":"avatar1"
}
"""
```

### Using Base64

```python
import streamlit as st
from streamlit_avatar import avatar
import base64

def get_image_base64(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

image_path = "assets/image.png"
image_base64 = get_image_base64(image_path)
image_url = f"data:image/png;base64,{image_base64}"

result = avatar(
    [
        {
            "url": image_url,
            "size": 40,
            "title": "Sam",
            "caption": "hello",
            "key": "avatar1",
        }
    ]
)
st.write(result)

```
