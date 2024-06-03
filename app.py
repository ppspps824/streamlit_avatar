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
