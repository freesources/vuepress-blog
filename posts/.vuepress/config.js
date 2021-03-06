module.exports = {
  title: 'My Vuepress Blog',
  description: 'A blog that powered by Vue',
  dest: './dist',
  plugins: ['clean-urls'],
  themeConfig: {
    logo: '/img/logo.png',
    repo: 'https://github.com/tiepnguyen/vuepress-blog',
    repoLabel: 'Repo',
    search: false,
    nav: [{ text: 'Facebook', link: 'https://facebook.com/tiepnguyen' }]
  }
}
