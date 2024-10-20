export const useLoadCSS = () => {
  return {
    loadCSS(href: string): Promise<void> {
      return new Promise((resolve, reject) => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        link.onload = () => resolve()
        link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`))
        document.head.appendChild(link)
      })
    }
  }
}