import React from "react";

function WhiteLayer(){
  const styles = {
    default: {
      position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, 
    }
  }
  return <div style={styles.default}/>
}
export default WhiteLayer;