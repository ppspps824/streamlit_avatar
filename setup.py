from pathlib import Path

import setuptools

this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()

setuptools.setup(
    name="streamlit-avatar",
    version="0.1.3",
    author="papasim824",
    author_email="papasim824@gmail.com",
    description="Component to display avatar icon in Streamlit",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/ppspps824/streamlit_avatar",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[],
    python_requires=">=3.7",
    install_requires=[
        # By definition, a Custom Component depends on Streamlit.
        # If your component has other Python dependencies, list
        # them here.
        "streamlit >= 0.63",
    ],
    extras_require={"devel": ["wheel"]},
)
