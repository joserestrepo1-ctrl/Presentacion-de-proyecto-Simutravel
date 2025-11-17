import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path

st.set_page_config(page_title="SimuTravel - Viajero", page_icon="🧳", layout="wide")
st.title("🧳 SimuTravel - Panel del Viajero")

html_path = Path("frontend/viajero.html")
if html_path.exists():
    components.html(html_path.read_text(encoding="utf-8"), height=900, scrolling=True)
else:
    st.error("No se encontró el archivo viajero.html en /frontend")
