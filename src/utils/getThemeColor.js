const getThemeColor = () => {
    const theme = typeof window !== 'undefined' && window.__theme

    if(theme === 'light') return { pd: '#f0f0f3', cover: '#fff' }
    if(theme === 'dark') return { pd: '#192734', cover: '#16202c'}
}

export default getThemeColor