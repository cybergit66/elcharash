// Get the modal
let modal = document.getElementById('myModal');
let modalContent = document.getElementById('ModalContent');
let modalCaption = document.getElementById('ModalCaption');

Videos.onclick = function(event) {
    

    if (event.target.className == 'video-item' || event.target.className == 'video-description' || event.target.className == 'video-title' || event.target.className == 'video-filter') {
        let video = event.target.closest('.video-wrap');
        let videoItem = video.querySelector('.video-item');
        let iframe = video.querySelector('iframe');
        
        if (!iframe) return;

        let iframeURL = `<iframe width=100% height=600 src='${iframe.src}&autoplay=1' frameborder=${iframe.frameborder} allowfullscreen></iframe>`;
        
        let caption = videoItem.getAttribute('video-name');

        modal.style.display = "block";
        modalContent.innerHTML = iframeURL;
        modalCaption.innerHTML = caption;
    }
     
};

myModal.onclick = function(event) {
    if (event.target.className == 'modal-close') {
        modal.style.display = "none";
        modalContent.innerHTML = "";
        modalCaption.innerHTML = "";
    }
}

Blog.onclick = function(event) {
    if (event.target.className == 'minimal-content__text--right' ||  event.target.className == 'minimal-content__text--left middle-line') {
        let content = event.target.closest('.minimal-content');
        let blogSnippet = content.querySelector('.blog-snippet');
        blogSnippet.classList.toggle('open');
    }
}