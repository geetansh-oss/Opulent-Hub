import mongoose from 'mongoose';

let isConnect = "false";
export async function connectToDB(){
  mongoose.set('strictQuery', true);

  if(isConnect){
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL,{
      dbName: "opulent-hub"
    })
    isConnect = true;
  } catch (error) {
    console.error(error);
  }
}