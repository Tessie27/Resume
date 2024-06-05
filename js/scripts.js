function showExperience() {
    toggleDetails('experience');
  }
  
  function showEducation() {
    toggleDetails('education');
  }
  
  function showCertification() {
    toggleDetails('certification');
  }
  
  function showSkills() {
    toggleDetails('skills');
  }
  
  function showHonours() {
    toggleDetails('honours');
  }
  
  function showBadges() {
    toggleDetails('badges');
  }
  
  function toggleDetails(id) {
    var details = document.getElementById(id);
    var allDetails = document.querySelectorAll('.details');
  
    allDetails.forEach((item) => {
      if (item.id !== id && item.style.display !== 'none') {
        item.style.display = 'none';
      }
    });
  
    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  }
