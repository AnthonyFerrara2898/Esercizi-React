const MouseClicker = () => {
    const handleButtonClick = (event) => {
      console.log(`Button name: ${event.target.name}`);
    };
  
    const handleImageClick = (event) => {
      event.stopPropagation(); // Prevents button's name from being logged
      console.log(`Image src: ${event.target.src}`);
    };
  
    return (
      <div>
        <button name="one" onClick={handleButtonClick}>Click Me One</button>
        <button name="two" onClick={handleButtonClick}>
          <img 
            src="https://via.placeholder.com/50" 
            alt="Placeholder"
            onClick={handleImageClick} 
          />
        </button>
      </div>
    );
  };
  
  export default MouseClicker;
  