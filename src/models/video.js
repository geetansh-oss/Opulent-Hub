import { Schema, model } from 'mongoose';

const videoSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Owner'
  },
  editor:{
    type: Schema.Types.ObjectId,
    ref: 'Editor'
  },
  key: {
    type: String,
    required: [true, 'Video key is required']
  },
})

const Video = model("Video",videoSchema);

export default Video;