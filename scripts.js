function markProgress() {
  localStorage.setItem('courseProgress', '100');
  alert("Great job! You've marked this lesson as completed.");
}

window.onload = function () {
  const progress = localStorage.getItem('courseProgress') || 0;
  const progressDisplay = document.getElementById('progress');
  if (progressDisplay) {
    progressDisplay.innerText = progress;
  }
};
