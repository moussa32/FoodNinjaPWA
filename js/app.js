if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((registeriton) => console.log('Service worker registered.', registeriton))
        .catch((error) => console.log('Service worker faild to load', error))
}