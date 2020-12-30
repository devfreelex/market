const fs = require('fs');
const path = require('path');
const hound = require('hound');
const { Console } = require('console');






const watcherFactory = (basePath) => {

    let watchedFiles = []

    const getAllFiles = (dirPath, arrayOfFiles = []) => {
      files = fs.readdirSync(dirPath)

      files.forEach((file) => {
        fs.statSync(dirPath + "/" + file).isDirectory() ?
          arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles) :
          arrayOfFiles.push(path.join(dirPath, "/", file))
      })

      return arrayOfFiles
    }

    const stop = () => {
      watchedFiles.forEach( watched => {
        watched.clear()       
      })

    }

    const on = async (event, callback) => {
      const files = getAllFiles(basePath)

       watchedFiles = files.map( file => {
        return hound.watch(file) 
      })

      watchedFiles.forEach( watched => {
        watched.on(event, (file, stats) => {
          callback()
          console.log(`on:${event} - ${file}`)
        })        
      })

    } 

    return { on, stop }
}

module.exports = { watcherFactory }