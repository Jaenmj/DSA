function showMap(section) {
    const sections = document.querySelectorAll('#map-container .section');
    sections.forEach(sec => sec.style.display = 'none');
  
    const selectedSection = document.getElementById(section + '-info');
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  
    document.getElementById('buttons-container').style.display = 'none';
    document.getElementById('back-button').style.display = 'block';
    document.getElementById('info-container').style.display = 'none';
    document.getElementById('info-2').style.display = 'none';
    document.getElementById('info-1').style.display = 'none';

  }
  
  function goBack() {
    document.getElementById('buttons-container').style.display = 'block';
    document.getElementById('back-button').style.display = 'none';
    document.getElementById('info-container').style.display = 'block';
    document.getElementById('info-2').style.display = 'block';
    document.getElementById('info-1').style.display = 'block';

    const sections = document.querySelectorAll('#map-container .section');
    sections.forEach(sec => sec.style.display = 'none');
  }
  