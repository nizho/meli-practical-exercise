import React from 'react'

class Breadcrumb extends React.Component{
  
  constructor (props) {
    super(props)
  }

  state = {
    breadcrumb: ''
  }

  componentDidMount () {
    this.breadcrumbCompose()
  }
 
  /**
   * Metodo que permite concatenar las categorias que recibe del componente padre  
   */

  breadcrumbCompose () {
    const categories = this.props.categories
    var breadcrumb = categories.map(categories => categories.name).join(" > ") 
    this.setState({breadcrumb: breadcrumb})
  }
  
  render () {
    return (
      <div className='breadcrumbContainer'>
          <span className='breadcrumb'>{this.state.breadcrumb}</span>
      </div>
    )
  }
}

export default Breadcrumb