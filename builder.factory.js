const shelljs = require('shelljs')
const path = require('path');

const { watcherFactory } = require('./environment/watcher.js') 

const builderFactory = () => {

    const dir = path.join(__dirname, '/src');
    const distDir = path.join(__dirname, '/dist');
    const watcher = watcherFactory(dir)

    const _devBuildModeConfig = {
        entryPoints: ['src/main.js'],
        bundle: true,
        keepNames: true,
        sourcemap: true,
        target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
        outfile: 'dist/bundle.js',        
        loader: { 
            '.png': 'dataurl',
            '.jpg': 'dataurl',
            '.jpeg': 'dataurl',
            '.webm': 'dataurl',
            '.svg': 'dataurl',
        },
        define: {
        'process.env.NODE_ENV': '"development"',
        }
    }

    const build = (configMode) => {
        watcher.stop()
                
        require('esbuild')
            .build(configMode)
            .then(() => startServer())
            .catch( error => {
                throw new Error(error)
            })     
    }


    const startServer = () => {
        shelljs.cp('src/index.html', 'dist');
        watcher.on('change', build.bind(null, _devBuildModeConfig))
    }

    const devMode = () => {
        build(_devBuildModeConfig)
    }

    const prodMode = () => {
        
        require('esbuild')
            .buildSync({
                entryPoints: ['src/main.js'],
                bundle: true,
                minify: true,
                keepNames: true,
                sourcemap: false,
                target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
                outfile: 'dist/bundle.js',        
                loader: { 
                    '.png': 'dataurl',
                    '.jpg': 'dataurl',
                    '.jpeg': 'dataurl',
                    '.webm': 'dataurl',
                    '.svg': 'dataurl',
                },
                define: {
                'process.env.NODE_ENV': '"production"',
                }
            })

            // shelljs.exec(`http-server -s -a='localhost' --port=3000 ${distDir}`)    
    
    }


    return {
        prodMode,
        devMode
    }

}

module.exports = { builderFactory }