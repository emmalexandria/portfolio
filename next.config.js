/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false


let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

console.log(basePath)

const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
        loader:'imgix',
        path:'emmalexandria.imgix.net',
    }
}


module.exports = nextConfig
