import axios from 'axios'
import { useRef, useState } from 'react'

function App() {

  const multiRef = useRef(null)
  const singleRef = useRef(null)

  const [multi, setMulti] = useState()
  const [single, setSingle] = useState()

  const upload = async () => {

    let formData = new FormData()
    console.log(multi)

    for(let i = 0;i<multi.length;i++){
      formData.append('files', multi[i])
    }

    await axios.post( 'http://localhost:1337/upload', formData, {
      "Content-Type": "multipart/form-data"
    })
      .then((res)=>{
        console.log(res)
        console.log(res.data[0].id)
        window.alert('Success!')
      })
      .catch((err)=>{
        window.alert('Failure!')
        console.log(err)
        window.alert(err)
      })
  }

  return (
    <div className="App">
      {/* <form ref={formRef}> */}
        <input 
          ref={multiRef} 
          name="multi" 
          htmlFor="muliti" 
          type="file" 
          multiple 
          onChange={e=>setMulti(e.target.files)} />
        <input 
          ref={singleRef} 
          name="single" 
          htmlFor="single" 
          type="file" 
          onChange={e=>setSingle(e.target.files)} />
        <button
          onClick={upload}>Upload</button>
      {/* </form> */}
    </div>
  );
}

export default App;
