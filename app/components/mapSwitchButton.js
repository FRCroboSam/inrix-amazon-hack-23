import React from 'react';

class MapSwitchButton extends React.Component {
  render() {
    return (
        <div className="bg-black p-4 text-white rounded-lg">
        <form>
            <h2 className="text-2xl font-bold mb-4">Maps</h2>
            <div className="border-t border-white mb-2"></div>
            <label className="option block mb-2">
            <input type="radio" name="option" value="option1" className="mr-2" />
            <span className="custom-radio"></span>
            Route by Fuel
            </label>
            <label className="option block mb-2">
            <input type="radio" name="option" value="option2" className="mr-2" />
            <span className="custom-radio"></span>
            Route by Distance
            </label>
        </form>
        </div>

    );
  }
}

export default MapSwitchButton;