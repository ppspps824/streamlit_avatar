# streamlit-avater

Component to display avatar icon in Streamlit

![alt text](assets/image.png)

## Installation instructions

```sh
pip install streamlit-avater
```

## Usage instructions

### Simple Usage

```python
from streamlit-avater import avater

avater(url="https://picsum.photos/id/237/300/300",
        size=40,
        title="Hello",
        caption="World",
        key="avater1")
```

### Using Base64

```python
import streamlit as st
from streamlit_custom_avater import avater
import base64

def get_image_base64(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

image_path = "assets/image.png"
image_base64 = get_image_base64(image_path)
image_url = f"data:image/png;base64,{image_base64}"

avater(
    url=image_url,
    size=40,
    title="Hello",
    caption="World",
    key="avater1"
)

```
