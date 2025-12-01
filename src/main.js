import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const query = event.currentTarget.elements["search-text"].value.trim();

    if (!query) {
        iziToast.warning({
            title: "Warning",
            message: "Please enter a search query",
            position: "topRight"
        });
        return;  
    }
    showLoader();
    clearGallery();
    
    getImagesByQuery(query)
        .then(data => {
            if (!data.hits.length) {
                iziToast.info({
                    title: "Info",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                });
                return;
            }
            
            createGallery(data.hits);
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: "Something went wrong. Please try again later.",
                position: "topRight",
            });
            console.error(error);
        })
        .finally(() => {
            hideLoader();
        });
}