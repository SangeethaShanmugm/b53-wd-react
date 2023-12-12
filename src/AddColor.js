import { useState } from "react";
import { ColorBox } from './ColorBox';

export function AddColor() {
  // const color = "skyblue"
  const [color, setColor] = useState("skyblue");

  const [colorList, setColorList] = useState(["orange", "red", "pink"]); //Array of Strings

  const styles = {
    backgroundColor: color
  };

  return (
    <div>
      <div className='add-color'>
        <input style={styles} type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)} />
        <button
          //copy colorList and add newColor
          onClick={() => {
            setColorList([...colorList, color]);
            console.log("colorList", colorList);
          }}>Add Color</button>
      </div>

      {colorList.map((clr) => {
        console.log(clr);
        return <ColorBox color={clr} />;
      })}

      {/* <ColorBox color={colorList[2]} />
            <ColorBox />
            <ColorBox /> */}
    </div>
  );
}
