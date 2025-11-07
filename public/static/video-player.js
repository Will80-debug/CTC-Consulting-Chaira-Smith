// Video Toggle Functionality for LLI Coaching Services
function toggleVideo() {
  const video = document.getElementById('coaching-video');
  const placeholder = document.getElementById('video-placeholder');
  const button = document.getElementById('watch-video-btn');
  
  if (!video || !placeholder || !button) {
    console.error('Video elements not found');
    return;
  }
  
  if (video.classList.contains('hidden')) {
    // Show video, hide placeholder
    video.classList.remove('hidden');
    placeholder.style.display = 'none';
    
    // Update button to "Hide Video"
    button.innerHTML = '<i class="fas fa-eye-slash text-lg"></i><span class="text-lg ml-2">Hide Video</span>';
    button.classList.remove('bg-lli-red', 'hover:bg-red-700');
    button.classList.add('bg-gray-600', 'hover:bg-gray-700');
    
    // Auto-play the video
    video.play().catch(e => {
      console.log('Auto-play prevented by browser:', e);
    });
  } else {
    // Hide video, show placeholder
    video.classList.add('hidden');
    placeholder.style.display = 'flex';
    
    // Update button back to "Watch Video"
    button.innerHTML = '<i class="fas fa-play text-lg"></i><span class="text-lg ml-2">Watch Video</span>';
    button.classList.remove('bg-gray-600', 'hover:bg-gray-700');
    button.classList.add('bg-lli-red', 'hover:bg-red-700');
    
    // Pause the video
    video.pause();
    video.currentTime = 0; // Reset to beginning
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('watch-video-btn');
  if (button) {
    button.addEventListener('click', toggleVideo);
  }
});