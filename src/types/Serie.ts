export type Serie = {
    category: { attributes: Attributes }
    id: AttributesLabel
    artist: AttributesLabel
    contentType: { attributes: Attributes }
    image: AttributesLabel[]
    name: Label
    price: AttributesLabel
    releaseDate: AttributesLabel
    link: { attributes: Attributes }
    rights?: Label
    summary: Label
    title: Label
  }
  
  type Attributes = {
    id?: string
    label?: string
    scheme?: string
    term?: string
    href?: string
    height?: string
    amount?: string
    currency?: string
    rel?: string
    type?: string
  }
  
  type Label = {
    label: string
  }
  
  type AttributesLabel = {
    label: string
    attributes?: Attributes
  }
  
  