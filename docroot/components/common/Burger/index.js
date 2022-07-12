import { HamburgerSlider } from 'react-animated-burgers';
function Burger({ isActive, toggleButton }) {
    return (
        <HamburgerSlider
            className="custom-burger-styles"
            isActive={isActive}
            toggleButton={toggleButton}
            barColor="white"
            buttonWidth={25}
        />
    );
}

export default Burger;
