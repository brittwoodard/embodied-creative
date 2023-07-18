const hoverDiv = document.querySelector('.hover-div');
  const targetDiv = document.querySelector('.target-div');

  hoverDiv.addEventListener('mouseover', () => {
    targetDiv.style.display = 'block';
  });

  hoverDiv.addEventListener('mouseout', () => {
    targetDiv.style.display = 'none';
  });