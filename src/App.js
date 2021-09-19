import React, { useState, useEffect } from "react";
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

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [reqStatus, setReqStatus] = useState("idle");
  const [largeImageURL, setLargeImageUrl] = useState(null);

  useEffect(() => {
    if (searchValue.trim() === "") return;

    const fetchGallery = async () => {
      // async () => {
      try {
        setReqStatus("pending");
        setLargeImageUrl(null);

        const images = await fetchImages(searchValue);
        if (images.length === 0) {
          toast.error(
            "Sorry, there are no images matching your search query. Please try again.",
            {
              autoClose: 3000,
            }
          );
        }
        setReqStatus("resolved");
        setPage((prev) => prev + 1);
        setGallery(images);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGallery();
  }, [searchValue]);

  const handleLoadMore = async () => {
    const images = await fetchImages(searchValue, page);
    setReqStatus("pending");
    setGallery((prev) => [...prev, ...images]);
    setPage((prev) => prev + 1);
    smoothScroll();
  };

  const handleSubmit = (searchValue) => {
    setGallery([]);
    setSearchValue(searchValue);
    setPage(1);
    setReqStatus("pending");
  };

  const handleLargeImgUrl = (largeImageURL) => {
    setLargeImageUrl(largeImageURL);
  };

  const handleCloseModal = () => {
    setLargeImageUrl(null);
  };

  const galleryLength = gallery.length > 1;

  return (
    <div className="Container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery onClick={handleLargeImgUrl} gallery={gallery} />
      {reqStatus === "pending" && <Loader />}
      {galleryLength && <Button onClick={handleLoadMore} />}
      {largeImageURL && (
        <Modal src={largeImageURL} onClose={handleCloseModal}>
          <div style={{ width: 850 }}>
            <img src={largeImageURL} alt="" />
          </div>
        </Modal>
      )}
      <ToastContainer />
    </div>
  );
}
