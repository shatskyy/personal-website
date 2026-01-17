'use client'

// Simple markdown-like rendering component
export default function ArticleContent({ content }) {
  const renderContent = (content) => {
    const lines = content.split('\n')
    const elements = []
    let currentParagraph = []
    let listItems = []

    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        // Close any open list
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="list-none mb-4 space-y-2">
              {listItems}
            </ul>
          )
          listItems = []
        }
        // Close any open paragraph
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>)
          currentParagraph = []
        }
        elements.push(<h2 key={`h2-${index}`} className="text-2xl font-bold text-navy-dark mt-8 mb-4">{line.replace('## ', '')}</h2>)
      } else if (line.startsWith('1. ') || line.startsWith('- ')) {
        // Close any open paragraph
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>)
          currentParagraph = []
        }
        const listItem = line.replace(/^[1-9]\.\s|- /, '')
        listItems.push(
          <li key={`li-${index}`} className="text-gray-700 flex items-start">
            <span className="text-teal-600 mr-2">•</span>
            <span>{listItem}</span>
          </li>
        )
      } else if (line.trim() === '') {
        // Close any open paragraph
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>)
          currentParagraph = []
        }
        // Close any open list
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="list-none mb-4 space-y-2">
              {listItems}
            </ul>
          )
          listItems = []
        }
      } else {
        currentParagraph.push(line)
      }
    })

    // Close any remaining paragraph
    if (currentParagraph.length > 0) {
      elements.push(<p key="p-final" className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>)
    }
    // Close any remaining list
    if (listItems.length > 0) {
      elements.push(
        <ul key="ul-final" className="list-none mb-4 space-y-2">
          {listItems}
        </ul>
      )
    }

    return elements
  }

  return <div className="article-content">{renderContent(content)}</div>
}
