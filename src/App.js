import { Component } from "react";
import { fetchImages } from "./services/FetchImages";
import { ToastContainer, toast } from "react-toastify";
import { smoothScroll } from "./services/smoothScroll";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Modal from "./components/Modal/Modal.jsx";
import Button from "./components/Button/Button.jsx";
import SearchBar from "./components/Searchbar/Searchbar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default class App extends Component {
  state = {
    searchValue: "",
    gallery: [],
    page: 1,
    reqStatus: "idle",
    largeImageUrl: null,
  };

  async componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;
    try {
      if (prevState.searchValue !== this.state.searchValue) {
        this.setState({
          reqStatus: "pending",
          largeImageUrl: null,
        });
        const images = await fetchImages(searchValue, page);

        if (searchValue.trim() === "") {
          return;
        }

        if (images.length === 0) {
          toast.error(
            "Sorry, there are no images matching your search query. Please try again.",
            {
              autoClose: 3000,
            }
          );
        }

        this.setState((prev) => ({
          reqStatus: "resolved",
          gallery: images,
          page: prev.page + 1,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleLoadMore = async () => {
    const { searchValue, page } = this.state;
    const images = await fetchImages(searchValue, page);
    this.setState((prev) => ({
      gallery: [...prev.gallery, ...images],
      page: prev.page + 1,
      reqStatus: "pending",
    }));

    smoothScroll();
  };

  handleSubmit = (searchValue) => {
    this.setState({
      searchValue,
      page: 1,
      reqStatus: "pending",
    });
  };

  handleLargeImgUrl = (largeImageUrl) => {
    this.setState({ largeImageUrl });
  };

  toggleModal = () => {
    this.setState({
      largeImageUrl: null,
    });
  };

  render() {
    const { gallery, reqStatus, largeImageUrl } = this.state;
    const galleryLength = gallery.length > 1;

    return (
      <div className="Container">
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery onClick={this.handleLargeImgUrl} gallery={gallery} />
        {reqStatus === "pending" && <Loader />}
        {galleryLength && <Button onClick={this.handleLoadMore} />}
        {largeImageUrl && (
          <Modal src={largeImageUrl} onClose={this.toggleModal}>
            <div style={{ width: 950 }}>
              <img src={largeImageUrl} alt="" />
            </div>
          </Modal>
        )}
        <ToastContainer />
      </div>
    );
  }
}
