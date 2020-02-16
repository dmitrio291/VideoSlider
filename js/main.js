document.addEventListener('DOMContentLoaded', () => {

    const navigationItem = document.querySelectorAll('.navigation__item');

    const videoUrl = (url) => {
        for (let i = 0; i < navigationItem.length; i++) {
            document.getElementById('videoSlider').src = ''; 
        }

        document.getElementById('videoSlider').src = url; 
    }

    const videos = ['video/video1.mp4', 'video/video2.mp4', 'video/video3.mp4', 'video/video4.mp4']; 

    for (let i = 0; i < navigationItem.length; i++) {
        
        navigationItem[i].addEventListener('click', () => {
            
            if (navigationItem[i].dataset.video === 'video1') {
                videoUrl(videos[0]);
            }

            if (navigationItem[i].dataset.video === 'video2') {
                videoUrl(videos[1]);
            }

            if (navigationItem[i].dataset.video === 'video3') {
                videoUrl(videos[2]);
            }

            if (navigationItem[i].dataset.video === 'video4') {
                videoUrl(videos[3]);
            }

        });

    }

});

