import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab,color}) {
if (color === ""){
  return (
    <div className={className} onClick={()=> {
    var link = "mailto:aliomerkeser@gmail.com"
             + "&subject=" + encodeURIComponent("Hey Ali, I am reaching you from your portfolio site")
             + "&body=" + encodeURIComponent("Can you send me your cv?")
    ;

    window.location.href = link;}} >

      <a class="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}else{
  return (
    <div className={className} onClick={()=> {
    var link = "mailto:aliomerkeser@gmail.com"
             + "&subject=" + encodeURIComponent("Hey Ali, I am reaching you from your portfolio site")
             + "&body=" + encodeURIComponent("Can you send me your cv?")
    ;

    window.location.href = link;}} >

      <a style={{backgroundColor:color,border: `solid 1px ${color}`}} class="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}

}
