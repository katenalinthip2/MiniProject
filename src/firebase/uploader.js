import React, { useState } from 'react';
import { firebase } from './config'

const Uploader = () => {
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState('')
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState('')


    const handChange = e => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file['type']
            const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

            if (validImageTypes.includes(fileType)) {
                setError('err')
                setImage(file)
            }
            else {
                console.log("error");
                setError('Pleaseselect an image to upload')
            }
        }
    }

    const handleUpload = () => {
        if (image != null) {
            const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image)
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                    setProgress(progress)
                },
                error => {
                    console.log(error);
                    setError(error);
                }, () => {
                    firebase.storage().ref('images').child(image.name).getDownloadURL().then( url => {
                        console.log(url);
                        setUrl(url);
                        localStorage.setItem('url',url)
                        setProgress(0)
                        
                    })
                }
            )
        } else {
            setError('err')
        }
    }



    return (
        <div>
            <input type='file' onChange={handChange} /> {''}
            <button onClick={handleUpload}> upload</button>



            <div style={{ height: '100px' }} >
                {progress > 0 ? <progress value={progress} max="100" /> : ""}
                <p style={{ color: 'red', }}> {error} </p>
            </div> </div>
    )
}

export default Uploader;