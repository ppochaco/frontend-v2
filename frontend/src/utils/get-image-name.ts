import { Block } from '@blocknote/core'

export default function getImageNameFromBlocks(contents: string): string[] {
  const imageNames: string[] = []

  JSON.parse(contents)
    .filter((block: Block) => block.type === 'image')
    .forEach((block: Block) => {
      if (block.type === 'image') {
        const url = block.props.url.split('/').pop() ?? ''
        imageNames.push(url)
      }
    })

  return imageNames
}
