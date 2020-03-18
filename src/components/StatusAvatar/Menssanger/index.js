import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Svg, {
    Path, Rect,
  } from 'react-native-svg';
  

import { Avatar } from './styles';

export default function StatusAvatar({border, array, image, ...props}) {
  const [pd,setPd] = useState("")
  const [path,setPath] = useState([])

  const N = () => { return (Math.floor(Math.random() * 65536) - 32768)};

  function myArc(cx, cy, radius, max){       
    var d = " M "+ (cx + radius) + " " + cy;
    let ang = 0;
    while(ang<=max){
      var radians = ang * (Math.PI / 180);  // convert degree to radians
      var x = cx + Math.cos(radians) * radius;  
      var y = cy + Math.sin(radians) * radius;
      d += " L "+x + " " + y;
      ang++
    }
    setPd(d)
  }     

  async function init(a) {
    if(array.length > 0){
      myArc(35, 35, 30, parseInt(360/array.length) == 360?360:parseInt(360/array.length)-8);
      let arr =[];
      let rot = 270;
      await array.map(i=>{
        arr.push(
          <View key={N()} style={{position:'absolute'}}> 
            <Svg width="70" height="70">
              <Path d={pd} fill="none" stroke={i[1]==0?"#007dff":"#b7b7b7"} strokeWidth={2} transform={{ rotation: rot, originX: 35, originY: 35 }} />
            </Svg>
          </View>
        )
        rot = rot + 360/array.length
      })
      setPath(arr)
    }
  }

  useEffect(() => {
    border ? init(array) : null;
  }, [array,pd]);

  return (
    <>
      {path}
      <Avatar source={{uri:image}} {...props}/>
    </>
  );
}