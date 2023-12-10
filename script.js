document.getElementById('skills' + '-info').style.display = 'block';
function showInfo(category) {
    // Get all info elements

    var infoElements = document.querySelectorAll('.info');
  
    // Hide all info elements
    infoElements.forEach(function(infoElement) {
      infoElement.style.display = 'none';
    });
  
    // Show the selected info element
    var selectedInfo = document.getElementById(category + '-info');
    selectedInfo.style.display = 'block';
    
  }
  