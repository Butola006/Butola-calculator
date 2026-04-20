import streamlit as st
from pathlib import Path

html_file = Path(__file__).parent / "index.html"

st.components.v1.html(
    html_file.read_text(encoding="utf-8"),
    height=800,
    scrolling=True
)
