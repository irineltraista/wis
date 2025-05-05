document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('videoModalLabel');
    const videoPlayerElement = document.getElementById('videoPlayer');

    let player; // Declare the player variable outside the event listeners

    // Listen for modal show event
    modal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget; // Button that triggered the modal
        const videoUrl = button.getAttribute('data-video-url'); // Get video URL
        const videoTitle = button.getAttribute('data-video-title'); // Get video title

        // Update modal title
        modalTitle.textContent = videoTitle;

        // Initialize Video.js player if it hasn't been initialized yet
        if (!player) {
      
            player = videojs(videoPlayerElement, { inactivityTimeout: 0 });


        }

        // Set video source and play
        player.src({ type: 'video/mp4', src: videoUrl });
        player.load(); // Load the new source
        player.play(); // Autoplay the video

    });

    // Reset video player when modal is hidden
    modal.addEventListener('hidden.bs.modal', function () {
        if (player) {
            player.pause(); // Pause the video
            player.reset(); // Reset the player state
        }
    });
});




