import React from "react"

export const EditorComponentVideo = {
  label: "Video",
  id: "video",

  fields: [
    {
      label: "Video",
      name: "video",
      widget: "file",
    },
  ],

  // https://stackoverflow.com/a/18665332/10340970
  pattern: /<video\s+[^>]*src="([^"]*)"[^>]*>/,

  fromBlock: match => match && { video: match[1] },

  toBlock: ({ video }) =>
    `<video type="video/mp4" controls="" src="${String(video)}" />`,

  toPreview: ({ video }, getAsset, fields) => {
    const videoField = fields[0]
    const src = getAsset(video, videoField)
    return <video width="100%" controls src={src || ""} type="video/mp4" />
  },
}
