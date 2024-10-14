import {useState} from 'react'

export default function page() {

  const [video, setVideo] = useState("");

  function uploadToAws(){

  }

  return (
    <div>
      <section>
      <button onclick={uploadToAws}></button>
      </section>
    </div>
  );
}

