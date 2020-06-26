import React from "react"

export const EditorComponentVimeo = {
  // Visible label
  label: "Vimeo",
  // Internal id of the component
  id: "vimeo",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: "id",
      label: "Vimeo Video ID",
      widget: "string",
    },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^vimeo (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1],
    }
  },
  // Function to create a text block from an instance of this component
  //   toBlock: function(obj) {
  //     return "vimeo " + obj.id
  //   },
  toBlock: function(obj) {
    return `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${String(
      obj.id
    )}?color=000000&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)

  //   toPreview: function(obj) {
  //     return (
  //       <div style="overflow: hidden;padding-bottom: 56.25%;position: relative;height: 0;">
  //         <iframe
  //           src="https://player.vimeo.com/video/${obj.id};"
  //           style="left: 0;top: 0;height: 100%;width: 100%;
  //         position: absolute;"
  //           width="853"
  //           height="505"
  //           frameborder="0"
  //           webkitallowfullscreen
  //           mozallowfullscreen
  //           allowfullscreen
  //         >
  //         </iframe>
  //       </div>
  //     )
  //   },
  toPreview: obj => {
    return "vimeo " + obj.id
  },
}
